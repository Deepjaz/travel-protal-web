<<<<<<< HEAD
=======

>>>>>>> d86714f590e244a9e4407b64397171e92add6327
import React, { createContext, useState } from "react";
//import FlightSearchApi from './Hooks/FlightSearchApi';
import axios from "axios";
import "react-calendar/dist/Calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { baseUrl } from "../../../env/env";
import { Routes, Route, useNavigate } from "react-router-dom";
import Iata from "../../../Iata";

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
    // {
    //   "id": "1",
    //   "travelerType": "ADULT",
    //   "fareOptions":["STANDARD"]
    // }
  ],
  sources: ["GDS"],
};

const FLightsSearching = (props) => {
  const { callBackData } = props;
  const navigate = useNavigate();
  const [count, setCount] = useState(0);
  const [counting, setCounting] = useState(0);
  const [counting2, setCounting2] = useState(0);
  const [apiRes, setApiRes] = useState();

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
    formobject.travelers = travelersData;
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
    event.preventDefault();
    callBackFUNc();
    formValue.originDestinations[0].originLocationCode = selectedItem.iata_code;
    formValue.originDestinations[0].destinationLocationCode =
      selectedItem2.iata_code;
    formobject.originDestinations[0].departureDateTimeRange.date = selectedDate;
    console.log("formValueformValueformValue", formValue);
    axios.post(`${baseUrl}/api/flight-booking`, formobject).then((res) => {
      console.log("res.data", res.data);
      callBackData(res.data);
    });

    navigate(
      `/DetailofFlight/?originLocationCode=${selectedItem.iata_code}/destinationLocationCode=${selectedItem2.iata_code}/adults=${count}/Child=${counting}/Date=${selectedDate}`
    );
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
            <div className="widgetLoader landingSearchWidget IN"></div>
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
                      onChange={e =>handleChange(e)}    
                    />
                    <p
                      className="code makeRelative"
                      title="BOM, Chhatrapati Shivaji International Airport India"
                    >
                      <span className="truncate airPortName " title="">
                        BOM, Chhatrapati Shivaji International Airport India
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
                      onChange={e =>handleChange(e)}    

                    />
                    <p
                      className="code makeRelative"
                      title="DEL, Indira Gandhi International Airport India"
                    >
                      <span className="truncate airPortName " title="">
                        DEL, Indira Gandhi International Airport India
                      </span>
                    </p>
                  </label>
                </div>
                <div className="fsw_inputBox dates inactiveWidget ">
                  <label htmlFor="departure">
                    <span className="lbl_input appendBottom10">Departure</span>
                    <input
                      data-cy="departure"
                      id="departure"
                      type="text"
                      name="destinationLocationCode"
                    />
                    <DatePicker
                      // className="fsw_inputField font20"

                            selected={
                              selectedDate &&
                              new Date(selectedDate + "T00:00:00")
                            }
                            onChange={(date) => handleDateChange(date)}
                            dateFormat="yyyy-MM-dd"
                          />
                    <p
                      data-cy="departureDate"
                      className="blackText font20 code lineHeight36"
                    >
                      <span className="font30 latoBlack">10 </span>
                      <span>May</span>
                      <span className="shortYear">23</span>
                    </p>
                    <p data-cy="departureDay" className="code ">
                      Wednesday
                    </p>
                  </label>
                </div>
                <div className="fsw_inputBox dates reDates inactiveWidget  ">
                  <div className="returnPersuasionTooltip hide">
                    <p>
                      Return fares may hike due to high demand. Book now using
                      myBiz special fare &amp; cancel/change date for FREE later
                      if plan changes
                    </p>
                  </div>
                  <label htmlFor="return">
                    <span className="lbl_input appendBottom10">Return</span>
                    <input
                      data-cy="return"
                      id="return"
                      type="text"
                      className="fsw_inputField font20"
                      value="Thursday, 11 May 2023"
                    />
                    <p
                      data-cy="returnDate"
                      className="blackText font20 code lineHeight36"
                    >
                      <span className="font30 latoBlack">11</span>
                      <span>May</span>
                      <span className="shortYear">23</span>
                    </p>
                    <p data-cy="returnDay" className="code ">
                      Thursday
                    </p>
                  </label>
                  <p
                    className="dateErrorMsgForFlight whiteText"
                    id="range_error"
                  >
                    You are booking for more than 30 days
                  </p>
                  <span className="returnCross landingSprite"></span>
                </div>
                {/* <div data-cy="flightTraveller" className="fsw_inputBox flightTravllers inactiveWidget "><label
                    htmlFor="travellers"><span className="lbl_input appendBottom5">Travellers &amp; Class</span><input
                        data-cy="travellers" id="travellers" type="text" className="fsw_inputField font30 latoBlack"
                         value="0 Infant, 0 Adult, 1 Children" />
                    <p className="blackText font20 code lineHeight36"><span data-cy="travellerText"
                            className="appendRight10"><span className="font30 latoBlack">1&nbsp;</span>Traveller</span></p>
                    <p className="appendBottom1 ">Economy/Premium Economy</p>
                    <div className="introGBFlt">
                        <p className="introGBFltTag ecoGBFlt whiteText">Group Bookings Available!</p>
                        <div className="introGBFltTooltip whiteText">Save on bookings with more than 9 travellers</div>
                    </div>
                </label></div> */}
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
              <p data-cy="submit" className="makeFlex vrtlCenter ">
                <a className="primaryBtn font24 latoBold widgetSearchBtn ">
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
