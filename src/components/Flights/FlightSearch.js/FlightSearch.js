import React, { useState } from "react";
import DatePicker from "react-datepicker";
import axios from "axios";
import FlightSearchApi from "./Hooks/FlightSearchApi"; 
import FLightsSearching from './FLightsSearching';
const FlightSearch = () => {
 

  // const {handleClick} = FlightSearchApi()
  // const [click,SetClicks] = useState(false) 
  // const clickedHandle=()=>{
  //   console.log("clicked flight")
  //   SetClicks(true)
  // }
  return (
    <>
     <div className="tab-content bg-primary">
         
          <FLightsSearching/>
         
            
            
          </div>
        {/* Promotion banner section */}
        <section
          className="promo-ban"
          id="specialsDeals"
          style={{ display: "none" }}
        >
          <div className="container">
            <div className="row my-5 aos-init aos-animate" data-aos="fade-up">
              <div className="col-12">
                <h2 className="h3 text-center theme-text-white fw-bold mb-3">
                  Flight World Specials Deals
                </h2>
                <p className="text-center theme-text-accent-two mb-0">
                  Get the best deals on selected flights
                </p>
              </div>
            </div>
            {/* promotional Slider */}
            <div className="row">
              <div className="col-12 aos-init aos-animate" data-aos="fade-down">
                <div
                  className="owl-carousel owl-theme owl-loaded owl-drag"
                  id="carouselPromo"
                >
                  <div className="owl-stage-outer">
                    <div
                      className="owl-stage"
                      style={{
                        transform: "translate3d(0px, 0px, 0px)",
                        transition: "all 0s ease 0s",
                      }}
                    >
                      <div className="owl-item">
                        <div className="item">
                          <span className="position-absolute px-3 py-3">
                            <img
                              src="assets/images/icons/6E.jpg"
                              className="rounded-circle"
                              alt="airline-logo-6E"
                              title="airline-logo-6E"
                            />
                          </span>
                          <a href="#" className="d-block promo">
                            <img
                              src="assets/images/promotional/flihgt-offer01.png"
                              className="img-fluid"
                              alt="banner"
                            />
                            <div className="w-100">
                              <p className="font-small text-center promo-hover">
                                Flash Sale! Fares starting at $89
                              </p>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="owl-item">
                        <div className="item">
                          <span className="position-absolute px-3 py-3">
                            <img
                              src="assets/images/icons/airasia.jpg"
                              className="rounded-circle"
                              alt="airline-logo-airasia"
                              title="airline-logo-airasia"
                            />
                          </span>
                          <a href="#" className="d-block promo">
                            <img
                              src="assets/images/promotional/flihgt-offer02.png"
                              className="img-fluid"
                              alt="banner"
                            />
                            <div className="w-100">
                              <p className="font-small text-center promo-hover">
                                Pre Book Sale off 40%
                              </p>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="owl-item">
                        <div className="item">
                          <span className="position-absolute px-3 py-3">
                            <img
                              src="assets/images/icons/spicejet.jpg"
                              className="rounded-circle"
                              alt="airline-logo-spicejet"
                              title="airline-logo-spicejet"
                            />
                          </span>
                          <a href="#" className="d-block promo">
                            <img
                              src="assets/images/promotional/flihgt-offer03.png"
                              className="img-fluid"
                              alt="banner"
                            />
                            <div className="w-100">
                              <p className="font-small text-center promo-hover">
                                Book a deal in selected flight
                              </p>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="owl-item">
                        <div className="item">
                          <span className="position-absolute px-3 py-3">
                            <img
                              src="assets/images/icons/vistara.jpg"
                              className="rounded-circle"
                              alt="airline-logo-vistara"
                              title="airline-logo-vistara"
                            />
                          </span>
                          <a href="#" className="d-block promo">
                            <img
                              src="assets/images/promotional/flihgt-offer04.png"
                              className="img-fluid"
                              alt="banner"
                            />
                            <div className="w-100">
                              <p className="font-small text-center promo-hover">
                                Fresh Sale! Fares starting at $30
                              </p>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="owl-item">
                        <div className="item">
                          <span className="position-absolute px-3 py-3">
                            <img
                              src="assets/images/icons/thaiAir.jpg"
                              className="rounded-circle"
                              alt="airline-logo"
                              title="airline-logo"
                            />
                          </span>
                          <a href="#" className="d-block promo">
                            <img
                              src="assets/images/promotional/flihgt-offer05.png"
                              className="img-fluid"
                              alt="banner"
                            />
                            <div className="w-100">
                              <p className="font-small text-center promo-hover">
                                Flash Sale! upto 25% off
                              </p>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="owl-nav">
                    <button
                      type="button"
                      role="presentation"
                      className="owl-prev"
                    >
                      <i className="bi bi-arrow-left-short" />
                    </button>
                    <button
                      type="button"
                      role="presentation"
                      className="owl-next"
                    >
                      <i className="bi bi-arrow-right-short" />
                    </button>
                  </div>
                  <div className="owl-dots">
                    <button role="button" className="owl-dot active">
                      <span />
                    </button>
                    <button role="button" className="owl-dot">
                      <span />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
   
    </>
  );
};

export default FlightSearch;
