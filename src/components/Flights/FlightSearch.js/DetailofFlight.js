import { useEffect, useState } from "react";
import FLightsSearching from "./FLightsSearching";
import { redirect, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../../env/env";
import { ThreeDots } from "react-loader-spinner";
import moment from "moment";
import flightimg from "../../../assets/images/6E.png";
const DetailofFlight = () => {
  const [postApi, setPostApi] = useState([]);
  const { search } = useLocation();
  const [flightDate, setflightDate] = useState("");
  const [flightvalue, setFlightValue] = useState([]);
  const [arivalTime, setArivalTime] = useState("");
  const [spinnerState, setSpinnerState] = useState(false);
  const data = search.slice(search.indexOf("?") + 1);

  const params = {};
  data.split("/").forEach((pair) => {
    const [key, value] = pair.split("=");
    params[key] = value;
  });
  const pignationCount = 10;
  const newData = Math.floor(100 / 6);
  console.log(newData);
  const {
    originLocationCode,
    destinationLocationCode,
    adults,
    Child,
    selectedDate,
  } = params;

  const navigate = useNavigate();

  const callBackData = (data) => {
    setPostApi(data);
  };

  const formobject = {
    currencyCode: "USD",
    originDestinations: [
      {
        id: "1",
        originLocationCode: "",
        destinationLocationCode: "",
        departureDateTimeRange: {
          date: "",
          time: "18:00:00",
        },
      },
    ],
    travelers: [
      {
        id: "1",
        travelerType: "ADULT",
        fareOptions: ["STANDARD"],
      },
    ],
    sources: ["GDS"],
  };

  const [formValue, setFormValue] = useState(formobject);
  const [newformValue, setnewFormValue] = useState({
    originLocationCode: "",
    destinationLocationCode: "",
    selectedData: "",
  });

  const callBackFUNc = () => {
    var travelersData = [];
    formobject.travelers = travelersData;

    for (let i = 1; i <= adults; i++) {
      travelersData.push({
        id: i,
        travelerType: "ADULT",
        fareOptions: ["STANDARD"],
      });
    }

    for (let i = 1; i <= Child; i++) {
      travelersData.push({
        id: 10 + i,
        travelerType: "CHILD",
        fareOptions: ["STANDARD"],
      });
    }
  };

  useEffect(() => {
    callBackFUNc();

    formValue.originDestinations[0].originLocationCode = originLocationCode;
    formValue.originDestinations[0].destinationLocationCode =
      destinationLocationCode;
    formobject.originDestinations[0].departureDateTimeRange.date = selectedDate;

    const options = { day: "numeric", month: "short", date: "numeric" };
    const formattedDate = new Date(selectedDate).toLocaleDateString(
      "en-US",
      options
    );
    setflightDate(formattedDate);

    axios.post(`${baseUrl}/api/flight-booking`, formValue).then((res) => {
      setDataApi(res.data.data);
    });
  }, []);

  const [DataApi, setDataApi] = useState([]);

  const PriceCheckData = async (e, selectID) => {
    try {
      const url = `${baseUrl}/api/flight-booking/priceCheck`;
      const validData = DataApi.filter((val, index) => val.id === selectID.id);
      // SeturlData(validData)
      setSpinnerState(true);

      axios.post(url, validData[0]).then((res) => {
        console.log("deep jaswal", res.data);
        console.log("deep jaswal1", res.data.flightOffers);
        if (res.status === 201) {
          setSpinnerState(false);
          res.data.flightOffers.forEach((val, index) => {
            console.log("this is the my value", val);

            const arivalData = val.itineraries[0].segments.map((segment) => {
              return {
                arrival: segment.arrival.at,
                departure: segment.departure.at,
                arrivaliataCode: segment.arrival.iataCode,
                arrivaltermial: segment.arrival.terminal,
                departureiataCode: segment.departure.iataCode,
                departuretermial: segment.departure.terminal,
                numOfStops: segment.numberOfStops,
                aircarftCode: segment.aircraft.code,
                // cotwoEmissions : segment.co2Emissions.weight
              };
            });

            //cabin map
            var cabinDetailed;
            if (!val.itineraries[0].segments[0].co2Emissions) {
              return;
            } else {
              const cabinDetails =
                val.itineraries[0].segments[0].co2Emissions.map((cabin) => {
                  return {
                    carryWeight: cabin.weight,
                    weightUnit: cabin.weightUnit,
                    cabin: cabin.cabin,
                  };
                });
              cabinDetailed = cabinDetails;
            }

            const travlerPricing = val.travelerPricings.map((val, index) => {
              return {
                traverltype: val.travelerType,
                ticketPrice: val.price.total,
              };
            });

            const newValues = {
              id: val.id,
              currency: val.price.currency,
              total: val.price.total,
              basePrice: val.price.base,
              ArivalData: arivalData,
              co2Emissions: cabinDetailed,
              travlerPricing: travlerPricing,
            };
            // setFlightValue()

            console.log("this is the new value data", newValues);

            navigate("/FlightCheckout/", {
              state: `${JSON.stringify(newValues)}`,
            });
          });
        }
      });
    } catch (err) {}
  };
  //

  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);

  const indexOflastPage = currentPage * postPerPage;
  const indexOfirstpage = indexOflastPage - postPerPage;
  // const currentPost = DataApi.splice(indexOfirstpage, indexOflastPage);

  const pagenumber = [];
  for (let i = 1; i <= Math.ceil(DataApi.length / postPerPage); i++) {
    pagenumber.push(i);
  }
  const pignation = (number) => setCurrentPage(number)
  return (
    <>
      {spinnerState && (
        <div className="SpinnerLoader">
          <p className="loader-spinner">
            <ThreeDots
              height="80"
              width="80"
              radius="9"
              color="#4fa94d"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
          </p>
        </div>
      )}

      {/* <FLightsSearching callBackData={callBackData} /> */}
      <div className="content-section bottom-spcae">
        <div className="srp py-2">
          <div className="container">
            <div className="row">
              <div className="col-6 col-md-6 col-xl-6 my-2">
                <div className="d-flex justify-content-between align-items-start">
                  <div>
                    <div className="fw-bold">
                      {originLocationCode}
                      <i className="bi bi-arrow-right mx-2"></i>
                      {destinationLocationCode}
                      {/* (LHR) */}
                    </div>
                    <div className="mb-1 font-small">{flightDate}</div>
                  </div>
                  <div>
                    <span className="font-small">
                      Showing {DataApi && DataApi.length && DataApi.length}{" "}
                      flights.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-12 col-xl-12 mb-3">
                <div className="row">
                  <div className="col-12 col-md-12 d-none d-lg-block">
                    <div className="row g-0 border theme-border-radius p-2 theme-bg-accent-three">
                      <div className="col-md-3">
                        <span className="font-small fw-bold">Airline</span>
                      </div>
                      <div className="col-md-2">
                        <span className="font-small fw-bold">Depart</span>
                      </div>
                      <div className="col-md-2">
                        <span className="font-small fw-bold">Duration</span>
                      </div>
                      <div className="col-md-2">
                        <span className="font-small fw-bold">Arrive</span>
                      </div>
                      <div className="col-md-3 text-center">
                        <span className="font-small fw-bold">
                          Price<i className="bi bi-arrow-up"></i>
                          <input type="checkbox" className="cursor-pointer" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-12 d-md-block d-lg-none">
                    <button
                      className="btn w-100 border theme-border-radius p-2 theme-bg-accent-three"
                      type="button"
                    >
                      <i className="bi bi-sliders me-2"></i>
                      <span className="visible-xs font-medium">
                        Sort Depart
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {DataApi && DataApi.length > 0 ? (
              <>
                <div className="row">
                  {DataApi?.slice(indexOfirstpage, indexOflastPage).map(
                    (val, index) => (
                      <div
                        className="col-6 col-md-6 col-xl-6 mb-3"
                        data-aos="fade-up"
                        data-aos-delay="100"
                      >
                        <div className="row g-0 border theme-border-radius theme-box-shadow p-2 align-items-center theme-bg-white">
                          <div className="col-12 col-lg-3">
                            <div>
                              {/* {
                            
                            DataApi.dictionaries.map(val => (
                               <li className="valueFeild">{val}</li>
                            ))
                          } */}
                            </div>
                          </div>

                          <div className="col-4 col-lg-2">
                            <div>
                              {new Date(
                                val.itineraries[0].segments[0].departure.at
                              ).toLocaleDateString("en-us", {
                                dateStyle: "short",
                              })}
                            </div>
                            {new Date(
                              val.itineraries[0].segments[0].departure.at
                            ).toLocaleTimeString("en-us", {
                              timeStyle: "short",
                            })}

                            <div className="fw-bold"></div>
                            <div className="font-small">
                              {val.itineraries[0].segments[0].arrival.iataCode}
                            </div>
                          </div>
                          <div className="col-4 col-lg-2">
                            <div className="font-small">
                              {/* {diffInMinutes} */}
                            </div>
                            <span className="stops"></span>
                            <div className="font-small">Non Stop</div>
                          </div>
                          <div className="col-4 col-lg-2">
                            <div>
                              {new Date(
                                val.itineraries[0].segments[0].arrival.at
                              ).toLocaleDateString("en-us", {
                                dateStyle: "short",
                              })}
                            </div>
                            <div className="fw-bold">
                              {new Date(
                                val.itineraries[0].segments[0].arrival.at
                              ).toLocaleTimeString("en-us", {
                                timeStyle: "short",
                              })}
                            </div>
                            <div className="font-small">LHR</div>
                          </div>
                          <div className="col-12 col-lg-3 text-center mt-2 mt-lg-0">
                            <div className="fw-bold">
                              <i className="bi bi-currency-dollar ms-2"></i>
                              {val.price.total}
                            </div>
                            <button
                              type="submit"
                              className="btn-select btn btn-effect flightDetailsbtn"
                              onClick={(e) => PriceCheckData(e, val)}
                            >
                              <span className="font-small">Select</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    )
                  )}
                </div>
                <div className="pignationsteps">
                  {pagenumber?.map((number) => (
                    
                    <li  key={number} className={`${currentPage == number ? "pignationActice" : ''}`} onClick={e => pignation(number)}>{number}</li>
                  ))}
                </div>
              </>
            ) : (
              <p className="loader-spinner">
                <ThreeDots
                  height="80"
                  width="80"
                  radius="9"
                  color="#4fa94d"
                  ariaLabel="three-dots-loading"
                  wrapperStyle={{}}
                  wrapperClassName=""
                  visible={true}
                />
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailofFlight;
