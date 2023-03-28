import { useEffect, useState } from "react";
import FLightsSearching from "./FLightsSearching";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
//import FlightSearchApi from './Hooks/FlightSearchApi';
import axios from "axios";
import { baseUrl } from "../../../env/env";
import { ThreeDots } from "react-loader-spinner";
const DetailofFlight = () => {  

  //const { postApi } = FlightSearchApi()
  const [postApi, setPostApi] = useState([]);
  const [UrlData , SeturlData] =useState()
  const { search } = useLocation();
  const navigate =useNavigate()
  const [flightDate , setflightDate] = useState('')
  const data = search.slice(search.indexOf("?") + 1);
  const params = {};
  data.split("/").forEach((pair) => {
    const [key, value] = pair.split("=");
    params[key] = value;
  });
  const { originLocationCode, destinationLocationCode, adults, Child, selectedDate } = params;
  // console.log(originLocationCode, "originLocationCode");
  // console.log(destinationLocationCode, "destinationLocationCode");
  // console.log(adults, "adults");
  // console.log(Child, "Child");
  // console.log(Date, "Date");

  console.log('UrlDataUrlDataUrlDataUrlDataUrlData' , UrlData)
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
        "id": "1",
        "travelerType": "ADULT",
        "fareOptions":["STANDARD"]
      }
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
   
  };

  const [DataApi, setDataApi] = useState([]);
  useEffect(() => {
      callBackFUNc();
      formValue.originDestinations[0].originLocationCode = originLocationCode;
      formValue.originDestinations[0].destinationLocationCode =destinationLocationCode;
      formobject.originDestinations[0].departureDateTimeRange.date = selectedDate;
      const options = { day: 'numeric', month: 'short', date: 'numeric' };
      const formattedDate = new Date(selectedDate).toLocaleDateString('en-US', options);
      setflightDate(formattedDate)
      console.log('formattedDateformattedDateformattedDate' , formattedDate)
      console.log("formValueformValueformValue", formValue);
      axios.post(`${baseUrl}/api/flight-booking`, formValue).then((res) => {
        setDataApi(res.data.data);
    });
  }, [DataApi]);

const PriceCheckData =  async (e , selectID) => {
  console.log(selectID.id)
    try{

      const url= `${baseUrl}/api/flight-booking/priceCheck`
      const validData = DataApi.filter((val , index) =>  val.id === selectID.id);
      // SeturlData(validData)
       axios.post(url , validData[0]).then(res => {
        console.log("deep jaswal" ,)
        SeturlData(res.data)
        navigate('/checkout/' , {state : `${JSON.stringify(res.data)}`})

      })

    }catch(err){

    }
}
  return (
    <>
      {/* <FLightsSearching callBackData={callBackData} /> */}
      <div className="content-section bottom-spcae">
        <div className="srp py-2">
          <div className="container">
            <div className="row">
              <div className="col-6 col-md-6 col-xl-6 my-2">
                <div className="d-flex justify-content-between align-items-start">
                  <div>
                    <div className="fw-bold">
                      {originLocationCode}<i className="bi bi-arrow-right mx-2"></i>{destinationLocationCode}
                      {/* (LHR) */}
                    </div>
                    <div className="mb-1 font-small">{flightDate}</div>
                  </div>
                  <div>
                    <span className="font-small">Showing {(DataApi && DataApi.length)&&  DataApi.length} flights.</span>
                  </div>
                </div>
              </div>
              
            </div>
            <div className="row">
              <div className="col-6 col-md-6 col-xl-6 mb-3">
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
                      <span className="visible-xs font-medium">Sort Depart</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-6 col-xl-6 mb-3">
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
                      <span className="visible-xs font-medium">Sort Arrival</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {(DataApi  && DataApi.length > 0) ? (
              <div className="row">
                {DataApi?.slice(0 ,20).map((val, index) => (
                  <div
                    className="col-6 col-md-6 col-xl-6 mb-3"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <div className="row g-0 border theme-border-radius theme-box-shadow p-2 align-items-center theme-bg-white">
                      <div className="col-12 col-lg-3">
                        <div>
                          <span className="font-small d-inline-flex mb-0 align-middle lh-1">
                            {" "}
                            |{val.id}
                          </span>
                        </div>
                        <div>
                          <img
                            src="assets/images/icons/6E.jpg"
                            className="img-fluid theme-border-radius"
                            alt="Indigo"
                            title="airline Indigo"
                          />
                        </div>
                        <div>
                          <a href="#" className="font-small">
                            Flight Details
                          </a>
                        </div>
                      </div>
                      <div className="col-4 col-lg-2">
                        <div className="fw-bold">{val.itineraries[0].segments[0].arrival.at}</div>
                        <div className="font-small">{val.itineraries[0].segments[0].arrival.iataCode}</div>
                      </div>
                      <div className="col-4 col-lg-2">
                        <div className="font-small">03h 15m</div>
                        <span className="stops"></span>
                        <div className="font-small">Non Stop</div>
                      </div>
                      <div className="col-4 col-lg-2">
                        <div className="fw-bold">{val.itineraries[0].segments[0].departure.at}</div>
                        <div className="font-small">LHR</div>
                      </div>
                      <div className="col-12 col-lg-3 text-center mt-2 mt-lg-0">
                        <div className="fw-bold">
                          <i className="bi bi-currency-dollar ms-2"></i>
                          {val.price.total}
                        </div>
                        <button type="submit" className="btn-select btn btn-effect" onClick={e => PriceCheckData(e ,val)}>
                          <Link  className="font-small" >Select</Link>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
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
               /></p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailofFlight;