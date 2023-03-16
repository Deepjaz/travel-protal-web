import React from 'react'
import { Link } from 'react-router-dom'
import HotelSearch from '../../HotelSearch/HotelSearch'

const FilterDiscription = () => {
  return (
    <>
        <HotelSearch/>
        <section className="hotel_list_desc">
               <div className="container">
                  <div> 
                     <h2>Riva Beach Resort</h2>
                     <div className="d-flex justify-content-between">
                          <div className="col-lg-9 ">
                           <Link to="">2 reviews</Link>
                           <Link to=""><i className="fa fa-circle"></i></Link>
                           <Link to="">Superhost</Link>
                           <Link to=""><i className="fa fa-circle"></i></Link>
                           <Link to="">Location</Link>
                          </div>
                          <div className="col-lg-3 last-col ">
                           <Link to=""><i className="fa fa-send"></i>Share</Link>
                           <Link to=""><i className="fa fa-heart"></i>Save</Link>
                           
                          </div>
                     </div>

                  </div>

                  <div className="hotel-pic-grid">
                     <div className="row d-flex">
                     <div className="col-lg-6">
                        <img src="assets/images/hotel list/Screenshot.png" />

                     </div>
                     <div className="col-lg-6">
                        <div className="row">
                           <div className="col-lg-6">
                              <img src="assets/images/hotel list/Screenshot.png" />
                           </div>
                           <div className="col-lg-6">
                              <img src="assets/images/hotel list/Screenshot.png" />
                           </div>

                        </div>
                        <div className="row">
                           <div className="col-lg-6">
                              <img src="assets/images/hotel list/Screenshot.png" />
                           </div>
                           <div className="col-lg-6">
                              <img src="assets/images/hotel list/Screenshot.png" />
                              
                           </div>

                        </div>

                     </div>
                     </div>
                     <Link to="">View all photos</Link>

                  </div>
                  <div className="hotel-desc-content d-flex justify-content-between">
                     <div className="col-lg-8">
                        <div>
                           <h2>Entire villa </h2>
                           <div className="col-lg-9">
                              <Link to="">2 bedrooms</Link>
                              <Link to=""><i className="fa fa-circle"></i></Link>
                              <Link to="">2 bathrooms</Link>
                              <Link to=""><i className="fa fa-circle"></i></Link>
                              <Link to="">12 guests</Link>
                           </div>
                        </div>
                        <div>
                           <div className="d-flex hotel-host">
                              <div >
                                 <img src="assets/images/description/owners.png" />
                              </div>
                              <div>
                                 <h3>Owner is a Superhost</h3>
                                 <p> Superhosts are experienced, highly rated hosts who are committed to providing great stays for their guests.</p>

                              </div>
                   
                           </div>
                           <div className="d-flex hotel-host">
                              <div>
                                 <img src="assets/images/description/diving.png" />
                              </div>
                              <div>
                                 <h3>Dive right in</h3>
                                 <p> This is one of the few places in the area with a pool.</p>

                              </div>
                   
                           </div>      
                           <div className="d-flex hotel-host">
                              <div>
                                 <img src="assets/images/description/calendar.png" />
                              </div>
                              <div>
                                 <h3>Free cancellation before 24 Feb.</h3>
                              </div>
                   
                           </div>                       
                          
                          
                        </div>
                        <div>
                           <p>Every booking includes free protection from Host cancellations, listing inaccuracies, and other issues like trouble checking in.
                              With the glimpse of Greece right in the foothills of Lonavala experience a luxurious stay in the Ekostay Santorini Villa in Lonavala. 
                              This aesthetically pleasing and spacious villa has its very own pool for you to take a dip and feel all the stress float away. 
                              Enjoy your staycation with your loved ones in the midst of  the evergreen and cozy atmosphere in Khandala.
                           </p>
                        </div>
                        

                     </div>
                     <div className="col-lg-3">
                        <div className="desc-card">
                           <div className="d-flex justify-content-between">
                              <p><span>₹11,800 </span>night</p>
                              <Link to="">2 reviews</Link>

                           </div>
                           <div className="desc-card-detail">
                              <div className="d-flex">                               
                                 <div >                                   
                                    <input type="text" className="cal-input" placeholder="check-in" />                                   
                                 </div>
                                 <div >                                    
                                    <input type="text" className="cal-input" placeholder="Check-out" />                                  
                                 </div>
                              </div>
                            
                              <div className="wrapper-dropdown" id="myDropdown">
                                 <span>Guests</span>
                                 <ul className="dropdown">
                                   <li>
                                    <div><span>Adults</span><p>Age 13+</p></div>
                                    <div><span className="input-number-decrement">–</span><input className="input-number" type="text" value="1" min="0" max="10" /><span className="input-number-increment">+</span></div>
                                   </li>
                                   <li>
                                    <div><span>Children</span><p>Age 2-12</p></div>
                                    <div><span className="input-number-decrement">–</span><input className="input-number" type="text" value="1" min="0" max="10" /><span className="input-number-increment">+</span></div>
                                   </li>
                                   <li>
                                    <div><span>Infants</span><p>Under 2</p></div>
                                    <div><span className="input-number-decrement">–</span><input className="input-number" type="text" value="1" min="0" max="10" /><span className="input-number-increment" > +</span></div>
                                   </li>
                                   <li>
                                    <div><span>Pets</span><p>Bringing a service animal?</p></div>
                                    <div><span className="input-number-decrement">–</span><input className="input-number" type="text" value="1" min="0" max="10" /><span className="input-number-increment">+</span></div>
                                   </li>
                                   <p>This place has a maximum of 12 guests, not including infants. Pets aren't allowed.</p>
                                   
                                 </ul>
                              </div>
                             
                           </div>
                           <div className="d-flex justify-content-center"><button className="btn">Check availability</button>    </div>
                           
                       </div>
                     </div>

                  </div>

               </div>

            </section>
    </>
  )
}

export default FilterDiscription