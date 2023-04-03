import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import UserDetail from "./UserDetail";
import FareRules from "./FareRules";
import moment from "moment";
import SignIn from "../../SignIn/SignIn";

const FlightCheckout = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [activeform, setactiveform] = useState(false);
  const [selectGender, setSelectGender] = useState("");
  const [childcount  , setChildCount] = useState('');
  const  [LoginToken , setLoginToken] = useState(localStorage.getItem('login-token'))
  const [checkout , setCheckout] = useState(false)
  const data = [];
  // const {flightOffers} = state;
  data.push(JSON.parse(state));
  console.log("statestatestatestatestatestate1", data);

  const dateString = data[0].ArivalData[0].arrival;
  const departureDateVal = data[0].ArivalData[0].departure;
  const date = new Date(dateString);
  const departureDate = new Date(departureDateVal);
  // const day
  const day = date.toLocaleDateString("en-us", { weekday: "short" });
  console.log('day asfgszhj', day);
  const month = date.toLocaleDateString("en-us", { month: "long" });
  const time = date.toLocaleTimeString("en-us", { timeStyle: "short" });
  const depTime = departureDate.toLocaleTimeString("en-us", {
    timeStyle: "short",
  });
  
  const startTime = moment(time, '"HH:mm:ss a"');
  const endTime = moment(depTime, '"HH:mm:ss a"');
  var duration = moment.duration(endTime.diff(startTime)) 
  var hours = parseInt(duration.hours())
  var min = parseInt(duration.minutes())





  

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

  const [count, setCount] = useState(0);
  const [pTags, setPTags] = useState([]);
  const [formHandle, setformHandle] = useState([
    {
      firstName: "",
      lastName: "",
    },
  ]);


  console.log("formHandleformHandleformHandle", formHandle);

  const addFromvalues = (e, index) => {
    setactiveform(true);
    const fromdata = [];
    fromdata.push(data[0]?.travlerPricing.length);
    const value = [];
    for (let i = 0; i < data[0]?.travlerPricing.length; i++) {
      console.log("this is the index", value.push(index + i));
      if (formHandle.length === i) {
        setformHandle([...formHandle, { firstName: "", lastName: "" }]);
      }
    }
  };

  const { firstName, lastName } = formHandle;

  const hadleChange = (event, index) => {
    const newformvalue = [...formHandle];
    newformvalue[index][event.target.name] = event.target.value;
    setformHandle(newformvalue);
  };
  const selgeder = (e, index) => {
    console.log("this is the index", index);
    for (let i = 0; i < formHandle.length; i++) {
      console.log(i);
    }
  };

  const fromSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("personData", JSON.stringify(formHandle));
  };
    const travlerPricing = data[0].travlerPricing;
    

    var AdultticketPrice = ''
    console.log("selectGender", travlerPricing);
    const filtervalue = travlerPricing.reduce((count ,entry) => {
      console.log('countcountcountcount' , count) 
      console.log('countcountcountcoun1t' , entry) 
          if(entry.traverltype === "ADULT"){
              count ++;
              AdultticketPrice = entry.ticketPrice;
            console.log('countcountcount' ,count)
        }
        
        return count;
    },0)
    var childticketPrice = ''
    const chilCount = travlerPricing.reduce((count ,entry) => {
      console.log('countcountcountcount' , count) 
      console.log('countcountcountcoun1t' , entry) 
        
          if(entry.traverltype === "CHILD"){
            count ++;
            childticketPrice = entry.ticketPrice;
        }
        
        return count;
    },0)
    console.log('Number of ADULT entries:', chilCount);
    
