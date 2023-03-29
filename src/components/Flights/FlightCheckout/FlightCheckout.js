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
                                  {val.co2Emissions[0].carryWeight[0]} {val.co2Emissions[0].weightUnit} (1 piece only)
                                </span>
                                <span className="fontSize12 blackFont">
                                {val.co2Emissions[0].cabin}
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      
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
