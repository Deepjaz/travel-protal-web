import React, { useState } from "react";
//import FlightSearchApi from './Hooks/FlightSearchApi';
import axios from "axios";
import "react-calendar/dist/Calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { baseUrl } from "../../../env/env";
import {Routes, Route, useNavigate} from 'react-router-dom';
import FlightCount from './FlightCount';
const formobject = {
  "currencyCode": "USD",
  "originDestinations": [
    {
      "id": "1",
      // "originLocationCode": "BOS",
      // "destinationLocationCode": "MAD",
      'originLocationCode' : "",
      'destinationLocationCode' : '',
      "departureDateTimeRange": {
        "date": "",
        "time": "18:00:00"
      }
    }
  ],
  "travelers": [
    {
      "id": "1",
      "travelerType": "ADULT",
      "fareOptions":[ "STANDARD"]
    }
  ],
  "sources": [
    "GDS"
  ]
};


const FLightsSearching = ({ callBackData }) => {

  


  const navigate = useNavigate();
  // this code is used for form Data objects
  const [formValue, setFormValue] = useState(formobject);
  const [newformValue ,setnewFormValue] = useState({
    "originLocationCode" : '',
    'destinationLocationCode': '',
    'selectedData': ''
  })
  console.log('this is the formValue' , formValue)
  const handleChange = (event) => {
    const { name, value } = event.target;
    setnewFormValue({ ...newformValue, [name]: value });

  };

  

  // date format handlechange
  const [selectedDate, setSelectedDate] = useState("");

  const handleDateChange = (date) => {
    if (date instanceof Date && !isNaN(date)) {
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      const formattedDate = `${year}-${month.toString().padStart(2, "0")}-${day
        .toString()
        .padStart(2, "0")}`;
      setSelectedDate(formattedDate);
      // formValue.originDestinations[0].departureDateTimeRange.date = selectedDate

    } else {
      console.error(`Invalid date: ${date}`);
    }
  };



// create count of adults code here for first one 
const [count, setCount] = useState(0);

const handleCountChange = (action) => {
    if (action === "increment") {
      setCount(count + 1);
    } else if (action === "decrement" && count > 0) {
      setCount(count - 1);
    }
  };

// create count of adults code here for second 

const [counting, setCounting] = useState(0);
const handleCountChange2 = (action) => {
    if (action === "increment") {
        setCounting(counting + 1);
    } 
    else if (action === "decrement" && counting > 0) {
        setCounting(counting - 1);
    }
  };
// create count of adults code here for third 
const [counting2, setCounting2] = useState(0);
const handleCountChange3 = (action) => {
    if (action === "increment") {
      setCounting2(counting2 + 1);
    } 
    else if (action === "decrement" && counting2 > 0) {
      setCounting2(counting2 - 1);
    }
  };
  const {CallBackFunctionF} = FlightCount()


  const handleClick = (event) => {
    CallBackFunctionF(count,counting,counting2)
    event.preventDefault()
    console.log(formValue, "formValue");
    console.log("yes clicked");
    formValue.originDestinations[0].originLocationCode = newformValue.originLocationCode;
    formValue.originDestinations[0].destinationLocationCode = newformValue.destinationLocationCode;
    formobject.originDestinations[0].departureDateTimeRange.date =selectedDate
    axios.post(`${baseUrl}/api/flight-booking`, formobject).then((res) => {
      console.log('res.data')
      
    })
    navigate('/DetailofFlight');
  };


  // this is dropdown code 
  const [isOpen, setIsOpen] = useState(false);

const handleButtonClick = () => {
  setIsOpen(!isOpen);
};

const handleDoneClick = () => {
  setIsOpen(false);
};




// radio button handling

const [selectedOption, setSelectedOption] = useState('');

// handle option selection
const handleOptionChange = (event) => {
  setSelectedOption(event.target.value);
};
console.log(selectedOption,"selectedOption")









  return (
    <>
      <div className="flight-search">
        <div className="container">
          <ul className="nav nav-tabs border-0" role="tablist">
            <li className="nav-item">
              <button
                className="nav-link active"
                id="oneway-tab"
                data-bs-toggle="tab"
                data-bs-target="#oneway"
                type="button"
                role="tab"
                aria-controls="oneway"
                aria-selected="true"
              >
                <span className="d-inline-block icon-20 rounded-circle bg-white align-middle me-2"></span>
                One-way
              </button>
            </li>
            
            
          </ul>

          <div className="tab-content">
            <div id="oneway" className="tab-pane active">
              <div className="row">
                <div className="col-12">
                  <div className="search-pan row mx-0 theme-border-radius">
                    <div className="col-12 col-lg-4 col-xl-2 ps-0 mb-2 mb-xl-0 pe-0 pe-lg-2">
                      <div className="form-group">
                        <i className="bi bi-geo-alt-fill position-absolute h2 icon-pos"></i>
                        <input
                          type="text"
                          className="form-control ps-5"
                          id="onewayOrigin"
                          placeholder="Origin"
                          name={"originLocationCode"}
                          value={newformValue.originLocationCode}
                          onChange={handleChange}
                        />
                        <button className="pos-swap">
                          <i className="bi bi-arrow-left-right pl-1"></i>
                        </button>
                      </div>
                    </div>
                    <div className="col-12 col-lg-4 col-xl-2 ps-0 mb-2 mb-xl-0 pe-0 pe-lg-2">
                      <div className="form-group">
                        <i className="bi bi-geo-alt-fill position-absolute h2 icon-pos"></i>
                        <input
                          type="text"
                          className="form-control ps-5"
                          id="onewayDestination"
                          placeholder="Destination"
                          value={newformValue.destinationLocationCode}
                          onChange={handleChange}
                          name={"destinationLocationCode"}
                        />
                      </div>
                    </div>
                    <div className="col-12 col-lg-4 col-xl-3 ps-0 mb-2 mb-xl-0 pe-0 pe-lg-0 pe-xl-2">
                      <div className="form-control form-group d-flex">
                        <i className="bi bi-calendar3 position-absolute h2 icon-pos"></i>
                        <span className="dep-date-input">
                          {/* <input type="text" className="cal-input" placeholder="Depart Date"
                                                        id="datepicker"
                                                        value={formValue.departureDate}
                                                        onChange={handleChange}
                                                        Name ={'departureDate'}
                                                        /> */}

                          {/* <Calendar onChange={onChange} value={value} /> */}
                          <DatePicker
                            selected={
                              selectedDate &&
                              new Date(selectedDate + "T00:00:00")
                            }
                            onChange={(date) => handleDateChange(date)}
                            dateFormat="yyyy-MM-dd"
                          />
                        </span>
                      </div>
                    </div>
                    <div className="col-12 col-lg-6 col-xl-3 ps-0 mb-2 mb-lg-0 mb-xl-0 pe-0 pe-lg-2">
                      <div className="dropdown" id="myDD">
                        <button
                          className="dropdown-toggle form-control"
                          type="button"
                          id="travellerInfoOneway"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                          onClick={handleButtonClick}
                        >
                          <i className="bi bi-person-lines-fill position-absolute h2 icon-pos"></i>
                          <span className="text-truncate">
                            1 Traveller(s), Economy

                          </span>
                        </button>
                        {isOpen && (
                        <div
                          className="dropdown-menu"
                          aria-labelledby="travellerInfoOneway"
                        >
                          <ul className="drop-rest">
                            <li>
                              <div className="d-flex">Select Adults</div>
                              <div className="ms-auto input-group plus-minus-input">
                                <div className="input-group-button">
                                  <button
                                    type="button"
                                    className="circle"
                                    data-quantity="minus"
                                    data-field="onewayAdult"
                                    onClick={() => handleCountChange("decrement")}
                                  >
                                    <i className="bi bi-dash"></i>
                                  </button>
                                </div>
                                <input
                                  className="input-group-field"
                                  type="number"
                                  name="onewayAdult"
                                  value={count}
                                />
                                <div className="input-group-button">
                                  <button
                                    type="button"
                                    className="circle"
                                    data-quantity="plus"
                                    data-field="onewayAdult"
                                    onClick={() => handleCountChange("increment")}
                                  >
                                    <i className="bi bi-plus"></i>
                                  </button>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="d-flex">Select Child</div>
                              <div className="ms-auto input-group plus-minus-input">
                                <div className="input-group-button">
                                  <button
                                    type="button"
                                    className="circle"
                                    data-quantity="minus"
                                    data-field="onewayChild"
                                    onClick={() => handleCountChange2("decrement")}
                                  >
                                    <i className="bi bi-dash"></i>
                                  </button>
                                </div>
                                <input
                                  className="input-group-field"
                                  type="number"
                                  name="onewayChild"
                                  value={counting}
                                />
                                <div className="input-group-button">
                                  <button
                                    type="button"
                                    className="circle"
                                    data-quantity="plus"
                                    data-field="onewayChild"
                                    onClick={() => handleCountChange2("increment")}
                                  >
                                    <i className="bi bi-plus"></i>
                                  </button>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="d-flex">Select Infants</div>
                              <div className="ms-auto input-group plus-minus-input">
                                <div className="input-group-button">
                                  <button
                                    type="button"
                                    className="circle"
                                    data-quantity="minus"
                                    data-field="onewayInfant"
                                    onClick={() => handleCountChange3("decrement")}
                                  >
                                    <i className="bi bi-dash"></i>
                                  </button>
                                </div>
                                <input
                                  className="input-group-field"
                                  type="number"
                                  name="onewayInfant"
                                  value={counting2}
                                />
                                <div className="input-group-button">
                                  <button
                                    type="button"
                                    className="circle"
                                    data-quantity="plus"
                                    data-field="onewayInfant"
                                    onClick={() => handleCountChange3("increment")}
                                  >
                                    <i className="bi bi-plus"></i>
                                  </button>
                                </div>
                              </div>
                            </li>
                            <li>
                              <label className="radio-inline">
                                <input
                                  type="radio"
                                  name="class"
                                  value="Economy"
                                  className="me-2"
                                  checked={selectedOption === 'Economy'}
                                  onChange={handleOptionChange}
                                />
                                Economy{" "}
                              </label>
                            </li>
                            <li>
                              <label className="radio-inline">
                                <input
                                  type="radio"
                                  name="class"
                                  value="Special"
                                  className="me-2"
                                  checked={selectedOption === 'Special'}
                                  onChange={handleOptionChange}
                                />
                                Premium Economy{" "}
                              </label>
                            </li>
                            <li>
                              <label className="radio-inline">
                                <input
                                  type="radio"
                                  name="class"
                                  value="Business"
                                  className="me-2"
                                  checked={selectedOption === 'Business'}
                                  onChange={handleOptionChange}
                                />
                                Business{" "}
                              </label>
                            </li>
                            <li>
                              <label className="radio-inline">
                                <input
                                  type="radio"
                                  name="class"
                                  value="First"
                                  className="me-2"
                                  checked={selectedOption === 'First'}
                                  onChange={handleOptionChange}
                                />
                                First Class{" "}
                              </label>
                            </li>
                            <li>
                              <button type="button" className="btn btn" onClick={handleDoneClick}>
                                Done
                              </button>
                            </li>
                          </ul>
                        </div>
                        )}
                      </div>
                    </div>
                    <div className="col-12 col-lg-6 col-xl-2 px-0">
                      <button
                        type="submit"
                        className="btn btn-search"
                        onClick={handleClick}
                      >
                        <span className="fw-bold">Search</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-12 mt-4">
                  <div className="row">
                    <div className="col-12">
                      <div className="form-check-inline">
                        <label className="check-wrap">
                          Refundable Flights
                          <input type="checkbox" />
                          <span className="checkmark"></span>{" "}
                        </label>
                      </div>
                      <div className="form-check-inline">
                        <label className="check-wrap">
                          {" "}
                          Non Stop Flights
                          <input type="checkbox" />
                          <span className="checkmark"></span>{" "}
                        </label>
                      </div>
                      <div className="form-check-inline">
                        <label className="check-wrap">
                          {" "}
                          GDS Special Return
                          <input type="checkbox" />
                          <span className="checkmark"></span>{" "}
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="return" className="tab-pane fade">
              <div className="row">
                <div className="col-sm-12 col-md-12">
                  <div className="search-pan row mx-0 theme-border-radius">
                    <div className="col-12 col-lg-4 col-xl-2 ps-0 mb-2 mb-xl-0 pe-0 pe-lg-2">
                      <div className="form-group">
                        <i className="bi bi-geo-alt-fill position-absolute h2 icon-pos"></i>
                        <input
                          type="text"
                          className="form-control ps-5"
                          id="returnOrigin"
                          placeholder="Origin"
                        />
                        <button className="pos-swap">
                          <i className="bi bi-arrow-left-right pl-1"></i>
                        </button>
                      </div>
                    </div>
                    <div className="col-12 col-lg-4 col-xl-2 ps-0 mb-2 mb-xl-0 pe-0 pe-lg-2">
                      <div className="form-group">
                        <i className="bi bi-geo-alt-fill position-absolute h2 icon-pos"></i>
                        <input
                          type="text"
                          className="form-control ps-5"
                          id="returnDestination"
                          placeholder="Destination"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-lg-4 col-xl-3 ps-0 mb-2 mb-xl-0 pe-0 pe-lg-0 pe-xl-2">
                      <div className="form-control form-group d-flex">
                        <i className="bi bi-calendar3 position-absolute h2 icon-pos"></i>
                        <span className="dep-date-input">
                          <input
                            type="text"
                            className="cal-input"
                            placeholder="Depart Date"
                            id="datepicker1"
                          />
                        </span>
                        <span className="arv-date-input ms-2">
                          <input
                            type="text"
                            className="cal-input"
                            placeholder="Return Date"
                            id="datepickerNull"
                          />
                        </span>
                      </div>
                    </div>
                    <div className="col-12 col-lg-6 col-xl-3 ps-0 mb-2 mb-lg-0 mb-xl-0 pe-0 pe-lg-2">
                      <div className="dropdown" id="myDDReturn">
                        <button
                          className="dropdown-toggle form-control"
                          type="button"
                          id="travellerInfoReturn"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="bi bi-person-lines-fill position-absolute h2 icon-pos"></i>
                          <span className="text-truncate">
                            1 Traveller(s), Economy
                          </span>
                        </button>
                        {
                          isOpen &&
                       
                        <div
                          className="dropdown-menu"
                          aria-labelledby="travellerInfoReturn"
                        >
                          <ul className="drop-rest">
                            <li>
                              <div className="d-flex">Select Adults</div>
                              <div className="ms-auto input-group plus-minus-input">
                                <div className="input-group-button">
                                  <button
                                    type="button"
                                    className="circle"
                                    data-quantity="minus"
                                    data-field="onewayAdult"
                                  >
                                    <i className="bi bi-dash"></i>
                                  </button>
                                </div>
                                <input
                                  className="input-group-field"
                                  type="number"
                                  name="onewayAdult"
                                  value="0"
                                />
                                <div className="input-group-button">
                                  <button
                                    type="button"
                                    className="circle"
                                    data-quantity="plus"
                                    data-field="onewayAdult"
                                  >
                                    <i className="bi bi-plus"></i>
                                  </button>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="d-flex">Select Child</div>
                              <div className="ms-auto input-group plus-minus-input">
                                <div className="input-group-button">
                                  <button
                                    type="button"
                                    className="circle"
                                    data-quantity="minus"
                                    data-field="onewayChild"
                                  >
                                    <i className="bi bi-dash"></i>
                                  </button>
                                </div>
                                <input
                                  className="input-group-field"
                                  type="number"
                                  name="onewayChild"
                                  value="0"
                                />
                                <div className="input-group-button">
                                  <button
                                    type="button"
                                    className="circle"
                                    data-quantity="plus"
                                    data-field="onewayChild"
                                  >
                                    <i className="bi bi-plus"></i>
                                  </button>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="d-flex">Select Infants</div>
                              <div className="ms-auto input-group plus-minus-input">
                                <div className="input-group-button">
                                  <button
                                    type="button"
                                    className="circle"
                                    data-quantity="minus"
                                    data-field="onewayInfant"
                                  >
                                    <i className="bi bi-dash"></i>
                                  </button>
                                </div>
                                <input
                                  className="input-group-field"
                                  type="number"
                                  name="onewayInfant"
                                  value="0"
                                />
                                <div className="input-group-button">
                                  <button
                                    type="button"
                                    className="circle"
                                    data-quantity="plus"
                                    data-field="onewayInfant"
                                  >
                                    <i className="bi bi-plus"></i>
                                  </button>
                                </div>
                              </div>
                            </li>
                            <li>
                              <label className="radio-inline">
                                <input
                                  type="radio"
                                  name="class"
                                  value="Economy"
                                  className="me-2"
                                />
                                Economy{" "}
                              </label>
                            </li>
                            <li>
                              <label className="radio-inline">
                                <input
                                  type="radio"
                                  name="class"
                                  value="Special"
                                  className="me-2"
                                />
                                Premium Economy{" "}
                              </label>
                            </li>
                            <li>
                              <label className="radio-inline">
                                <input
                                  type="radio"
                                  name="class"
                                  value="Business"
                                  className="me-2"
                                />
                                Business{" "}
                              </label>
                            </li>
                            <li>
                              <label className="radio-inline">
                                <input
                                  type="radio"
                                  name="class"
                                  value="First"
                                  className="me-2"
                                />
                                First Class{" "}
                              </label>
                            </li>
                            <li>
                              <button type="button" className="btn btn" onclick={handleDoneClick}>
                                Done
                              </button>
                            </li>
                          </ul>
                        </div>
                         }
                      </div>
                    </div>
                    <div className="col-12 col-lg-6 col-xl-2 px-0">
                      <button
                        type="submit"
                        className="btn btn-search"
                        onclick="window.location.href='flight-listing-round-trip.html';"
                      >
                        <span className="fw-bold">Search</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

           
          </div>
        </div>
      </div>
    </>
  );
};

export default FLightsSearching;