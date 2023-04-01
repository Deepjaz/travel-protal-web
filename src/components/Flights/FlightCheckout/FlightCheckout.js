import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import UserDetail from "./UserDetail";
import FareRules from "./FareRules";

const FlightCheckout = () => {
  const { state } = useLocation();
  const [activeform, setactiveform] = useState(false);
  const [selectGender, setSelectGender] = useState();
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
  const fromSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("personData", JSON.stringify(formHandle));
  };
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
                                <Link className="loginBtn" to={"/sign-up"}>
                                  LOGIN NOW
                                </Link>
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
                                    0/{val.travlerPricing.length}
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
            (val.travlerPricing.map((val, index) => (
            <div class="fareRow">
              <div class="makeFlex hrtlCenter pointer flexOne">
              {val.traverltype}
                <span class="appendRight10 appendTop5"><span
                    class="iconPlusImg bgProperties"
                    style={{ backgroundImage: "url`(//jsak.mmtcdn.com/flights/assets/media/ic_expand.68dc8068.png`)"}}></span></span>
              </div>
            
              <span class="fontSize14 darkText">   ${val.ticketPrice}</span>
            </div>
            )))
            )}
          </div>
          <div class="fareTypeWrap">
            <div class="fareRow">
              <div class="makeFlex hrtlCenter pointer flexOne">
                <span class="appendRight10 appendTop5" >
                  <span
                    class="iconPlusImg bgProperties"
                    style={{ backgroundImage: "url(`//jsak.mmtcdn.com/flights/assets/media/ic_expand.68dc8068.png`)"}}
                     
                    
                  ></span></span><span class="fareHeader">Taxes and Surcharges</span>
              </div>
              <span class="fontSize14 darkText">0</span>
            </div>
          </div>
          <div class="fareTypeWrap">
            <div class="fareRow">
              <div class="makeFlex hrtlCenter pointer flexOne">
                <span class="appendRight10 appendTop5"
                  ><span
                    class="iconMinusImg bgProperties"
                    style={{backgroundImage:" url(`//jsak.mmtcdn.com/flights/assets/media/ic_collapse.83c3e92a.png`)"}}
                      
                    
                  ></span></span
                ><span class="fareHeader">Other Services</span>
              </div>
            </div>
            <div class="fareContentWrap">
              <div class="fareSubList">
                <p class="fareRow appendTop5">
                  <span class="makeFlex bottom"
                    ><span class="fontSize14 darkText">Charity</span
                    ><span class="charityAddTxt">REMOVE</span></span
                  ><span class="fontSize14 darkText"><span>₹ 10</span></span>
                </p>
              </div>
            </div>
          </div>
          <div class="fareFooter">
            <p class="fareRow">
              <span class="fontSize16 blackFont">Total Amount</span
              ><span class="fontSize16 blackFont">   ${val.total}</span>
            </p>
          </div>
        
        </div>
      </div>
      <div class="appendTop10">
        <section class="promocodeWrap">
          <div>
            <div
              class="promoHeader"
             
                
              
            >
              <span class="fontSize18"><b>PROMO</b> CODES</span
              ><span class="promoIconWrapper appendLeft10"
                ><span
                  class="bgProperties iconPromoImg iconPromocode"
                  style={{ backgroundImage: "url(`https://imgak.mmtcdn.com/flights/assets/media/dt/rta_assets/promo-code.png`)"}}
                   
                  
                ></span
              ></span>
            </div>
            <div class="appendBottom15">
              <p class="relative">
                <input
                  type="text"
                  class="promoInput"
                  placeholder="Enter promo code here"
                  value=""
                />
              </p>
            </div>
            <div class="appendBottom20">
              <p class="promoTitle"></p>
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
                      <span class="couponCode">MMTSUPER</span
                      ><span class="promoCheckContent"
                        >Use this coupon and get Rs 300 instant discount on your
                        flight booking.</span
                      ><a
                        href="https://www.makemytrip.com/promos/df-amazon-2000-20012023.html"
                        class="fontSize12"
                        target="_blank"
                        rel="noreferrer"
                        >Terms &amp; Conditions</a
                      >
                    </div>
                    <span
                      class="offerIcon bgProperties"
                      style={{backgroundImage:" url(`https://imgak.mmtcdn.com/flights/assets/media/dt/review/INSTANT.png?v=1`)"}}
                        
                      
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
              </div>
            </div>
          </div>
        </section>
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
