import React from 'react'

const UserDetail = () => {
  return (
    <>
      <div className="componentContainer appendTop15 appendBottom20">
      <div className="travellerWrapper">
        <div className="travellerHeading paddingTop20 appendBottom20">
          <h2 className="fontSize18 blackFont">Traveller Details</h2>
        </div>
        <div className="travellerLoginSection appendBottom20">
          <div className="makeFlex perfectCenter">
            <div className="appendRight10">
              <span
                className="loginUserImg bgProperties"
                
              ></span>
            </div>
            <p className="fontSize14">
              Log in to view your
              <b>saved traveller list, unlock amazing deals</b> &amp; much more!
            </p>
          </div>
          <div><button className="loginBtn">LOGIN NOW</button></div>
        </div>
        <div className="appendBottom20" id="wrapper_ADULT">
          <div className="adultDetailsHeading">
            <div className="makeFlex perfectCenter">
              <div className="appendRight10">
                <span
                  className="adultImg bgProperties"
                  
                ></span>
              </div>
              <p className="fontSize14">
                <font className="boldFont">ADULT (12 yrs+)</font>
              </p>
            </div>
            <div className="makeFlex perfectCenter fontSize14 boldFont">
              <font color="#4a4a4a">1/1</font>
              <font color="#9b9b9b">&nbsp;added</font>
            </div>
          </div>
          <div className="adultListWrapper">
            <div className="collapse"></div>
            <div>
              <div className="adultList checked">
                <label className="checkboxContainer"
                  ><span className="commonCheckbox sizeSm primaryCheckbox"
                    ><input type="checkbox" value="" checked="" /><span
                      className="box"
                      ><span className="check"></span></span
                  ></span>
                  <div className="checkboxContent">
                    <p className="checkboxTitle">
                      <span className="paxname">deep jaswal</span>
                    </p>
                  </div></label
                >
              </div>
              <div className="AdultFormWrapper collapse show">
                <div
                  className="alert-wrapper makeFlex appendBottom12 appendTop12 paxAlert"
                
                >
                  
                </div>
                <div className="adultDetailsForm">
                  <div className="adultDetailsInnner">
                    <div className="adultItemRow appendBottom15">
                      <div className="adultItem">
                        <div className="relative">
                          <input
                            autocomplete="none"
                            placeholder="First &amp; Middle Name"
                            className="tvlrInput"
                            type="text"
                            value="deep"
                          />
                        </div>
                      </div>
                      <div className="adultItem">
                        <div className="relative">
                          <input
                            autocomplete="none"
                            placeholder="Last Name"
                            className="tvlrInput"
                            type="text"
                            value="jaswal"
                          />
                        </div>
                      </div>
                      <div className="adultItem">
                        <div className="selectTab">
                          <div>
                            <label tabindex="0"
                              ><input
                                type="radio"
                                name="gender_MANUAL_e84bb498-756c-45a3-a6e6-f82f33b69687"
                                value="MALE"
                                checked=""
                              /><span className="selectTabText">MALE</span></label
                            ><label tabindex="1"
                              ><input
                                type="radio"
                                name="gender_MANUAL_e84bb498-756c-45a3-a6e6-f82f33b69687"
                                value="FEMALE"
                              /><span className="selectTabText">FEMALE</span></label
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="adultItemRow appendBottom15">
                      <div className="adultItem">
                        <label className="makeFlex hrtlCenter"
                          >Wheelchair<span
                            className="bgProperties icon16 appendLeft5 appendTop2 pointer"
                            
                          ></span
                        ></label>
                        <div className="selectItem relative">
                          <div className="selectList css-2b097c-container">
                            <div className="dropdown__control css-yk16xz-control">
                              <div
                                className="dropdown__value-container dropdown__value-container--has-value css-1hwfws3"
                              >
                                <div
                                  className="dropdown__single-value css-1uccc91-singleValue"
                                >
                                  Not required
                                </div>
                                <div className="css-1g6gooi">
                                  <div
                                    className="dropdown__input"
                                   
                                  >
                                    <input
                                      autocapitalize="none"
                                      autocomplete="off"
                                      autocorrect="off"
                                      id="react-select-4-input"
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="otherList">
              <button type="button" className="addTravellerBtn">
                + ADD NEW ADULT
              </button>
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
        <div className="padding20" id="gstDetails">
          <label className="checkboxContainer"
            ><span className="commonCheckbox sizeSm primaryCheckbox"
              ><input type="checkbox" value="" /><span className="box"
                ><span className="check"></span></span
            ></span>
            <div className="checkboxContent">
              <p className="checkboxTitle">
                <span className="boldFont"
                  ><font color="#000000">I have a GST number</font>
                  <font color="#9b9b9b">(Optional)</font></span
                >
              </p>
            </div></label
          >
        </div>
      </div>
    </div>
    </>
  )
}

export default UserDetail
