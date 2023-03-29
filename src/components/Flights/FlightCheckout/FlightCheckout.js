import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import UserDetail from "./UserDetail";

const FlightCheckout = () => {
  const { state } = useLocation();
  const [addAdult , setAddAdult] = useState(false) 
  const [personCount , setPersonCount] = useState()
  const data = [];
  data.push(JSON.parse(state));
  console.log("statestatestatestatestatestate1", data);
  const dateString = data[0].ArivalData[0].arrival;
  const departureDateVal = data[0].ArivalData[0].departure;
  const date = new Date(dateString);
  const departureDate = new Date(departureDateVal);
  // const day
  const day = date.toLocaleDateString("en-us", { weekday: "short" });
  const month = date.toLocaleDateString("en-us", { month: "long" });
  const time = date.toLocaleTimeString("en-us", { timeStyle: "short" });
  const depTime = departureDate.toLocaleTimeString("en-us", {
    timeStyle: "short",
  });

  // const timebetweenFlight = time  - depTime
  const getDate = date.getDate();
  console.log(
    "dateStringdateStringdateString",
    day,
    month,
    getDate,
    time,
    depTime
  );
    // const addinputFunction = () => {
    //   console.log('data[0].travlerPricingdata[0].travlerPricingdata[0].travlerPricing' , data[0].travlerPricing.length) 
      
    // }
    // addinputFunction()

  // open the adult
  const selectAdult = () => {
    // setAddAdult(true)
    // setPersonCount(data[0].travlerPricing);
    // const newData = []
    // if(data[0].travlerPricing.length > newData){
    //   newData.push(personCount);
    //   console.log('newDatanewDatanewDatanewData' , newData)
    //   for(let i = 0; newData[0].length > i; i++ ){
    //       newData.pop(i)
    //   }
    //   console.log(newData)

    // }


  }

 
  const [count, setCount] = useState(0);
const [pTags, setPTags] = useState([]);

const generatePTag = () => {
  return (<div>
<div class="AdultFormWrapper collapse show">
  <div
    class="alert-wrapper makeFlex appendBottom12 appendTop12 paxAlert"
  >
    <div class="makeFlex flexOne column">
      <p class="darkText fontSize12 boldFont">
        <span class="alert-text"
          >Enter name as mentioned on your passport or Government approved
          IDs.</span
        >
      </p>
    </div>
  </div>
  

  <div class="adultDetailsForm">
    <div class="adultDetailsInnner">
      <div class="adultItemRow appendBottom15">
        <div class="adultItem" style={{width: '30%'}}>
          <div class="relative">
            <input
              autocomplete="none"
              placeholder="First &amp; Middle Name"
              class="tvlrInput"
              type="text"
              value=""
            />
          </div>
        </div>
        <div class="adultItem" style={{ width: '30%'}}>
          <div class="relative">
            <input
              autocomplete="none"
              placeholder="Last Name"
              class="tvlrInput"
              type="text"
              value=""
            />
          </div>
        </div>
        <div class="adultItem" style={{width: '30%'}}>
          <div class="selectTab">
            <div>
              <label tabindex="0"
                ><input
                  type="radio"
                  name="gender_MANUAL_16cb94ae-f59f-405b-a3b7-102094725a23"
                  value="MALE"
                /><span class="selectTabText">MALE</span></label
              ><label tabindex="1"
                ><input
                  type="radio"
                  name="gender_MANUAL_16cb94ae-f59f-405b-a3b7-102094725a23"
                  value="FEMALE"
                /><span class="selectTabText">FEMALE</span></label
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="bookingDetailsForm" id="contactDetails">
                            <p class="fontSize14 boldFont appendBottom15">
                              Booking details will be sent to
                            </p>
                            <div class="adultItemRow">
                              <div
                                class="adultItem"
                                id="Country Code"
                              
                              >
                                <label class="makeFlex hrtlCenter">
                                  Country Code
                                </label>
                                <div class="selectItem relative">
                                  <div class="selectList css-2b097c-container">
                                    <div class="dropdown__control css-yk16xz-control">
                                      <div class="dropdown__value-container dropdown__value-container--has-value css-1hwfws3">
                                        <div class="dropdown__single-value css-1uccc91-singleValue">
                                          India(91)
                                        </div>
                                        <div class="css-1g6gooi">
                                          <div
                                            class="dropdown__input"
                                            
                                          >
                                            <input
                                              autocapitalize="none"
                                              autocomplete="off"
                                              autocorrect="off"
                                              id="react-select-2-input"
                                              spellcheck="false"
                                              tabindex="0"
                                              type="text"
                                              aria-autocomplete="list"
                                              value=""
                                            />
                                            <div></div>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="dropdown__indicators css-1wy0on6">
                                        <span class="dropdown__indicator-separator css-1hyfx7x"></span>
                                        <div
                                          aria-hidden="true"
                                          class="dropdown__indicator dropdown__dropdown-indicator css-1eew81i"
                                        >
                                          <svg
                                            height="20"
                                            width="20"
                                            viewBox="0 0 20 20"
                                            aria-hidden="true"
                                            focusable="false"
                                            class="css-19bqh2r"
                                          >
                                            <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
                                          </svg>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="adultItem"
                                id="Mobile No"
                                
                              >
                                <div class="relative">
                                  <label for="popup">Mobile No</label>
                                  <input
                                    autocomplete="none"
                                    placeholder="Mobile No"
                                    class="tvlrInput"
                                    type="text"
                                    value=""
                                  />
                                </div>
                              </div>
                              <div
                                class="adultItem"
                                id="Email"
                               
                              >
                                <div class="relative">
                                  <label for="popup">Email</label>
                                  <input
                                    autocomplete="none"
                                    placeholder="Email"
                                    class="tvlrInput"
                                    type="text"
                                    value=""
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
</div>

  );
};

const handleClick = () => {
  if (count === 0) {
    return;
  }
  setCount(count - 1);
  setPTags([...pTags, generatePTag()]);
};

useEffect(() => {
  let countnum = 0;
  data?.forEach((val) => {
    val.travlerPricing.forEach((val) => {
      countnum += 1;
    });
  });
  setCount(countnum);
}, []);
  

// console.log(counting,"this is count in state ")
  return (
    <>
   
      <div>
        {data?.map((val, index) => (
          <>
            <div className="main-div-sd">
              <div className="componentContainer padding20 appendBottom20">
                <div>
                  <div className="appendBottom20">
                    <section className="flightDetailBlk">
                      <div className="flDetailHdr">
                        <div>
                          <h2 className="blackFont">
                            <b>
                              {val.ArivalData[0].arrivaliataCode} →{" "}
                              {val.ArivalData[0].departureiataCode}
                            </b>
                          </h2>
                          <p className="appendTop10 makeFlex gap-x-10">
                            <span className="scheduleDay">
                              {month}/{day}/{getDate} {time}
                            </span>
                            <span className="fontSize14">
                              {val.ArivalData[0].numOfStops} Stop · 8h 0m
                            </span>
                          </p>
                        </div>
                        <div className="makeFlex column">
                          <p className="refundTag">
                            <font color="#ffffff">Cancellation Fees Apply</font>
                          </p>
                          <p className="fontSize14 linkText appendTop10 textRight">
                            <span>View Fare Rules</span>
                          </p>
                        </div>
                      </div>
                      <div className="flightItenaryWrap">
                        <div className="flightItenaryHdr">
                          <div className="makeFlex gap-x-10">
                            <span className="bgProperties icon24"></span>
                            <p className="makeFlex gap-x-10">
                              <span className="fontSize14 boldFont">
                                AirAsia
                              </span>
                              <span className="fontSize14">I5 492</span>
                            </p>
                          </div>
                          <div className="makeFlex">
                            <div className="makeFlex hrtlCenter">
                              <span className="fontSize14">
                                Economy &gt;
                                <font color="#249995">
                                  <b>Economy</b>
                                </font>
                              </span>
                              <span className="bgProperties icon16 appendLeft5 appendTop2"></span>
                            </div>
                          </div>
                        </div>
                        <div className="flightItenary">
                          <div className="flexOne">
                            <div className="itenaryLeft">
                              <div className="makeFlex gap-x-10">
                                <div className="makeFlex time-info-ui">
                                  <span className="fontSize14 blackFont">
                                    {depTime}
                                  </span>
                                  <span className="layoverCircle"></span>
                                </div>
                                <div>
                                  <span className="fontSize14 blackFont">
                                    {val.ArivalData[0].arrivaliataCode}
                                  </span>
                                  {/* <span className="fontSize14">
                                    . Chhatrapati Shivaji International Airport,
                                    Terminal 2
                                  </span> */}
                                </div>
                              </div>
                              <div className="layover">
                                <span className="fontSize14">1h 45m</span>
                              </div>
                              <div className="makeFlex gap-x-10 overideBg">
                                <div className="makeFlex time-info-ui">
                                  <span className="fontSize14 blackFont">
                                    {time}
                                  </span>
                                  <span className="layoverCircle"></span>
                                </div>
                                <div>
                                  <span className="fontSize14 blackFont">
                                    {val.ArivalData[0].departureiataCode}
                                  </span>
                                  {/* <span className="fontSize14">
                                    . Jaipur Airport
                                  </span> */}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="itenaryRight">
                            <ul className="itenaryList">
                              <li>
                                <span className="fontSize12">Baggage</span>
                                <span className="fontSize12">Check-in</span>
                                <span className="fontSize12">Cabin</span>
                              </li>
                              <li>
                                <span className="fontSize12 blackFont">
                                  ADULT
                                </span>
                                <span className="fontSize12 blackFont">
                                  {val.co2Emissions[0].carryWeight}{" "}
                                  {val.co2Emissions[0].weightUnit} (1 piece
                                  only)
                                </span>
                                <span className="fontSize12 blackFont">
                                  {val.co2Emissions[0].cabin}
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </section>
                    <div id="TRAVELLER_DETAIL" className="oneCard-element">
                      <div className="componentContainer appendTop15 appendBottom20">
                        <div className="travellerWrapper">
                          <div className="travellerHeading paddingTop20 appendBottom20">
                            <h2 className="fontSize18 blackFont">
                              Traveller Details
                            </h2>
                          </div>
                          <div className="travellerLoginSection appendBottom20">
                            <div className="makeFlex perfectCenter">
                              <div className="appendRight10">
                                <span className="loginUserImg bgProperties"></span>
                              </div>
                              <p className="fontSize14">
                                Log in to view your
                                <b>
                                  saved traveller list, unlock amazing deals
                                </b>{" "}
                                &amp; much more!
                              </p>
                            </div>
                            <div>
                              <button className="loginBtn">LOGIN NOW</button>
                            </div>
                          </div>
                          <div className="appendBottom20" id="wrapper_ADULT">
                            <div className="adultDetailsHeading">
                              <div className="makeFlex perfectCenter">
                                <div className="appendRight10">
                                  <span className="adultImg bgProperties"></span>
                                </div>
                                <p className="fontSize14">
                                  <font className="boldFont">ADULT (12 yrs+)</font>
                                </p>
                              </div>
                              <div className="makeFlex perfectCenter fontSize14 boldFont">
                                <font color="#4a4a4a">0/1</font>
                                <font color="#9b9b9b">&nbsp;added</font>
                              </div>
                            </div>
                            <div className="adultListWrapper">
                              <div className="collapse"></div>
                              <div className="otherList">
                                <span>
                                  You have not added any adults to the list
                                </span>
                              </div>
                              <div class="otherList">
                                <button type="button" class="addTravellerBtn" onClick={handleClick}>
                                  + ADD NEW ADULT
                                </button>
                              </div>
                              {pTags}

                    <div className="travellerWrapper">
                      <div className="travellerHeading paddingTop20 appendBottom20">
                        <h2 className="fontSize18 blackFont">
                          Traveller Details
                        </h2>
                      </div>
                      <div className="travellerLoginSection appendBottom20">
                        <div className="makeFlex perfectCenter">
                          <div className="appendRight10">
                            <span className="loginUserImg bgProperties"></span>
                          </div>
                          <p className="fontSize14">
                            Log in to view your
                            <b>
                              saved traveller list, unlock amazing deals
                            </b>{" "}
                            &amp; much more!
                          </p>
                        </div>
                        <div>
                          
                          <div class="padding20" id="gstDetails">
                            <label class="checkboxContainer">
                              <span class="commonCheckbox sizeSm primaryCheckbox">
                                <input type="checkbox" value="" />
                                <span className="box">
                                  <span className="check"></span>
                                </span>
                              </span>
                              <div className="checkboxContent">
                                <p className="checkboxTitle">
                                  <span className="boldFont">
                                    <font color="#000000">
                                      I have a GST number
                                    </font>
                                    <font color="#9b9b9b">(Optional)</font>
                                  </span>
                                </p>
                              </div>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="bookingDetailsForm" id="contactDetails">
                        <p className="fontSize14 boldFont appendBottom15">
                          Booking details will be sent to
                        </p>
                        <div className="adultItemRow">
                          <div className="adultItem" id="Country Code">
                            <label className="makeFlex hrtlCenter">
                              Country Code
                            </label>
                            <div className="selectItem relative">
                              <div className="selectList css-2b097c-container">
                                <div className="dropdown__control css-yk16xz-control">
                                  <div className="dropdown__value-container dropdown__value-container--has-value css-1hwfws3">
                                    <div className="dropdown__single-value css-1uccc91-singleValue">
                                      India(91)
                                    </div>
                                    <div className="css-1g6gooi">
                                      <div className="dropdown__input">
                                        <input
                                          autocapitalize="none"
                                          autocorrect="off"
                                          id="react-select-2-input"
                                          spellcheck="false"
                                          type="text"
                                          value=""
                                        />
                                        <div></div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="dropdown__indicators css-1wy0on6">
                                    <span className="dropdown__indicator-separator css-1hyfx7x"></span>
                                    <div
                                      aria-hidden="true"
                                      className="dropdown__indicator dropdown__dropdown-indicator css-1eew81i"
                                    >
                                      <svg
                                        height="20"
                                        width="20"
                                        viewBox="0 0 20 20"
                                        aria-hidden="true"
                                        focusable="false"
                                        className="css-19bqh2r"
                                      >
                                        <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="adultItem" id="Mobile No">
                            <div className="relative">
                              <label htmlFor="popup">Mobile No</label>
                              <input
                                placeholder="Mobile No"
                                className="tvlrInput"
                                type="text"
                                value=""
                              />
                            </div>
                          </div>
                          <div className="adultItem" id="Email">
                            <div className="relative">
                              <label htmlFor="popup">Email</label>
                              <input
                                placeholder="Email"
                                className="tvlrInput"
                                type="text"
                                value=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <div className="padding20" id="gstDetails">
                        <label className="checkboxContainer">
                          <span className="commonCheckbox sizeSm primaryCheckbox">
                            <input type="checkbox" value="" />
                            <span className="box">
                              <span className="check"></span>
                            </span>
                          </span>
                          <div className="checkboxContent">
                            <p className="checkboxTitle">
                              <span className="boldFont">
                                <font color="#000000">I have a GST number</font>
                                <font color="#9b9b9b">(Optional)</font>
                              </span>
                            </p>
                          </div>
                        </label>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="pageRightContainer customScroll">
                <div id="FARE_SUMMARY">
                  <section className="fareSummary">
                    <div>
                      <p className="fontSize18 blackFont">Fare Summary</p>
                    </div>

                    <div className="fareTypeWrap">
                      {val.travlerPricing.map((val, index) => (
                        <div className="fareRow">
                          <div className="makeFlex hrtlCenter pointer flexOne">
                            {/* <span className="appendTop5">
                            <span className="iconPlusImg bgProperties"></span>
                          </span> */}
                            <span className="fareHeader">
                              {val.traverltype}
                            </span>
                          </div>
                          <span className="fontSize14 darkText">
                            ${val.ticketPrice}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="fareFooter">
                      <p className="fareRow">
                        <span className="fontSize16 blackFont">
                          Total Amount
                        </span>
                        <span className="fontSize16 blackFont">
                          ${val.total}
                        </span>
                      </p>
                    </div>
                  </section>
                </div>
                <div className="checkOutBtn">
                  <button>Checkout</button>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default FlightCheckout;
