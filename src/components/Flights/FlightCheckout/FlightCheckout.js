import React from "react";
import { useLocation } from "react-router-dom";

const FlightCheckout = () => {
  const { state } = useLocation();

  const data = [];
  // const {flightOffers} = state;
  data.push(JSON.parse(state));
  console.log("statestatestatestatestatestate1", data);
  
  const dateString =  data[0].ArivalData[0].arrival
  const departureDateVal = data[0].ArivalData[0].departure
  const date =  new Date(dateString)
  const departureDate = new Date(departureDateVal)
  // const day 
  const day = date.toLocaleDateString('en-us' , {weekday : 'short'})
  const month = date.toLocaleDateString('en-us' , {month : 'long'})
  const time = date.toLocaleTimeString('en-us' , {timeStyle : "short"})
  const depTime = departureDate.toLocaleTimeString('en-us' , {timeStyle : "short"})

  // const timebetweenFlight = time  - depTime
  const getDate = date.getDate();
  console.log('dateStringdateStringdateString' ,day , month , getDate ,time ,depTime )



  return (
    <>
      {" "}
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
                            <b>{val.ArivalData[0].arrivaliataCode} →  {val.ArivalData[0].departureiataCode}</b>
                          </h2>
                          <p className="appendTop10 makeFlex gap-x-10">
                            <span className="scheduleDay">
                              {month}/{day}/{getDate}   {time}    

                            </span>
                            <span className="fontSize14">{val.ArivalData[0].numOfStops} Stop · 8h 0m</span>
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
                                    {time}
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
                                    {depTime}
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
                                  {val.co2Emissions[0].carryWeight} {val.co2Emissions[0].weightUnit} (1 piece only)
                                </span>
                                <span className="fontSize12 blackFont">
                                {val.co2Emissions[0].cabin}
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/* <div className="mmtConnectReviewInfo">
                        <ul>
                          <li>
                            <p>
                              <b>
                                <font color="#cf8100">Change of planes</font>
                              </b>
                              <br />
                              <b>5h 15m</b> Layover in Jaipur
                            </p>
                          </li>
                        </ul>
                      </div> */}
                      {/* <div className="flightItenaryWrap">
                        <div className="flightItenaryHdr">
                          <div className="makeFlex gap-x-10">
                            <span className="bgProperties icon24"></span>
                            <p className="makeFlex gap-x-10">
                              <span className="fontSize14 boldFont">
                                AirAsia
                              </span>
                              <span className="fontSize14">I5 830</span>
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
                                    21:45
                                  </span>
                                  <span className="layoverCircle"></span>
                                </div>
                                <div>
                                  <span className="fontSize14 blackFont">
                                    Jaipur{" "}
                                  </span>
                                  <span className="fontSize14">
                                    . Jaipur Airport
                                  </span>
                                </div>
                              </div>
                              <div className="layover">
                                <span className="fontSize14">1h 0m</span>
                              </div>
                              <div className="makeFlex gap-x-10 overideBg">
                                <div className="makeFlex time-info-ui">
                                  <span className="fontSize14 blackFont">
                                    22:45
                                  </span>
                                  <span className="layoverCircle"></span>
                                </div>
                                <div>
                                  <span className="fontSize14 blackFont">
                                    New Delhi{" "}
                                  </span>
                                  <span className="fontSize14">
                                    . Indira Gandhi International Airport,
                                    Terminal 3
                                  </span>
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
                                  15 Kgs (1 piece only)
                                </span>
                                <span className="fontSize12 blackFont">
                                  7 Kgs (1 piece only)
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div> */}
                    </section>
                    {/* <div className="baggageTag">
                      <div className="baggageContent">
                        <span className="addBaggageImg bgProperties appendRight10"></span>
                        <p className="fontSize12 boldFont">
                          Got excess luggage? Don't stress, buy extra check-in
                          baggage allowance at fab rates!
                        </p>
                      </div>
                      <div>
                        <button type="button" className="addBtn">
                          +ADD
                        </button>
                      </div>
                    </div> */}
                  </div>
                  {/* <div className="reviewUpgradeFare appendTop20">
                    <p className="blackText fontSize18 blackFont appendBottom5"></p>
                    <p className="appendBottom15"></p>
                    <div className="make_flex"></div>
                  </div> */}
                  {/* <div className="appendTop20">
                    <section className="refundSection">
                      <div>
                        <div className="refundHdr">
                          <div className="makeFlex hrtlCenter">
                            <h3 className="fontSize16 blackFont">
                              <font color="#000000">
                                Cancellation Refund Policy
                              </font>
                            </h3>
                          </div>
                          <div>
                            <p className="fontSize14 darkText textRight">
                              <span className="linkText appendLeft3">
                                View Policy
                              </span>
                            </p>
                          </div>
                        </div>
                        <div className="flightDetails reviewCanPolicyWrapper">
                          <div className="cancSecWrap">
                            <p className="flightDetailsInfo makeFlex hrtlCenter">
                              <span className="bgProperties icon24"></span>
                              <span className="blackFont darkText appendLeft10">
                                BOM-DEL
                              </span>
                            </p>
                            <div className="timeLineDetailsInfo makeFlex">
                              <div className="cancInfoLeft">
                                <p className="appendBottom20">
                                  Cancellation Penalty :
                                </p>
                                <p>Cancel Between (IST) :</p>
                              </div>
                              <div className="flexOne">
                                <div className="makeFlex">
                                  <span className="cancPriceInfo fontSize16">
                                    ₹ 3,300
                                  </span>
                                  <span className="cancPriceInfo fontSize16">
                                    ₹ 3,800
                                  </span>
                                  <span className="cancPriceInfo fontSize16">
                                    ₹ 4,567
                                  </span>
                                </div>
                                <p className="cancGradline"></p>
                                <div className="cancTimeline">
                                  <div className="cancTimeNode">
                                    <p className="blackFont">Now</p>
                                  </div>
                                  <div className="cancTimeNode">
                                    <p className="blackFont">7 May</p>
                                    <p className="fontSize12 boldFont">14:45</p>
                                  </div>
                                  <div className="cancTimeNode">
                                    <p className="blackFont">10 May</p>
                                    <p className="fontSize12 boldFont">12:45</p>
                                  </div>
                                  <div className="cancTimeNode">
                                    <p className="blackFont">10 May</p>
                                    <p className="fontSize12 boldFont">14:45</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="refundUpgradeCard appendBottom10">
                          <div className="makeFlex hrtlCenter">
                            <span className="appendRight10">
                              <span className="icon24 bgProperties"></span>
                            </span>
                            <span className="boldFont fontSize12">
                              More fares with flexible refund &amp; date change
                              policy available!
                            </span>
                          </div>
                          <div>
                            <span className="linkText boldFont fontSize12 padding5">
                              UPGRADE
                            </span>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div> */}
                  {/* <div className="appendTop20">
                    <div className="appendTop20">
                      <section className="refundSection">
                        <h3 className="fontSize16 blackFont appendBottom20">
                          Unsure of your travel plans?
                        </h3>
                        <div id="0">
                          <div
                            className="unsureBanner makeFlex appendBottom10"
                            id="0"
                          >
                            <span className="customCheckbox appendTop2">
                              <input
                                className="pointer"
                                type="checkbox"
                                id="zc-fdc-checkbox"
                                name="<font color='#3023AE'><b>Add Zero Cancellation</b></font>"
                                readonly=""
                              />
                              <span className="box">
                                <span className="check"></span>
                              </span>
                            </span>
                            <div className="makeFlex flexOne column">
                              <div className="makeFlex spaceBetween flexOne appendLeft10">
                                <div className="flexOne">
                                  <div className="makeFlex appendBottom5 hrtlCenter">
                                    <span className="boldFont appendRight10 inlineB">
                                      <font color="#FFFFFF">
                                        <b>Add Zero Cancellation</b>
                                      </font>
                                    </span>
                                  </div>
                                  <div className="fontSize12 makeFlex">
                                    <p className="darkText">
                                      <b>Get refund of up to ₹ 4,567</b> in case
                                      of a cancellation up to 24hrs before
                                      departure
                                    </p>
                                    <span className="tncText">
                                      <font color="#0091FF">View T&amp;C</font>
                                    </span>
                                  </div>
                                </div>
                                <div className="unsureBannerRight">
                                  <span className="bgProperties icon20"></span>
                                  <p className="blackFont blackText">₹ 1,549</p>
                                </div>
                              </div>
                              <p className="unsurePersuasion fontSize11">
                                <span>
                                  <font color="#FFFFFF">
                                    6,480 customers purchased this on your route
                                    <font></font>
                                  </font>
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div> */}
                </div>
              </div>
              <div class="pageRightContainer customScroll">
                <div id="FARE_SUMMARY">
                  <section class="fareSummary">
                    <div>
                      <p class="fontSize18 blackFont">Fare Summary</p>
                    </div>
                    
                    <div class="fareTypeWrap">
                      {
                        val.travlerPricing.map((val , index) => (
                        <div class="fareRow">
                        <div class="makeFlex hrtlCenter pointer flexOne">
                          {/* <span class="appendTop5">
                            <span class="iconPlusImg bgProperties"></span>
                          </span> */}
                          <span class="fareHeader">{val.traverltype}</span>
                        </div>
                        <span class="fontSize14 darkText">${val.ticketPrice}</span>
                      </div>
                        ))
                      }
                      
                    </div>
                    {/* <div class="fareTypeWrap">
                      <div class="fareRow">
                        <div class="makeFlex hrtlCenter pointer flexOne">
                          <span class="appendRight10 appendTop5">
                            <span class="iconPlusImg bgProperties"></span>
                          </span>
                          <span class="fareHeader">Taxes and Surcharges</span>
                        </div>
                        <span class="fontSize14 darkText">₹ 653</span>
                      </div>
                    </div> */}
                    {/* <div class="fareTypeWrap">
                      <div class="fareRow">
                        <div class="makeFlex hrtlCenter pointer flexOne">
                          <span class="appendRight10 appendTop5">
                            <span class="iconMinusImg bgProperties"></span>
                          </span>
                          <span class="fareHeader">Other Services</span>
                        </div>
                      </div>
                      <div class="fareContentWrap">
                        <div class="fareSubList">
                          <p class="fareRow appendTop5">
                            <span class="makeFlex bottom">
                              <span class="fontSize14 darkText">Charity</span>
                              <span class="charityAddTxt">REMOVE</span>
                            </span>
                            <span class="fontSize14 darkText">
                              <span>₹ 10</span>
                            </span>
                          </p>
                        </div>
                      </div>
                    </div> */}
                    <div class="fareFooter">
                      <p class="fareRow">
                        <span class="fontSize16 blackFont">Total Amount</span>
                        <span class="fontSize16 blackFont">${val.total}</span>
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
