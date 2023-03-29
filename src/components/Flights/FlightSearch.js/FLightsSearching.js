import React, { createContext, useState } from "react";
//import FlightSearchApi from './Hooks/FlightSearchApi';
import axios from "axios";
import "react-calendar/dist/Calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { baseUrl } from "../../../env/env";
import { Routes, Route, useNavigate } from "react-router-dom";
import Iata from "../../../Iata";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Footer from "react-multi-date-picker/plugins/range_picker_footer";

const formobject = {
  currencyCode: "USD",
  originDestinations: [
    {
      id: "1",

      originLocationCode: "",
      destinationLocationCode: "",
      departureDateTimeRange: {
        date: "2023-31-05",
        time: "18:00:00",
      },
    },
  ],
  travelers: [
    
  ],
  sources: ["GDS"],
};

const FLightsSearching = (props) => {
  const { callBackData } = props;
  const navigate = useNavigate();
  const [count, setCount] = useState(0);
  const [counting, setCounting] = useState(0);
  const [counting2, setCounting2] = useState(0);
  const [apiRes, setApiRes] = useState([]);

  // this code is used for form Data objects
  const [formValue, setFormValue] = useState(formobject);
  const [newformValue, setnewFormValue] = useState({
    originLocationCode: "",
    destinationLocationCode: "",
    selectedData: "",
  });
  console.log("this is the formValue", formValue);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setnewFormValue({ ...newformValue, [name]: value });
  };

  // date format handlechange
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedMonth, setSelectedMonth] = useState(null);
  const handleDateChange = (date) => {
    if (date instanceof Date && !isNaN(date)) {
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      const formattedDate = `${year}-${month.toString().padStart(2, "0")}-${day
        .toString()
        .padStart(2, "0")}`;
      setSelectedDate(formattedDate);
      const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      const selectedMonthName = monthNames[date.getMonth()];
      setSelectedMonth(selectedMonthName);
    } else {
      console.error(`Invalid date: ${date}`);
    }
  };
  formValue.originDestinations[0].departureDateTimeRange.date = selectedDate;
  const [year, month, day] = selectedDate.split("-");
  console.log(selectedMonth, "selectedMonth");

  // second input return field
  //   const [selectedDate2, setSelectedDate2] = useState(null);
  // const [selectedMonth2, setSelectedMonth2] = useState(null);
  //   const handleDateChange2 = (date) => {
  //     if (date instanceof Date && !isNaN(date)) {
  //       const year = date.getFullYear();
  //       const month = date.getMonth() + 1;
  //       const day = date.getDate();
  //       const formattedDate = `${year}-${month.toString().padStart(2, "0")}-${day.toString().padStart(2, "0")}`;
  //       setSelectedDate2(formattedDate);

  //       const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  //       const selectedMonthName = monthNames[date.getMonth()];
  //       setSelectedMonth2(selectedMonthName);
  //     } else {
  //       console.error(`Invalid date: ${date}`);
  //     }
  //   };
  //   const [year1, month1, day1] = selectedMonth2.split('-')
  //   console.log(selectedMonth2,"selectedMonth")

  // create count of adults code here for first one

  const handleCountChange = (action) => {
    if (action === "increment") {
      setCount(count + 1);
    } else if (action === "decrement" && count > 0) {
      setCount(count - 1);
    }
  };

  // create count of adults code here for second

  const handleCountChange2 = (action) => {
    if (action === "increment") {
      setCounting(counting + 1);
    } else if (action === "decrement" && counting > 0) {
      setCounting(counting - 1);
    }
  };
  // create count of adults code here for third
  const handleCountChange3 = (action) => {
    if (action === "increment") {
      setCounting2(counting2 + 1);
    } else if (action === "decrement" && counting2 > 0) {
      setCounting2(counting2 - 1);
    }
  };

  const callBackFUNc = () => {
    var travelersData = [];
    formValue.travelers = travelersData;
    for (let i = 1; i <= count; i++) {
      // console.log(i)
      travelersData.push({
        id: i,
        travelerType: "ADULT",
        fareOptions: ["STANDARD"],
      });
    }

    for (let i = 1; i <= counting; i++) {
      // console.log(i)
      travelersData.push({
        id: 10 + i,
        travelerType: "CHILD",
        fareOptions: ["STANDARD"],
      });
    }
  };

  // origin code starting from here

  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    const filteredSuggestions = Iata.filter((item) => {
      return item.city.toLowerCase().startsWith(value.toLowerCase());
    });

    setSuggestions(filteredSuggestions);
  };

  const handleSelectItem = (item) => {
    setSelectedItem(item);
    setInputValue(item.city);
    setSuggestions([]);
  };
  function handleInputClear() {
    setInputValue("");
    setSelectedItem(null);
    setSuggestions(false);
  }
  const [inputValue2, setInputValue2] = useState("");
  const [suggestions2, setSuggestions2] = useState([]);
  const [selectedItem2, setSelectedItem2] = useState(null);

  const handleInputChange2 = (event) => {
    const value2 = event.target.value;
    setInputValue2(value2);

    const filteredSuggestion2 = Iata.filter((item) => {
      return item.city.toLowerCase().startsWith(value2.toLowerCase());
    });

    setSuggestions2(filteredSuggestion2);
  };

  const handleSelectItem2 = (item) => {
    setSelectedItem2(item);
    setInputValue2(item.city);
    setSuggestions2([]);
  };
  function handleInputClear2() {
    setInputValue2("");
    setSelectedItem2(null);
    setSuggestions2(false);
  }
  console.log(selectedItem2, "selectedItem");

  const handleClick = (event) => {
    // alert("this is the hitted data")
    event.preventDefault();
    callBackFUNc();
    formValue.originDestinations[0].originLocationCode = newformValue.originLocationCode.toUpperCase();
    formValue.originDestinations[0].destinationLocationCode =
      newformValue.destinationLocationCode.toUpperCase();
    // formValue.travelers =

    formobject.originDestinations[0].departureDateTimeRange.date = selectedDate;
    console.log("formValueformValueformValue", formValue);
    axios.post(`${baseUrl}/api/flight-booking`, formobject).then((res) => {
      if (!newformValue.originLocationCode) {
        toast.error("Please fil the Detial of originLocationCode");
      }
      if (!newformValue.destinationLocationCode) {
        toast.error("Please fil the Detial of destinationLocationCode");
      }
      if (!formValue.originDestinations[0].departureDateTimeRange.date) {
        toast.error("Please fill the Date");
      }
      console.log("res.data", res.data);
      // callBackData(res.data);
      setApiRes(res.data);
    });
    if (
      newformValue.originLocationCode &&
      newformValue.destinationLocationCode &&
      formValue.originDestinations[0].departureDateTimeRange.date
    ) {
      console.log(apiRes,"this is result")
      navigate(
        `/DetailofFlight/?originLocationCode=${formValue.originDestinations[0].originLocationCode}/destinationLocationCode=${formValue.originDestinations[0].destinationLocationCode}/adults=${count}/Child=${counting}/selectedDate=${selectedDate}`
      );
    }
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

  const [selectedOption, setSelectedOption] = useState("");

  // handle option selection
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  console.log(selectedOption, "selectedOption");

  // trip select
  const option = ["One Way", "Round Trip", "Multi City"];
  const [selectOption, setSelectOption] = useState("");
  const selectFeild = (e, value) => {
    console.log("thi is the e", e.target.value);
    setSelectOption(value);
  };
 
  return (
    <>
      <div className="flight-search">
        <div className="container">
          <div
            className="page-section sticky-scroll topSection appendBottom40"
            id="SW"
          >
            <div data-cy="landingContainer" className="landingContainer eng">
              <div className="headerOuter">
                <span className="headerModuleFedTest2"></span>
                <div className="chHeaderWrapper navOnly">
                  <div className="chHeaderContainer">
                    <nav className="Name">
                      <ul className="makeFlex font12">
                        <li className="menu_Flights">
                          <div>
                            <a
                              href="#"
                              className="makeFlex hrtlCenter column active"
                            >
                              <span className="chNavIcon appendBottom2 chSprite chFlights active"></span>
                              <span className="chNavText darkGreyText">
                                Flights
                              </span>
                            </a>
                          </div>
                        </li>
                        <li className="menu_Hotels">
                          <div>
                            <a href="#" className="makeFlex hrtlCenter column">
                              <span className="chNavIcon appendBottom2 chSprite chHotels"></span>
                              <span className="chNavText darkGreyText">
                                {" "}
                                Hotels
                              </span>
                            </a>
                          </div>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            data-cy="flightSW"
            className="widgetSection appendBottom40 primaryTraveler "
          >
            <div className="makeFlex hrtlCenter">
              <ul className="fswTabs latoRegular darkGreyText">
                {option?.map((val, index) => (
                  <li
                    key={index}
                    className={`${selectOption === val ? "selected" : ""}`}
                    value="One Way"
                    onClick={(e) => selectFeild(e, val)}
                  >
                    <span className="tabsCircle appendRight5"></span>
                    {val}
                  </li>
                ))}
              </ul>
            </div>
            <div className="fsw ">
              <div className="fsw_inner returnPersuasion">
                <div className="fsw_inputBox searchCity inactiveWidget ">
                  <label htmlFor="fromCity">
                    <span className="lbl_input  appendBottom10">From</span>
                    <input
                      id="fromCity"
                      type="text"
                      className="fsw_inputField lineHeight36 latoBlack font30"
                      name="originLocationCode"
                      value={newformValue.originLocationCode}
                      onChange={(e) => handleChange(e)}
                    />

                    <p
                      className="code makeRelative"
                      // title="BOM, Chhatrapati Shivaji International Airport India"
                    >
                      <span className="truncate airPortName " title="">
                        {newformValue.originLocationCode} International Airport
                        India
                      </span>
                    </p>
                  </label>
                </div>
                <span className="swipCircle">
                  <span className="landingSprite swipIcon"></span>
                </span>
                <div className="fsw_inputBox searchToCity inactiveWidget ">
                  <label htmlFor="toCity">
                    <span className="lbl_input  appendBottom10">To</span>
                    <input
                      data-cy="toCity"
                      id="toCity"
                      type="text"
                      className="fsw_inputField lineHeight36 latoBlack font30"
                      name="destinationLocationCode"
                      value={newformValue.destinationLocationCode}
                      onChange={(e) => handleChange(e)}
                    />
                    <p
                      className="code makeRelative"
                      // title="DEL, Indira Gandhi International Airport India"
                    >
                      <span className="truncate airPortName " title="">
                        {newformValue.destinationLocationCode}  International Airport India
                      </span>
                    </p> 
                  </label>
                </div>
                <div className="fsw_inputBox dates inactiveWidget ">
                  <label htmlFor="departure">
                    <span className="lbl_input appendBottom10">Departure</span>
                    {/* <input
                      data-cy="departure"
                      id="departure"
                      type="text"
                      name="destinationLocationCode"
                    /> */}
                     <DatePicker
                      numberOfMonths={2}
                      className="fsw_inputField font20"
                      selected={
                        selectedDate && new Date(selectedDate + "T00:00:00")
                      }
                    
                      onChange={(date) => handleDateChange(date)}
                      dateFormat="yyyy-MM-dd"
                      minDate={new Date()}
<<<<<<< HEAD
                    /> 
                  
                     
=======
                      monthsShown={2}
                    />
>>>>>>> d2896686b16bed596e48d0ec84662ca06b8c2131
                    <p
                      data-cy="departureDate"
                      className="blackText font20 code lineHeight36"
                    >
                      <span className="font30 latoBlack">{day ?? "1"} </span>
                      <span>{selectedMonth ?? "March"} </span>
                      {/* <span className="shortYear">{month}</span> */}
                    </p>
                    <p data-cy="departureDay" className="code ">
                      {year ?? "2023"}
                    </p>
                  </label>
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
                                  onClick={() =>
                                    handleCountChange2("decrement")
                                  }
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
                                  onClick={() =>
                                    handleCountChange2("increment")
                                  }
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
                                  onClick={() =>
                                    handleCountChange3("decrement")
                                  }
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
                                  onClick={() =>
                                    handleCountChange3("increment")
                                  }
                                >
                                  <i className="bi bi-plus"></i>
                                </button>
                              </div>
                            </div>
                          </li>
                          <li>
                            <input
                              type="radio"
                              name="class"
                              value="Economy"
                              className="me-2"
                              checked={selectedOption === "Economy"}
                              onChange={handleOptionChange}
                            />
                            <label className="radio-inline" htmlFor="Economy">
                              Economy{" "}
                            </label>
                          </li>
                          <li>
                            <input
                              type="radio"
                              name="class"
                              value="Special"
                              className="me-2"
                              checked={selectedOption === "Special"}
                              onChange={handleOptionChange}
                            />
                            {/* Premium Economy{" "} */}
                            <label
                              className="radio-inline"
                              htmlFor="Premium_Economy"
                            >
                              Premium Economy
                            </label>
                          </li>
                          <li>
                            <input
                              type="radio"
                              name="class"
                              value="Business"
                              className="me-2"
                              checked={selectedOption === "Business"}
                              onChange={handleOptionChange}
                            />

                            <label className="radio-inline" htmlFor="Business">
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
                                checked={selectedOption === "First"}
                                onChange={handleOptionChange}
                              />
                              First Class{" "}
                            </label>
                          </li>
                          <li>
                            <button
                              type="button"
                              className="btn primaryBtn font24 latoBold widgetSearchBtn "
                              onClick={handleDoneClick}
                            >
                              Done
                            </button>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="makeFlex hrtlCenter appendBottom20 flightFare">
                <div className="makeFlex hrtlCenter">
                  <span className="font12 latoBold noShrink appendRight5 selectFareText">
                    Select A<br />
                    Fare Type:
                  </span>
                  <ul className="specialFareNew">
                    <li className="font12 blackText wrapFilter activeItem ">
                      <p className="Name">
                        Regular <br /> Fares
                      </p>
                    </li>
                    <li className="font12 blackText wrapFilter  ">
                      <p className="Name">
                        Armed Forces <br /> Fares
                      </p>
                      <div className="specialFareTooltip whiteText">
                        <p className="font12 latoBold appendBottom5">
                          Armed Forces Fares
                        </p>
                        <p className="font11">
                          Applicable for serving and retired personnel of Armed
                          Forces and Paramilitary Forces, their recognised
                          dependants like spouses and children, and war widows.
                          It is mandatory to show a valid ID or dependant card
                          at the airport, without which boarding might be
                          denied.
                        </p>
                      </div>
                    </li>
                    <li className="font12 blackText wrapFilter  ">
                      <p className="Name">
                        Student <br /> Fares
                      </p>
                      <div className="specialFareTooltip whiteText">
                        <p className="font12 latoBold appendBottom5">
                          Student Fares
                        </p>
                        <p className="font11">
                          Only students above 12 years of age are eligible for
                          special fares and/or additional baggage allowances.
                          Carrying valid student ID cards and student visas
                          (where applicable) is mandatory, else the passenger
                          may be denied boarding or asked to pay for extra
                          baggage.
                        </p>
                      </div>
                    </li>
                    <li className="font12 blackText wrapFilter  ">
                      <p className="Name">
                        Senior Citizen <br /> Fares
                      </p>
                      <div className="specialFareTooltip whiteText">
                        <p className="font12 latoBold appendBottom5">
                          Senior Citizen Fares
                        </p>
                        <p className="font11">
                          Only senior citizens above the age of 60 years can
                          avail this special fare. It is mandatory to produce
                          proof of Date of Birth at the airport, without which
                          prevailing fares will be charged.
                        </p>
                      </div>
                    </li>
                    <li className="font12 blackText wrapFilter  ">
                      <p className="Name">
                        Doctors &amp; Nurses <br /> Fares
                      </p>
                      <div className="specialFareTooltip whiteText">
                        <p className="font12 latoBold appendBottom5">
                          Doctors &amp; Nurses Fares
                        </p>
                        <p className="font11">
                          Applicable only for medical personnel. It is mandatory
                          to show a valid ID at the airport, without which
                          boarding may be denied.
                        </p>
                      </div>
                    </li>
                    <li className="font12 blackText wrapFilter  isItemDisabled">
                      <p className="disabled">
                        Double Seat <br /> Fares
                      </p>
                      <div className="specialFareTooltip whiteText">
                        <p className="font12 latoBold appendBottom5">
                          Fly Safer with Double Seat
                        </p>
                        <p className="font11">
                          Double Seat service is available only for domestic
                          one-way economy flights. You can continue to book at
                          the regular fare or change your search parameter(s) to
                          avail of this service.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="makeFlex perfectCenter appendleft10 recentSearchGrid ">
                  <span className="font12 latoBold">Recent Searches:</span>
                  <ul className="flt-recentSearches makeFlex">
                    <li className="appendLeft10">
                      <a
                        className="darkGreyText"
                        href="https://www.makemytrip.com/flight/search?itinerary=BOM-DEL-10/05/2023_DEL-BOM-11/05/2023&amp;tripType=R&amp;paxType=A-5_C-3_I-2&amp;intl=false&amp;cabinClassName=E&amp;ccde=IN&amp;lang=eng&amp;isGrpBkg=true"
                      >
                        <p className="font12 appendBottom3">
                          Mumbai
                          <span className=" blueRoundTripIcon landingSprite appendLeft5 appendRight5"></span>
                          New Delhi
                        </p>
                        <p className="greyText font10">10 May 23 - 11 May 23</p>
                      </a>
                    </li>
                    <li className="appendLeft10">
                      <a
                        className="darkGreyText"
                        href="https://www.makemytrip.com/flight/search?itinerary=DEL-BLR-05/04/2023_BLR-DEL-02/05/2023&amp;tripType=R&amp;paxType=A-3_C-3_I-2&amp;intl=false&amp;cabinClassName=E&amp;ccde=IN&amp;lang=eng"
                      >
                        <p className="font12 appendBottom3">
                          Delhi
                          <span className=" blueRoundTripIcon landingSprite appendLeft5 appendRight5"></span>
                          Bengaluru
                        </p>
                        <p className="greyText font10">5 Apr 23 - 2 May 23</p>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="makeFlex vrtlCenter ">
                <a
                  type="submit"
                  className="primaryBtn font24 latoBold widgetSearchBtn "
                  onClick={handleClick}
                >
                  Search
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FLightsSearching;
