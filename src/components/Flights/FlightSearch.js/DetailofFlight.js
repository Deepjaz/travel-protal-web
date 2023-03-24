import axios from 'axios';
import {useEffect, useState , useContext} from 'react'
import { useLocation } from 'react-router-dom';
import { baseUrl } from '../../../env/env';
import FLightsSearching, { formobject } from './FLightsSearching';
//import FlightSearchApi from './Hooks/FlightSearchApi';
import {ContextProvider} from "./FLightsSearching"
const DetailofFlight = () => {
    const [postApi, setPostApi] = useState([]);
    const  location  = useLocation();
    const [formValue, setFormValue] = useState(formobject);
    const [newformValue, setnewFormValue] = useState({
        originLocationCode: "",
        destinationLocationCode: "",
        selectedData: "",
      });
    var locationData  = location.search.split("?=&")[0];
    var latestLocation = locationData.slice(locationData.indexOf('?') + 1)
    const keyValues = {}
    latestLocation.split('/').forEach((val , key) => {
        console.log('latestLocationlatestLocation' , latestLocation) 
        console.log('valvalval' ,val);
        keyValues[key] = val;
          
    })

    const callBackData = (data) => {
        console.log('Data in CallBack DetailofFlight', data);
        setPostApi(data);
    }
    const flightSetails = () => { 
        formValue.originDestinations[0].originLocationCode =keyValues[0];
        formValue.originDestinations[0].originLocationCode =keyValues[1];
        const url= `${baseUrl}/api/flight-booking`;
        axios.post(url , formValue).then(res => {
            console.log("deepjaswal" ,res.data.data)
        })
    }
    // flightSetails()
   useEffect(() => {
    flightSetails()
   })

  return (
    <>
    <FLightsSearching callBackData={callBackData}/>
      <div className="content-section bottom-spcae">
            <div className="srp py-2">
                <div className="container">
                    <div className="row">
                        <div className="col-6 col-md-6 col-xl-6 my-2">
                            <div className="d-flex justify-content-between align-items-start">
                                <div>
                                    <div className="fw-bold">Berlin (BER)<i className="bi bi-arrow-right mx-2"></i>London (LHR)
                                    </div>
                                    <div className="mb-1 font-small">Sun, Mar 30</div>
                                </div>
                                <div>
                                    <span className="font-small">Showing 118 of 118 flights.</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-md-6 col-xl-6 my-2">
                            <div className="d-flex justify-content-between align-items-start">
                                <div>
                                    <div className="fw-bold">London (LHR)<i className="bi bi-arrow-right mx-2"></i>Berlin (BER)
                                    </div>
                                    <div className="mb-1 font-small">Wed, Apr 15</div>
                                </div>
                                <div>
                                    <span className="font-small">Showing 146 of 146 flights.</span>
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
                                            <span className="font-small fw-bold">Price<i className="bi bi-arrow-up"></i>
                                                <input type="checkbox" className="cursor-pointer"/>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-12 d-md-block d-lg-none">
                                    <button className="btn w-100 border theme-border-radius p-2 theme-bg-accent-three"
                                        type="button">
                                        <i className="bi bi-sliders me-2"></i><span className="visible-xs font-medium">Sort
                                            Depart</span>
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
                                            <span className="font-small fw-bold">Price<i className="bi bi-arrow-up"></i>
                                                <input type="checkbox" className="cursor-pointer"/>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-12 d-md-block d-lg-none">
                                    <button className="btn w-100 border theme-border-radius p-2 theme-bg-accent-three"
                                        type="button">
                                        <i className="bi bi-sliders me-2"></i><span className="visible-xs font-medium">Sort
                                            Arrival</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                    {
                        postApi?.map((val, index) => (
                           
                            <div className="col-6 col-md-6 col-xl-6 mb-3" data-aos="fade-up" data-aos-delay="100">
                             
                            <div
                                className="row g-0 border theme-border-radius theme-box-shadow p-2 align-items-center theme-bg-white">
                                <div className="col-12 col-lg-3">
                                    <div>
                                        <span className="font-small d-inline-flex mb-0 align-middle lh-1">  |
                                            {val.id}</span>
                                    </div>
                                    <div>
                                        <img src="assets/images/icons/6E.jpg" className="img-fluid theme-border-radius"
                                            alt="Indigo" title="airline Indigo"/>
                                    </div>
                                    <div>
                                        <a href="#" className="font-small">Flight Details</a>
                                    </div>
                                </div>
                                <div className="col-4 col-lg-2">
                                    <div className="fw-bold">07:20</div>
                                    <div className="font-small">BER</div>
                                </div>
                                <div className="col-4 col-lg-2">
                                    <div className="font-small">03h 15m</div>
                                    <span className="stops"></span>
                                    <div className="font-small">Non Stop</div>
                                </div>
                                <div className="col-4 col-lg-2">
                                    <div className="fw-bold">08:20</div>
                                    <div className="font-small">LHR</div>
                                </div>
                                <div className="col-12 col-lg-3 text-center mt-2 mt-lg-0">
                                    <div className="fw-bold"><i className="bi bi-currency-dollar ms-2"></i>{val.price.total}</div>
                                    <button type="submit" className="btn-select btn btn-effect">
                                        <span className="font-small">Select</span>
                                    </button>
                                </div>
                            </div>
                            </div>
                            )
                        )
                        
                    }
                    </div>
                  
                 
               
                </div>
            </div>
 
           

        </div>
    </>
  )
}

export default DetailofFlight