const checkOutbtn = () => {
  // const loginToken = localStorage.getItem('login-token');
  
  if(!LoginToken){
    setCheckout(true)
  }
  else if(LoginToken){
    const travlerPricing = data[0].travlerPricing;
    navigate("/FlightCheckoutForm" , {state :{travlerPricing}})
  }
}



    
  const deleteFormHandle = (index) => {
    const newFormHandle = [...formHandle];
    newFormHandle.splice(index, 1);
    setformHandle(newFormHandle);
  };

  // button stytle code
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, false);
    return () => {
      document.removeEventListener("click", handleClickOutside, false);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (event.target.id === "popup-container") {
      setShowPopup(false);
    }
  };




  const [isOpen, setIsOpen] = useState(false);
  const [iconClass, setIconClass] = useState('fa fa-plus');

  const handleToggle = () => {
    setIsOpen(!isOpen);
    setIconClass(isOpen ? 'fa fa-plus' : 'fa fa-minus');
  };
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
                            <button
                              className=" btn btn-cls"
                              onClick={() => setShowPopup(true)}
                            >
                              View Fare Rules
                            </button>
                            {showPopup ? (
                              <FareRules onClose={() => setShowPopup(false)} />
                            ) : null}
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
                                <span className="fontSize14">{`${hours}h ${min}m`}</span>
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
                              <div className="makeFlex perfectCenter fontSize14 boldFont">
                                <font color="#4a4a4a">
                                  0/{val.travlerPricing.length}
                                </font>
                                <font color="#9b9b9b">&nbsp;added</font>
                              </div>
                            </div>
                            <div className="appendBottom20" id="wrapper_ADULT">
                              <div className="adultDetailsHeading">
                                <div className="makeFlex perfectCenter">
                                  <div className="appendRight10">
                                    <span className="adultImg bgProperties"></span>
                                  </div>
                                  <p className="fontSize14">
                                    <font className="boldFont">
                                      ADULT (12 yrs+)
                                    </font>
                                  </p>
                                </div>
                                <div className="makeFlex perfectCenter fontSize14 boldFont">
                                  <font color="#4a4a4a">
                                    {formHandle.length}/{val.travlerPricing.length}
                                  </font>
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
                                {/*  */}
                                <div>
                                  <div className="AdultFormWrapper collapse show">
                                    <div className="alert-wrapper makeFlex appendBottom12 appendTop12 paxAlert">
                                      <div className="makeFlex flexOne column">
                                        <p className="darkText fontSize12 boldFont">
                                          <span className="alert-text">
                                            Enter name as mentioned on your
                                            passport or Government approved IDs.
                                          </span>
                                        </p>
                                      </div>
                                    </div>

                                    <div className="adultDetailsForm">
                                      <div className="adultDetailsInnner">
                                        <div
                                          className={`adultItemRow ${
                                            activeform == true
                                              ? "fromActive"
                                              : ""
                                          }`}
                                        >
                                          {formHandle?.map((val, index) => {
                                            return (
                                              <div
                                                key={index}
                                                className="formOuter"
                                              >
                                                <form>
                                                  <div
                                                    className="adultItem"
                                                    style={{ width: "30%" }}
                                                  >
                                                    <div className="relative">
                                                      <input
                                                        placeholder="First &amp; Middle Name"
                                                        className="tvlrInput"
                                                        type="text"
                                                        name="firstName"
                                                        value={val.firstName}
                                                        onChange={(e) =>
                                                          hadleChange(e, index)
                                                        }
                                                      />
                                                    </div>
                                                  </div>
                                                  <div
                                                    className="adultItem"
                                                    style={{ width: "30%" }}
                                                  >
                                                    <div className="relative">
                                                      <input
                                                        placeholder="Last Name"
                                                        className="tvlrInput"
                                                        type="text"
                                                        name="lastName"
                                                        value={val.lastName}
                                                        onChange={(e) =>
                                                          hadleChange(e, index)
                                                        }
                                                      />
                                                    </div>
                                                  </div>
                                                  <div
                                                    className="adultItem"
                                                    style={{ width: "30%" }}
                                                  >
                                                    <div className="selectTab">
                                                      <div className="next-cls-db">
                                                        <label>
                                                          <input
                                                            type="radio"
                                                            name={`gender`}
                                                            value="MALE"
                                                            checked={
                                                              val.gender ===
                                                              "MALE"
                                                            }
                                                            onChange={(e) =>
                                                              hadleChange(
                                                                e,
                                                                index
                                                              )
                                                            }
                                                          />
                                                          <span className="selectTabText">
                                                            MALE
                                                          </span>
                                                        </label>
                                                        <label>
                                                          <input
                                                            type="radio"
                                                            name={`gender`}
                                                            value="FEMALE"
                                                            checked={
                                                              val.gender ===
                                                              "FEMALE"
                                                            }
                                                            onChange={(e) =>
                                                              hadleChange(
                                                                e,
                                                                index
                                                              )
                                                            }
                                                          />
                                                          <span className="selectTabText">
                                                            FEMALE
                                                          </span>
                                                        </label>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <button
                                                    type="button"
                                                    className="close"
                                                    aria-label="Close"
                                                    onClick={() =>
                                                      deleteFormHandle(index)
                                                    }
                                                  >
                                                    <span
                                                      aria-hidden="true"
                                                      className="close-icon"
                                                    >
                                                      &times;
                                                    </span>
                                                  </button>
                                                </form>
                                              </div>
                                            );
                                          })}
                                          <button
                                            className="submit"
                                            type="submit"
                                            onClick={fromSubmit}
                                          >
                                            Submit
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  
                                </div>

                                {/*  */}
                                <div className="otherList">
                                  <button
                                    type="button"
                                    className="addTravellerBtn"
                                    onClick={(e) => addFromvalues(e, index)}
                                  >
                                    + ADD NEW ADULT
                                  </button>
                                </div>
                                {pTags}
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="padding20" id="gstDetails">
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
                      <div className="bookingDetailsForm" id="contactDetails">
          <p className="fontSize14 boldFont appendBottom15">
            Booking details will be sent to
          </p>
          <div className="adultItemRow">
            <div className="adultItem" id="Country Code">
              <label className="makeFlex hrtlCenter">Country Code</label>
              <div className="selectItem relative">
                <div className="selectList css-2b097c-container">
                  <div className="dropdown__control css-yk16xz-control">
                    <div
                      className="dropdown__value-container dropdown__value-container--has-value css-1hwfws3"
                    >
                      <div
                        className="dropdown__single-value css-1uccc91-singleValue"
                      >
                        India(91)
                      </div>
                      <div className="css-1g6gooi">
                        <div
                          className="dropdown__input"
                        
                        >
                          <input
                            autocapitalize="none"
                            autocomplete="off"
                            autocorrect="off"
                            id="react-select-5-input"
                            spellcheck="false"
                            tabindex="0"
                            type="text"
                            aria-autocomplete="list"
                            value=""
                            
                          />
                          <div
                          
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="dropdown__indicators css-1wy0on6">
                      <span
                        className="dropdown__indicator-separator css-1hyfx7x"
                      ></span>
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
                          <path
                            d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="adultItem" id="Mobile No">
              <div className="relative">
                <label for="popup">Mobile No</label
                ><input
                  autocomplete="none"
                  placeholder="Mobile No"
                  className="tvlrInput"
                  type="text"
                  value="7018184374"
                />
              </div>
            </div>
            <div className="adultItem" id="Email">
              <div className="relative">
                <label for="popup">Email</label
                ><input
                  autocomplete="none"
                  placeholder="Email"
                  className="tvlrInput"
                  type="text"
                  value="avinash@masterinfotech.com"
                />
              </div>
            </div>
          </div>
        </div>
                    </section>
                    
                  </div>
                </div>
              </div>
              <div class="pageRightContainer customScroll">
                  <div id="FARE_SUMMARY">
                    <div class="fareSummary">
                
                      <div><p class="fontSize18 blackFont">Fare Summary</p></div>
                      <div class="fareTypeWrap">
                      <i className={iconClass} aria-hidden="true" onClick={handleToggle}></i>
                      <span></span><span class="fareHeader">Base Fare</span>
                      {isOpen && (
                        // (val.travlerPricing.map((val, index) => (
                        // <div class="fareRow">
                        //   <div class="makeFlex hrtlCenter pointer flexOne">
                        //   {val.traverltype}
                        //     <span class="appendRight10 appendTop5"><span
                        //         class="iconPlusImg bgProperties"
                        //         style={{ backgroundImage: "url`(//jsak.mmtcdn.com/flights/assets/media/ic_expand.68dc8068.png`)"}}></span></span>
                        //   </div>
                        
                        //   <span class="fontSize14 darkText">   ${val.ticketPrice}</span>
                        // </div>
                        // )
                        <>
                         {
                                  filtervalue > 0  &&
                                  <div className="fareTypeWrap">
                                  {/* {val.travlerPricing.map((val, index) => ( */}
                                    <div className="fareRow">
                                      <div className="makeFlex hrtlCenter pointer flexOne">
                                        {/* <span className="appendTop5">
                                        <span className="iconPlusImg bgProperties"></span>
                                      </span> */}
                                        <span className="fareHeader">
                                          {/* {val.traverltype} */}
                                          Adult
                                        </span>
                                      </div>
                                      <span className="fontSize14 darkText">
                                        {/* ${val.ticketPrice} */}
                                        ({filtervalue} x ${AdultticketPrice}) 
                                      </span>
                                    </div>
                                  {/* ))} */}
                                </div>
                                }
                                {
                                  chilCount > 0 && 
                                  <div className="fareTypeWrap">
                                  {/* {val.travlerPricing.map((val, index) => ( */}
                                    <div className="fareRow">
                                      <div className="makeFlex hrtlCenter pointer flexOne">
                                        {/* <span className="appendTop5">
                                        <span className="iconPlusImg bgProperties"></span>
                                      </span> */}
                                        <span className="fareHeader">
                                          {/* {val.traverltype} */}
                                          Child
                                        </span>
                                      </div>
                                      <span className="fontSize14 darkText">
                                        {/* ${val.ticketPrice} */}
                                        ({chilCount} x ${childticketPrice}) 
                                      </span>
                                    </div>
                                  {/* ))} */}
                                </div>
                                } 
                        </>
                        )}
                      </div>
                      
                      
                      <div class="fareFooter">
                        <p class="fareRow">
                          <span class="fontSize16 blackFont">Total Amount</span><span class="fontSize16 blackFont">   ${val.total}</span>
                        </p>
                      </div>
                    
                    </div>
                  </div>
                 
                    <div className="checkOutBtn">
                      <button onClick={e => checkOutbtn()}>Checkout</button>
                    </div>
              </div>
              {/* <div class="promoContent pointer">
                <div class="flexOne cpn-wrapper">
                  <div class="makeFlex pointer gap-x-5">
                    <span class="radioWrap"
                      ><span class="block radio customRadioBtn"
                        ><span class="customRadioBtn sizeSm primaryRadiobox"
                          ><input type="radio" value="" /><span class="outer"
                            ><span class="inner"></span></span></span></span
                    ></span>
                    <div class="promoContentWrap flexOne">
                      <span class="couponCode">AMEXFEST</span
                      ><span class="promoCheckContent"
                        >Use this coupon and get Rs 1168 instant discount on
                        your flight booking with American Express credit
                        cards.</span
                      ><a
                        href="https://www.makemytrip.com/promos/df-amazon-1500.html"
                        class="fontSize12"
                        target="_blank"
                        rel="noreferrer"
                        >Terms &amp; Conditions</a
                      >
                    </div>
                    <span
                      class="offerIcon bgProperties"
                      style={{ backgroundImage: "url(`https://imgak.mmtcdn.com/flights/assets/media/dt/review/IC.png?v=1`)"}}
                       
                      
                    ></span>
                  </div>
                </div>
              </div>
              <div class="promoContent pointer">
                <div class="flexOne cpn-wrapper">
                  <div class="makeFlex pointer gap-x-5">
                    <span class="radioWrap"
                      ><span class="block radio customRadioBtn"
                        ><span class="customRadioBtn sizeSm primaryRadiobox"
                          ><input type="radio" value="" /><span class="outer"
                            ><span class="inner"></span></span></span></span
                    ></span>
                    <div class="promoContentWrap flexOne">
                      <span class="couponCode">HDFCEMI</span
                      ><span class="promoCheckContent"
                        >Get Rs 1000 instant discount on paying using HDFC Bank
                        EasyEMI</span
                      ><a
                        href="https://www.makemytrip.com/promos/df-amazon-1500.html"
                        class="fontSize12"
                        target="_blank"
                        rel="noreferrer"
                        >Terms &amp; Conditions</a
                      >
                    </div>
                    <span
                      class="offerIcon bgProperties"
                       style={{ backgroundImage: "url(`https://imgak.mmtcdn.com/flights/assets/media/dt/review/IC.png?v=1`)"}}
                    ></span>
                  </div>
                </div>
              </div>
              <div class="promoContent pointer">
                <div class="flexOne cpn-wrapper">
                  <div class="makeFlex pointer gap-x-5">
                    <span class="radioWrap"
                      ><span class="block radio customRadioBtn"
                        ><span class="customRadioBtn sizeSm primaryRadiobox"
                          ><input type="radio" value="" /><span class="outer"
                            ><span class="inner"></span></span></span></span
                    ></span>
                    <div class="promoContentWrap flexOne">
                      <span class="couponCode">MMTICICINB</span
                      ><span class="promoCheckContent"
                        >Get INR 934 Instant Discount on ICICI bank Netbanking
                        paymode.</span
                      ><a
                        href="https://www.makemytrip.com/promos/df-amazon-1500.html"
                        class="fontSize12"
                        target="_blank"
                        rel="noreferrer"
                        >Terms &amp; Conditions</a
                      >
                    </div>
                    <span
                      class="offerIcon bgProperties"
                     style={{ backgroundImage: "url(`https://imgak.mmtcdn.com/flights/assets/media/dt/review/IC.png?v=1`)"}}
                    ></span>
                  </div>
                </div>
              </div> */}
            </div>
        
          {/* </div> */}
          {/* </div> */}
          </>
        ))}
        {
          checkout && 
          <div className="CheckoutLoginForm">
            <div className="crossicon" onClick={e => setCheckout(false)}>x</div>
            <SignIn checkOutLogin = {checkout} setCheckout = {setCheckout}/>
          </div>
          
         }
      </div>
    
    </>
  );
};

export default FlightCheckout;
