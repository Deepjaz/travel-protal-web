import React from 'react'

const FlightLIstning = () => {
  return (
    <>
        <div class="border-bottom theme-bg-white">

            <div class="container">

              
                    <div class="row mb-3 pb-2 border-bottom">
                        <div class="col-12 col-md-3 col-lg-2 py-2 border-end"><span class="d-flex mb-3">Price</span>
                            <div class="price-range-slider">
                                <p class="range-value">
                                    <input type="text" id="amount" readonly/>
                                </p>
                                <div id="slider-range" class="range-bar"></div>
                            </div>
                        </div>
                        <div class="col-12 col-md-3 col-lg-3 py-2 border-end">
                            <span class="d-flex mb-3">Arrival Time</span>
                            <span class="font-small mb-2 d-flex">New Delhi - Goa</span>
                            <ul>
                                <li class="d-flex justify-content-between">
                                    <div class="form-check-inline">
                                        <label class="check-wrap">Before 6AM
                                            <input type="checkbox"><span class="checkmark"/></span>
                                        </label>
                                    </div>
                                    <div class="pull-right">
                                        <div class="form-check-inline">
                                            <label class="check-wrap">12 Noon-6PM
                                                <input type="checkbox"><span class="checkmark"/></span>
                                            </label>
                                        </div>
                                    </div>
                                </li>
                                <li class="d-flex justify-content-between">
                                    <div class="form-check-inline">
                                        <label class="check-wrap">After 6PM
                                            <input type="checkbox"><span class="checkmark"/></span>
                                        </label>
                                    </div>
                                    <div class="pull-right">
                                        <div class="form-check-inline">
                                            <label class="check-wrap">6AM-12 Noon
                                                <input type="checkbox"><span class="checkmark"/></span>
                                            </label>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="col-12 col-md-3 col-lg-3 py-3 border-end">
                            <span class="d-flex mb-3">Departure Time</span>
                            <span class="font-small mb-2 d-flex">Goa - New Delhi</span>
                            <ul>
                                <li class="d-flex justify-content-between">
                                    <div class="form-check-inline">
                                        <label class="check-wrap">Before 6AM
                                            <input type="checkbox"><span class="checkmark"/></span>
                                        </label>
                                    </div>
                                    <div class="pull-right">
                                        <div class="form-check-inline">
                                            <label class="check-wrap">12 Noon-6PM
                                                <input type="checkbox"><span class="checkmark"/></span>
                                            </label>
                                        </div>
                                    </div>
                                </li>
                                <li class="d-flex justify-content-between">
                                    <div class="form-check-inline">
                                        <label class="check-wrap">After 6PM
                                            <input type="checkbox"><span class="checkmark"></span>
                                        </label>
                                    </div>
                                    <div class="pull-right">
                                        <div class="form-check-inline">
                                            <label class="check-wrap">6AM-12 Noon
                                                <input type="checkbox"><span class="checkmark"></span>
                                            </label>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="col-12 col-md-3 col-lg-2 border-end">
                            <span class="d-flex mb-3">Duration</span>
                            <div class="price-range-slider">
                                <p class="range-value">
                                    <input type="text" id="duration" readonly />
                                </p>
                                <div id="duration-range" class="range-bar"></div>
                            </div>
                        </div>
                        <div class="col-12 col-md-3 col-lg-2 py-2">
                            <span class="fw-bold">Stops</span>
                            <ul>
                                <li>
                                    <div class="form-check-inline">
                                        <label class="check-wrap">0 Stop
                                            <input type="checkbox"><span class="checkmark"/></span>
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div class="form-check-inline">
                                        <label class="check-wrap">1 Stop
                                            <input type="checkbox"><span class="checkmark"></span>
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div class="form-check-inline">
                                        <label class="check-wrap">1+ Stop
                                            <input type="checkbox"><span class="checkmark"/></span>
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div class="form-check-inline">
                                        <label class="check-wrap">Direct/Non Change of Aircraft
                                            <input type="checkbox"><span class="checkmark"/></span>
                                        </label>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    </div>
                    </div>

                    <div class="row mb-3">
                        <div class="col-12 col-md-3 py-2 border-end">
                            <span class="d-flex mb-3">Fare Type</span>
                            <ul>
                                <li>
                                    <div class="form-check-inline">
                                        <label class="check-wrap">Refundable Fares Only
                                            <input type="checkbox"><span class="checkmark"></span>
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div class="form-check-inline">
                                        <label class="check-wrap">Nonfundable Fares
                                            <input type="checkbox"><span class="checkmark"></span>
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div class="form-check-inline">
                                        <label class="check-wrap">Partially refundable
                                            <input type="checkbox"><span class="checkmark"></span>
                                        </label>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="col-12 col-md-3 py-2 border-end">
                            <span class="d-flex mb-3">Fare Category</span>
                            <ul>
                                <li>
                                    <div class="form-check-inline">
                                        <label class="check-wrap">Retail
                                            <input type="checkbox"><span class="checkmark"></span>
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div class="form-check-inline">
                                        <label class="check-wrap">Special Return Fare
                                            <input type="checkbox"><span class="checkmark"></span>
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div class="form-check-inline">
                                        <label class="check-wrap">Flexi
                                            <input type="checkbox"><span class="checkmark"></span>
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div class="form-check-inline">
                                        <label class="check-wrap">SME
                                            <input type="checkbox"><span class="checkmark"></span>
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div class="form-check-inline">
                                        <label class="check-wrap">Business
                                            <input type="checkbox"><span class="checkmark"></span>
                                        </label>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="col-12 col-md-4 py-2">
                            <span class="d-flex mb-3">Airlines</span>
                            <ul class="d-flex flex-wrap justify-content-between">
                                <li class="w-50">
                                    <div class="form-check-inline">
                                        <label class="check-wrap">Spicejet<br>
                                            <i class="fa fa-rupee"></i> 4288 onwards
                                            <input type="checkbox"><span class="checkmark"></span>
                                        </label>
                                    </div>
                                </li>
                                <li class="w-50">
                                    <div class="form-check-inline">
                                        <label class="check-wrap">Goair<br>
                                            <i class="fa fa-rupee"></i> 4240 onwards
                                            <input type="checkbox"><span class="checkmark"></span>
                                        </label>
                                    </div>
                                </li>
                                <li class="w-50">
                                    <div class="form-check-inline">
                                        <label class="check-wrap">IndiGo<br>
                                            <i class="fa fa-rupee"></i> 4494 onwards
                                            <input type="checkbox"><span class="checkmark"></span>
                                        </label>
                                    </div>
                                </li>
                                <li class="w-50">
                                    <div class="form-check-inline">
                                        <label class="check-wrap">Vistara<br>
                                            <i class="fa fa-rupee"></i> 3065 onwards
                                            <input type="checkbox"><span class="checkmark"></span>
                                        </label>
                                    </div>
                                </li>
                                <li class="w-50">
                                    <div class="form-check-inline">
                                        <label class="check-wrap">Air India<br>
                                            <i class="fa fa-rupee"></i> 5779 onwards
                                            <input type="checkbox"><span class="checkmark"></span>
                                        </label>
                                    </div>
                                </li>
                                <li class="w-50">
                                    <div class="form-check-inline">
                                        <label class="check-wrap">Jet Airways<br>
                                            <i class="fa fa-rupee"></i> 9055 onwards
                                            <input type="checkbox"><span class="checkmark"></span>
                                        </label>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="col-12 col-md-2 align-self-end">
                            <button type="submit" class="btn btn-light">
                                <span class="fw-bold">Reset</span>
                            </button>
                            <button type="submit" class="btn btn-primary">
                                <span class="fw-bold">Apply</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  
    
    </>
  )
}

export default FlightLIstning
