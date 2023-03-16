import React from 'react'
import HotelSearch from '../../HotelSearch/HotelSearch'

const TravelFiter = () => {
  return (
    <>
          <HotelSearch />
          <section className="filter_hotel_list_main">
               <div className="container">
                  <div className="row">
                     <div className="col-lg-3">
                        <div className="filter_hotel_wrap">
                           <div className="htl-dscrpn">
                              <h3>Hotel Name</h3>
                              <form className="hotel_search" action="">
                                 <input type="text" placeholder="" name="search2" />
                                 <button type="submit"><i className="fa-light fa-magnifying-glass"></i></button>
                              </form>
                           </div>
                           <div className="htl-dscrpn htl-rating p-top">
                              <h3>USER RATING</h3>
                              <table>
                                 <tr>
                                    <td>
                                       <p className="rate-no">1 +</p>
                                       <p className="rate-count">3</p>
                                    </td>
                                    <td>
                                       <p className="rate-no">2 +</p>
                                       <p className="rate-count">13</p>
                                    </td>
                                    <td>
                                       <p className="rate-no">3 +</p>
                                       <p className="rate-count">5</p>
                                    </td>
                                    <td>
                                       <p className="rate-no">4 +</p>
                                       <p className="rate-count">123</p>
                                    </td>
                                    <td>
                                       <p className="rate-no">5 +</p>
                                       <p className="rate-count">34</p>
                                    </td>
                                 </tr>
                              </table>
                           </div>
                           <div className="htl-dscrpn p-top">
                              <h3>SHOW HOTELS WITH</h3>
                              <form className="hotel_search form-check" >
                                 <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                                 <label htmlFor="vehicle1"> Free Cancellation <span>112</span></label>
                                 <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
                                 <label htmlFor="vehicle2"> Women Friendly &nbsp &nbsp<span>232</span></label>
                                 <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
                                 <label htmlFor="vehicle3"> Free Breakfast &nbsp &nbsp <span>142</span></label>
                                 <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
                                 <label htmlFor="vehicle3"> Free WiFi &nbsp &nbsp<span>111</span></label>
                                 <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
                                 <label htmlFor="vehicle3"> Couple Friendly &nbsp &nbsp<span>211</span></label>
                                 <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
                                 <label htmlFor="vehicle3"> Longstay Hotels &nbsp &nbsp<span>162</span></label>
                              </form>
                           </div>
                           <div className="htl-dscrpn p-top">
                            <h3>PAYMENT MODE</h3>
                            <form className="hotel_search form-check" action="">
                               <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                               <label htmlFor="vehicle1" className="content_fade"> Pay at Hotel &nbsp &nbsp<span>0</span></label>
                               <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
                               <label htmlFor="vehicle2"> PrePay &nbsp &nbsp<span>232</span></label>
                               <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
                               <label htmlFor="vehicle3" className="content_fade"> BookNow PayLater &nbsp &nbsp <span>0</span></label>
                            </form>
                         </div>
                         <div className="htl-dscrpn p-top">
                            <h3>AMENITIES</h3>
                            <form className="hotel_search form-check" action="">
                               <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                               <label htmlFor="vehicle1"> Central Air Conditioning &nbsp &nbsp<span>145</span></label>
                               <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
                               
                               <label htmlFor="vehicle2"> Airport transportation &nbsp &nbsp<span>28</span></label>
                               <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
                               <label htmlFor="vehicle3"> Laundry facilities &nbsp &nbsp <span>208</span></label>
                               <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
                               <label htmlFor="vehicle3"> Airport transportation free &nbsp &nbsp<span>2</span></label>
                               <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" /> 
                               <label htmlFor="vehicle3"> ATM/banking &nbsp &nbsp<span>3</span></label>
                               <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
                               <label htmlFor="vehicle3"> Bar &nbsp &nbsp<span>87</span></label>
                               <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
                               <label htmlFor="vehicle3"> Suitable for children &nbsp &nbsp<span>57</span></label>
                               <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
                               <label htmlFor="vehicle3"> Fitness Centre &nbsp &nbsp<span>27</span></label>
                               <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
                               <label htmlFor="vehicle3"> Jacuzzi &nbsp &nbsp<span>18</span></label>
                            </form>
                         </div>
                        </div>
                     </div>
                     <div className="col-lg-9 ">
                        <div className="listing_hotel_wrap">
                            <div className="col-lg-3">
                               <div className="hotel-list-ig">
                                <img src="assets/images/hotel list/Screenshot.png" alt="" />
                               </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="htlplst-content-wrap d-flex">
                                    <div className="htl-listcontent">
                                        <h4><a href="#">Riva Beach Resort</a></h4>
                                        <div className="star-place">
                                            <div className="star">
                                                <i className="fa-sharp fa-solid fa-star"></i>
                                                <i className="fa-sharp fa-solid fa-star"></i>
                                                <i className="fa-sharp fa-solid fa-star"></i>
                                            </div>
                                            <div className="htl-location">
                                                <i className="fa-sharp fa-solid fa-location-dot"></i>
                                            </div>
                                            <div className="plc-name">
                                                <p>Connaught Place, New Delhi</p>
                                            </div>
                                        </div>
                                        <div className="star-place free-consultation">
                                            <div className="star">
                                                <i className="fa fa-check-circle-o" aria-hidden="true"></i><span> Free Consultation</span>
                                            </div>
                                            <div className="htl-location">
                                                <i className="fa fa-check-circle-o" aria-hidden="true"></i><span> Free Wifi</span>
                                            </div>
                                        </div>
                                        <div>
                                            <img src="" />
                                        </div>
                                    </div>
                                    <div className="htl-price">
                                        <p> ₹9,800  <span >₹14,800 </span></p>
                                        <p>For 2 nights</p>
                                        <button className="btn"><a href="filter-description.html" className="fw-bold">Choose room</a></button>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="listing_hotel_wrap">
                           <div className="col-lg-3">
                              <div className="hotel-list-ig">
                               <img src="assets/images/hotel list/Screenshot.png" alt="" />
                              </div>
                           </div>
                           <div className="col-lg-9">
                               <div className="htlplst-content-wrap d-flex">
                                   <div className="htl-listcontent">
                                       <h4><a href="#">Riva Beach Resort</a></h4>
                                       <div className="star-place">
                                           <div className="star">
                                               <i className="fa-sharp fa-solid fa-star"></i>
                                               <i className="fa-sharp fa-solid fa-star"></i>
                                               <i className="fa-sharp fa-solid fa-star"></i>
                                           </div>
                                           <div className="htl-location">
                                               <i className="fa-sharp fa-solid fa-location-dot"></i>
                                           </div>
                                           <div className="plc-name">
                                               <p>Connaught Place, New Delhi</p>
                                           </div>
                                       </div>
                                       <div className="star-place free-consultation">
                                           <div className="star">
                                               <i className="fa fa-check-circle-o" aria-hidden="true"></i><span> Free Consultation</span>
                                           </div>
                                           <div className="htl-location">
                                               <i className="fa fa-check-circle-o" aria-hidden="true"></i><span> Free Wifi</span>
                                           </div>
                                       </div>
                                       <div>
                                           <img src="" />
                                       </div>
                                   </div>
                                   <div className="htl-price">
                                       <p> ₹9,800  <span >₹14,800 </span></p>
                                       <p>For 2 nights</p>
                                       <button className="btn "><a href="filter-description.html" className="fw-bold">Choose room</a></button>

                                   </div>
                               </div>
                           </div>
                        </div>
                        <div className="listing_hotel_wrap">
                           <div className="col-lg-3">
                              <div className="hotel-list-ig">
                               <img src="assets/images/hotel list/Screenshot.png" alt="" />
                              </div>
                           </div>
                           <div className="col-lg-9">
                               <div className="htlplst-content-wrap d-flex">
                                   <div className="htl-listcontent">
                                       <h4><a href="#">Riva Beach Resort</a></h4>
                                       <div className="star-place">
                                           <div className="star">
                                               <i className="fa-sharp fa-solid fa-star"></i>
                                               <i className="fa-sharp fa-solid fa-star"></i>
                                               <i className="fa-sharp fa-solid fa-star"></i>
                                           </div>
                                           <div className="htl-location">
                                               <i className="fa-sharp fa-solid fa-location-dot"></i>
                                           </div>
                                           <div className="plc-name">
                                               <p>Connaught Place, New Delhi</p>
                                           </div>
                                       </div>
                                       <div className="star-place free-consultation">
                                           <div className="star">
                                               <i className="fa fa-check-circle-o" aria-hidden="true"></i><span> Free Consultation</span>
                                           </div>
                                           <div className="htl-location">
                                               <i className="fa fa-check-circle-o" aria-hidden="true"></i><span> Free Wifi</span>
                                           </div>
                                       </div>
                                       <div>
                                           <img src="" />
                                       </div>
                                   </div>
                                   <div className="htl-price">
                                       <p> ₹9,800  <span >₹14,800 </span></p>
                                       <p>For 2 nights</p>
                                       <button className="btn "><a href="filter-description.html" className="fw-bold">Choose room</a></button>

                                   </div>
                               </div>
                           </div>
                       </div>
                       <div className="listing_hotel_wrap">
                           <div className="col-lg-3">
                              <div className="hotel-list-ig">
                               <img src="assets/images/hotel list/Screenshot.png" alt="" />
                              </div>
                           </div>
                           <div className="col-lg-9">
                               <div className="htlplst-content-wrap d-flex">
                                   <div className="htl-listcontent">
                                       <h4><a href="#">Riva Beach Resort</a></h4>
                                       <div className="star-place">
                                           <div className="star">
                                               <i className="fa-sharp fa-solid fa-star"></i>
                                               <i className="fa-sharp fa-solid fa-star"></i>
                                               <i className="fa-sharp fa-solid fa-star"></i>
                                           </div>
                                           <div className="htl-location">
                                               <i className="fa-sharp fa-solid fa-location-dot"></i>
                                           </div>
                                           <div className="plc-name">
                                               <p>Connaught Place, New Delhi</p>
                                           </div>
                                       </div>
                                       <div className="star-place free-consultation">
                                           <div className="star">
                                               <i className="fa fa-check-circle-o" aria-hidden="true"></i><span> Free Consultation</span>
                                           </div>
                                           <div className="htl-location">
                                               <i className="fa fa-check-circle-o" aria-hidden="true"></i><span> Free Wifi</span>
                                           </div>
                                       </div>
                                       <div>
                                           <img src="" />
                                       </div>
                                   </div>
                                   <div className="htl-price">
                                       <p> ₹9,800  <span >₹14,800 </span></p>
                                       <p>For 2 nights</p>
                                       <button className="btn "><a href="filter-description.html" className="fw-bold">Choose room</a></button>
   
                                   </div>
                               </div>
                           </div>
                        </div>
                        <div className="listing_hotel_wrap">
                           <div className="col-lg-3">
                              <div className="hotel-list-ig">
                               <img src="assets/images/hotel list/Screenshot.png" alt="" />
                              </div>
                           </div>
                           <div className="col-lg-9">
                               <div className="htlplst-content-wrap d-flex">
                                   <div className="htl-listcontent">
                                       <h4><a href="#">Riva Beach Resort</a></h4>
                                       <div className="star-place">
                                           <div className="star">
                                               <i className="fa-sharp fa-solid fa-star"></i>
                                               <i className="fa-sharp fa-solid fa-star"></i>
                                               <i className="fa-sharp fa-solid fa-star"></i>
                                           </div>
                                           <div className="htl-location">
                                               <i className="fa-sharp fa-solid fa-location-dot"></i>
                                           </div>
                                           <div className="plc-name">
                                               <p>Connaught Place, New Delhi</p>
                                           </div>
                                       </div>
                                       <div className="star-place free-consultation">
                                           <div className="star">
                                               <i className="fa fa-check-circle-o" aria-hidden="true"></i><span> Free Consultation</span>
                                           </div>
                                           <div className="htl-location">
                                               <i className="fa fa-check-circle-o" aria-hidden="true"></i><span> Free Wifi</span>
                                           </div>
                                       </div>
                                       <div>
                                           <img src="" />
                                       </div>
                                   </div>
                                   <div className="htl-price">
                                       <p> ₹9,800  <span >₹14,800 </span></p>
                                       <p>For 2 nights</p>
                                       <button className="btn "><a href="filter-description.html" className="fw-bold">Choose room</a></button>
   
                                   </div>
                               </div>
                           </div>
                        </div>
                        <div className="listing_hotel_wrap">
                           <div className="col-lg-3">
                              <div className="hotel-list-ig">
                               <img src="assets/images/hotel list/Screenshot.png" alt="" />
                              </div>
                           </div>
                           <div className="col-lg-9">
                               <div className="htlplst-content-wrap d-flex">
                                   <div className="htl-listcontent">
                                       <h4><a href="#">Riva Beach Resort</a></h4>
                                       <div className="star-place">
                                           <div className="star">
                                               <i className="fa-sharp fa-solid fa-star"></i>
                                               <i className="fa-sharp fa-solid fa-star"></i>
                                               <i className="fa-sharp fa-solid fa-star"></i>
                                           </div>
                                           <div className="htl-location">
                                               <i className="fa-sharp fa-solid fa-location-dot"></i>
                                           </div>
                                           <div className="plc-name">
                                               <p>Connaught Place, New Delhi</p>
                                           </div>
                                       </div>
                                       <div className="star-place free-consultation">
                                           <div className="star">
                                               <i className="fa fa-check-circle-o" aria-hidden="true"></i><span> Free Consultation</span>
                                           </div>
                                           <div className="htl-location">
                                               <i className="fa fa-check-circle-o" aria-hidden="true"></i><span> Free Wifi</span>
                                           </div>
                                       </div>
                                       <div>
                                           <img src="" />
                                       </div>
                                   </div>
                                   <div className="htl-price">
                                       <p> ₹9,800  <span >₹14,800 </span></p>
                                       <p>For 2 nights</p>
                                       <button className="btn "><a href="filter-description.html" className="fw-bold">Choose room</a></button>
   
                                   </div>
                               </div>
                           </div>
                        </div>
                       
                     </div>
                  </div>
               </div>
               
            </section>

    </>
  )
}

export default TravelFiter