import { useEffect, useState } from "react";
import FLightsSearching from "./FLightsSearching";
import { useLocation } from "react-router-dom";
//import FlightSearchApi from './Hooks/FlightSearchApi';
import axios from "axios";
import { baseUrl } from "../../../env/env";
const DetailofFlight = () => {
  //const { postApi } = FlightSearchApi()
  const [postApi, setPostApi] = useState([]);
  const { search } = useLocation();
  console.log(search);
  const data = search.slice(search.indexOf("?") + 1);
  console.log(data, "ajaja bhai");
  const params = {};
  data.split("/").forEach((pair) => {
    const [key, value] = pair.split("=");
    params[key] = value;
  });

  const { originLocationCode, destinationLocationCode, adults, Child, Date } =
    params;

  console.log(originLocationCode, "originLocationCode");
  console.log(destinationLocationCode, "destinationLocationCode");
  console.log(adults, "adults");
  console.log(Child, "Child");
  console.log(Date, "Date");

  const callBackData = (data) => {
    console.log("Data in CallBack DetailofFlight", data);
    setPostApi(data);
  };

  const formobject = {
    currencyCode: "USD",
    originDestinations: [
      {
        id: "1",
        // "originLocationCode": "BOS",
        // "destinationLocationCode": "MAD",
        originLocationCode: "",
        destinationLocationCode: "",
        departureDateTimeRange: {
          date: "",
          time: "18:00:00",
        },
      },
    ],
    travelers: [
      // {
      //   "id": "1",
      //   "travelerType": "ADULT",
      //   "fareOptions":["STANDARD"]
      // }
    ],
    sources: ["GDS"],
  };

  const [formValue, setFormValue] = useState(formobject);
  const [newformValue, setnewFormValue] = useState({
    originLocationCode: "",
    destinationLocationCode: "",
    selectedData: "",
  });
  console.log("this is the formValue", formValue);
  const callBackFUNc = () => {
    var travelersData = [];
    formobject.travelers = travelersData;
    for (let i = 1; i <= adults; i++) {
      // console.log(i)
      travelersData.push({
        id: i,
        travelerType: "ADULT",
        fareOptions: ["STANDARD"],
      });
    }

    for (let i = 1; i <= Child; i++) {
      // console.log(i)
      travelersData.push({
        id: 10 + i,
        travelerType: "CHILD",
        fareOptions: ["STANDARD"],
      });
    }
    // for(let i = 1; i <= counting2; i++){
    //   // console.log(i)

    //   travelersData.push({
    //     "id" : 20+i,
    //     "travelerType" : 'Infants',
    //     "fareOptions":["STANDARD"]

    //   })
    // }
  };

  const [DataApi, setDataApi] = useState([]);
  useEffect(() => {
      callBackFUNc();
    formValue.originDestinations[0].originLocationCode = originLocationCode;
    formValue.originDestinations[0].destinationLocationCode =
      destinationLocationCode;
    formobject.originDestinations[0].departureDateTimeRange.date = Date;
    console.log("formValueformValueformValue", formValue);
    axios.post(`${baseUrl}/api/flight-booking`, formobject).then((res) => {
      setDataApi(res.data.data);
    });
  }, [DataApi]);

  console.log(DataApi, "this is new state");

  return (
    <>
      <FLightsSearching callBackData={callBackData} />

      <div class="content-section bottom-spcae">
        <div class="srp py-2">
          <div class="container">
            <div class="row">
              <div class="col-6 col-md-6 col-xl-6 my-2">
                <div class="d-flex justify-content-between align-items-start">
                  <div>
                    <div class="fw-bold">
                      Berlin (BER)<i class="bi bi-arrow-right mx-2"></i>London
                      (LHR)
                    </div>
                    <div class="mb-1 font-small">Sun, Mar 30</div>
                  </div>
                  <div>
                    <span class="font-small">Showing 118 of 118 flights.</span>
                  </div>
                </div>
              </div>
              <div class="col-6 col-md-6 col-xl-6 my-2">
                <div class="d-flex justify-content-between align-items-start">
                  <div>
                    <div class="fw-bold">
                      London (LHR)<i class="bi bi-arrow-right mx-2"></i>Berlin
                      (BER)
                    </div>
                    <div class="mb-1 font-small">Wed, Apr 15</div>
                  </div>
                  <div>
                    <span class="font-small">Showing 146 of 146 flights.</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-6 col-md-6 col-xl-6 mb-3">
                <div class="row">
                  <div class="col-12 col-md-12 d-none d-lg-block">
                    <div class="row g-0 border theme-border-radius p-2 theme-bg-accent-three">
                      <div class="col-md-3">
                        <span class="font-small fw-bold">Airline</span>
                      </div>
                      <div class="col-md-2">
                        <span class="font-small fw-bold">Depart</span>
                      </div>
                      <div class="col-md-2">
                        <span class="font-small fw-bold">Duration</span>
                      </div>
                      <div class="col-md-2">
                        <span class="font-small fw-bold">Arrive</span>
                      </div>
                      <div class="col-md-3 text-center">
                        <span class="font-small fw-bold">
                          Price<i class="bi bi-arrow-up"></i>
                          <input type="checkbox" class="cursor-pointer" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-md-12 d-md-block d-lg-none">
                    <button
                      class="btn w-100 border theme-border-radius p-2 theme-bg-accent-three"
                      type="button"
                    >
                      <i class="bi bi-sliders me-2"></i>
                      <span class="visible-xs font-medium">Sort Depart</span>
                    </button>
                  </div>
                </div>
              </div>
              <div class="col-6 col-md-6 col-xl-6 mb-3">
                <div class="row">
                  <div class="col-12 col-md-12 d-none d-lg-block">
                    <div class="row g-0 border theme-border-radius p-2 theme-bg-accent-three">
                      <div class="col-md-3">
                        <span class="font-small fw-bold">Airline</span>
                      </div>
                      <div class="col-md-2">
                        <span class="font-small fw-bold">Depart</span>
                      </div>
                      <div class="col-md-2">
                        <span class="font-small fw-bold">Duration</span>
                      </div>
                      <div class="col-md-2">
                        <span class="font-small fw-bold">Arrive</span>
                      </div>
                      <div class="col-md-3 text-center">
                        <span class="font-small fw-bold">
                          Price<i class="bi bi-arrow-up"></i>
                          <input type="checkbox" class="cursor-pointer" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-md-12 d-md-block d-lg-none">
                    <button
                      class="btn w-100 border theme-border-radius p-2 theme-bg-accent-three"
                      type="button"
                    >
                      <i class="bi bi-sliders me-2"></i>
                      <span class="visible-xs font-medium">Sort Arrival</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {DataApi ? (
              <div class="row">
                {DataApi?.map((val, index) => (
                  <div
                    class="col-6 col-md-6 col-xl-6 mb-3"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <div class="row g-0 border theme-border-radius theme-box-shadow p-2 align-items-center theme-bg-white">
                      <div class="col-12 col-lg-3">
                        <div>
                          <span class="font-small d-inline-flex mb-0 align-middle lh-1">
                            {" "}
                            |{val.id}
                          </span>
                        </div>
                        <div>
                          <img
                            src="assets/images/icons/6E.jpg"
                            class="img-fluid theme-border-radius"
                            alt="Indigo"
                            title="airline Indigo"
                          />
                        </div>
                        <div>
                          <a href="#" class="font-small">
                            Flight Details
                          </a>
                        </div>
                      </div>
                      <div class="col-4 col-lg-2">
                        <div class="fw-bold">07:20</div>
                        <div class="font-small">BER</div>
                      </div>
                      <div class="col-4 col-lg-2">
                        <div class="font-small">03h 15m</div>
                        <span class="stops"></span>
                        <div class="font-small">Non Stop</div>
                      </div>
                      <div class="col-4 col-lg-2">
                        <div class="fw-bold">08:20</div>
                        <div class="font-small">LHR</div>
                      </div>
                      <div class="col-12 col-lg-3 text-center mt-2 mt-lg-0">
                        <div class="fw-bold">
                          <i class="bi bi-currency-dollar ms-2"></i>
                          {val.price.total}
                        </div>
                        <button type="submit" class="btn-select btn btn-effect">
                          <span class="font-small">Select</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p>Loading data...</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailofFlight;
