import React, { useState } from 'react'
//import FlightSearchApi from './Hooks/FlightSearchApi';
import axios from "axios";

const FLightsSearching = ({ callBackData }) => {

    //const { handleClick } = FlightSearchApi();

    //const [postApi, setPostApi] = useState([]);

    let departureDate = '2023-04-01'
    let returnDate = '2023-04-18'
    let adults = '5' 
    let max = '9'
    let code = 'DEL'
    let orgin = "MUB"

    const handleClick = () => {
        console.log("yes clicked")
          axios.get(`http://localhost:3000/api/flight-booking?departureDate=${departureDate}&returnDate=${returnDate}&adults=${adults}&max=${max}&destinationLocationCode=${code}&originLocationCode=${orgin}`)
          .then((response) => {
              console.log(response.data,"this is ready")
              //setPostApi(response.data)
              callBackData(response.data);
          })
    }

  return (
    <>
      <div class="flight-search">
                <div class="container">
                   
                    <ul class="nav nav-tabs border-0" role="tablist">
                        <li class="nav-item">
                            <button class="nav-link active" id="oneway-tab" data-bs-toggle="tab"
                                data-bs-target="#oneway" type="button" role="tab" aria-controls="oneway"
                                aria-selected="true">
                                <span
                                    class="d-inline-block icon-20 rounded-circle bg-white align-middle me-2"></span>One-way
                            </button>
                        </li>
                        <li class="nav-item">
                            <button class="nav-link" id="return-tab" data-bs-toggle="tab" data-bs-target="#return"
                                type="button" role="tab" aria-controls="return" aria-selected="false">
                                <span
                                    class="d-inline-block icon-20 rounded-circle bg-white align-middle me-2"></span>Return
                            </button>
                        </li>
                        <li class="nav-item">
                            <button class="nav-link" id="multiCity-tab" data-bs-toggle="tab" data-bs-target="#multiCity"
                                type="button" role="tab" aria-controls="multiCity" aria-selected="false">
                                <span
                                    class="d-inline-block icon-20 rounded-circle bg-white align-middle me-2"></span>Multi-city
                            </button>
                        </li>
                    </ul>
            
                    <div class="tab-content">
                        
                        <div id="oneway" class="tab-pane active">
                            <div class="row">
                                <div class="col-12">
                                    <div class="search-pan row mx-0 theme-border-radius">
                                        <div class="col-12 col-lg-4 col-xl-2 ps-0 mb-2 mb-xl-0 pe-0 pe-lg-2">
                                            <div class="form-group">
                                                <i class="bi bi-geo-alt-fill position-absolute h2 icon-pos"></i>
                                                <input type="text" class="form-control ps-5" id="onewayOrigin"
                                                    placeholder="Origin"/>
                                                <button class="pos-swap"><i
                                                        class="bi bi-arrow-left-right pl-1"></i></button>
                                            </div>
                                        </div>
                                        <div class="col-12 col-lg-4 col-xl-2 ps-0 mb-2 mb-xl-0 pe-0 pe-lg-2">
                                            <div class="form-group">
                                                <i class="bi bi-geo-alt-fill position-absolute h2 icon-pos"></i>
                                                <input type="text" class="form-control ps-5" id="onewayDestination"
                                                    placeholder="Destination"/>
                                            </div>
                                        </div>
                                        <div class="col-12 col-lg-4 col-xl-3 ps-0 mb-2 mb-xl-0 pe-0 pe-lg-0 pe-xl-2">
                                            <div class="form-control form-group d-flex">
                                                <i class="bi bi-calendar3 position-absolute h2 icon-pos"></i>
                                                <span class="dep-date-input">
                                                    <input type="text" class="cal-input" placeholder="Depart Date"
                                                        id="datepicker"/>
                                                </span>
                                            </div>
                                        </div>
                                        <div class="col-12 col-lg-6 col-xl-3 ps-0 mb-2 mb-lg-0 mb-xl-0 pe-0 pe-lg-2">
                                            <div class="dropdown" id="myDD">
                                                <button class="dropdown-toggle form-control" type="button"
                                                    id="travellerInfoOneway" data-bs-toggle="dropdown"
                                                    aria-expanded="false">
                                                    <i
                                                        class="bi bi-person-lines-fill position-absolute h2 icon-pos"></i>
                                                    <span class="text-truncate">1 Traveller(s), Economy </span>
                                                </button>
                                                <div class="dropdown-menu" aria-labelledby="travellerInfoOneway">
                                                    <ul class="drop-rest">
                                                        <li>
                                                            <div class="d-flex">Select Adults</div>
                                                            <div class="ms-auto input-group plus-minus-input">
                                                                <div class="input-group-button">
                                                                    <button type="button" class="circle"
                                                                        data-quantity="minus" data-field="onewayAdult">
                                                                        <i class="bi bi-dash"></i>
                                                                    </button>
                                                                </div>
                                                                <input class="input-group-field" type="number"
                                                                    name="onewayAdult" value="0"/>
                                                                <div class="input-group-button">
                                                                    <button type="button" class="circle"
                                                                        data-quantity="plus" data-field="onewayAdult">
                                                                        <i class="bi bi-plus"></i>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div class="d-flex">Select Child</div>
                                                            <div class="ms-auto input-group plus-minus-input">
                                                                <div class="input-group-button">
                                                                    <button type="button" class="circle"
                                                                        data-quantity="minus" data-field="onewayChild">
                                                                        <i class="bi bi-dash"></i>
                                                                    </button>
                                                                </div>
                                                                <input class="input-group-field" type="number"
                                                                    name="onewayChild" value="0"/>
                                                                <div class="input-group-button">
                                                                    <button type="button" class="circle"
                                                                        data-quantity="plus" data-field="onewayChild">
                                                                        <i class="bi bi-plus"></i>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div class="d-flex">Select Infants</div>
                                                            <div class="ms-auto input-group plus-minus-input">
                                                                <div class="input-group-button">
                                                                    <button type="button" class="circle"
                                                                        data-quantity="minus" data-field="onewayInfant">
                                                                        <i class="bi bi-dash"></i>
                                                                    </button>
                                                                </div>
                                                                <input class="input-group-field" type="number"
                                                                    name="onewayInfant" value="0"/>
                                                                <div class="input-group-button">
                                                                    <button type="button" class="circle"
                                                                        data-quantity="plus" data-field="onewayInfant">
                                                                        <i class="bi bi-plus"></i>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <label class="radio-inline">
                                                                <input type="radio" name="class" value="Economy"
                                                                    class="me-2"/>Economy </label>
                                                        </li>
                                                        <li>
                                                            <label class="radio-inline">
                                                                <input type="radio" name="class" value="Special"
                                                                    class="me-2"/>Premium Economy </label>
                                                        </li>
                                                        <li>
                                                            <label class="radio-inline">
                                                                <input type="radio" name="class" value="Business"
                                                                    class="me-2"/>Business </label>
                                                        </li>
                                                        <li>
                                                            <label class="radio-inline">
                                                                <input type="radio" name="class" value="First"
                                                                    class="me-2"/>First Class </label>
                                                        </li>
                                                        <li>
                                                            <button type="button" class="btn btn"
                                                                onclick="">Done</button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12 col-lg-6 col-xl-2 px-0">
                                            <button type="submit" class="btn btn-search" onClick={handleClick}>
                                                <span class="fw-bold">Search</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 mt-4">
                                    <div class="row">
                                        <div class="col-12">
                                            <div class="form-check-inline">
                                                <label class="check-wrap">Refundable Flights
                                                    <input type="checkbox"/>
                                                    <span class="checkmark"></span> </label>
                                            </div>
                                            <div class="form-check-inline">
                                                <label class="check-wrap"> Non Stop Flights
                                                    <input type="checkbox"/>
                                                    <span class="checkmark"></span> </label>
                                            </div>
                                            <div class="form-check-inline">
                                                <label class="check-wrap"> GDS Special Return
                                                    <input type="checkbox"/>
                                                    <span class="checkmark"></span> </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div id="return" class="tab-pane fade">
                            <div class="row">
                                <div class="col-sm-12 col-md-12">
                                    <div class="search-pan row mx-0 theme-border-radius">
                                        <div class="col-12 col-lg-4 col-xl-2 ps-0 mb-2 mb-xl-0 pe-0 pe-lg-2">
                                            <div class="form-group">
                                                <i class="bi bi-geo-alt-fill position-absolute h2 icon-pos"></i>
                                                <input type="text" class="form-control ps-5" id="returnOrigin"
                                                    placeholder="Origin"/>
                                                <button class="pos-swap"><i
                                                        class="bi bi-arrow-left-right pl-1"></i></button>
                                            </div>
                                        </div>
                                        <div class="col-12 col-lg-4 col-xl-2 ps-0 mb-2 mb-xl-0 pe-0 pe-lg-2">
                                            <div class="form-group">
                                                <i class="bi bi-geo-alt-fill position-absolute h2 icon-pos"></i>
                                                <input type="text" class="form-control ps-5" id="returnDestination"
                                                    placeholder="Destination"/>
                                            </div>
                                        </div>
                                        <div class="col-12 col-lg-4 col-xl-3 ps-0 mb-2 mb-xl-0 pe-0 pe-lg-0 pe-xl-2">
                                            <div class="form-control form-group d-flex">
                                                <i class="bi bi-calendar3 position-absolute h2 icon-pos"></i>
                                                <span class="dep-date-input">
                                                    <input type="text" class="cal-input" placeholder="Depart Date"
                                                        id="datepicker1"/>
                                                </span>
                                                <span class="arv-date-input ms-2">
                                                    <input type="text" class="cal-input" placeholder="Return Date"
                                                        id="datepickerNull"/>
                                                </span>
                                            </div>
                                        </div>
                                        <div class="col-12 col-lg-6 col-xl-3 ps-0 mb-2 mb-lg-0 mb-xl-0 pe-0 pe-lg-2">
                                            <div class="dropdown" id="myDDReturn">
                                                <button class="dropdown-toggle form-control" type="button"
                                                    id="travellerInfoReturn" data-bs-toggle="dropdown"
                                                    aria-expanded="false">
                                                    <i
                                                        class="bi bi-person-lines-fill position-absolute h2 icon-pos"></i>
                                                    <span class="text-truncate">1 Traveller(s), Economy </span>
                                                </button>
                                                <div class="dropdown-menu" aria-labelledby="travellerInfoReturn">
                                                    <ul class="drop-rest">
                                                        <li>
                                                            <div class="d-flex">Select Adults</div>
                                                            <div class="ms-auto input-group plus-minus-input">
                                                                <div class="input-group-button">
                                                                    <button type="button" class="circle"
                                                                        data-quantity="minus" data-field="onewayAdult">
                                                                        <i class="bi bi-dash"></i>
                                                                    </button>
                                                                </div>
                                                                <input class="input-group-field" type="number"
                                                                    name="onewayAdult" value="0"/>
                                                                <div class="input-group-button">
                                                                    <button type="button" class="circle"
                                                                        data-quantity="plus" data-field="onewayAdult">
                                                                        <i class="bi bi-plus"></i>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div class="d-flex">Select Child</div>
                                                            <div class="ms-auto input-group plus-minus-input">
                                                                <div class="input-group-button">
                                                                    <button type="button" class="circle"
                                                                        data-quantity="minus" data-field="onewayChild">
                                                                        <i class="bi bi-dash"></i>
                                                                    </button>
                                                                </div>
                                                                <input class="input-group-field" type="number"
                                                                    name="onewayChild" value="0"/>
                                                                <div class="input-group-button">
                                                                    <button type="button" class="circle"
                                                                        data-quantity="plus" data-field="onewayChild">
                                                                        <i class="bi bi-plus"></i>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div class="d-flex">Select Infants</div>
                                                            <div class="ms-auto input-group plus-minus-input">
                                                                <div class="input-group-button">
                                                                    <button type="button" class="circle"
                                                                        data-quantity="minus" data-field="onewayInfant">
                                                                        <i class="bi bi-dash"></i>
                                                                    </button>
                                                                </div>
                                                                <input class="input-group-field" type="number"
                                                                    name="onewayInfant" value="0"/>
                                                                <div class="input-group-button">
                                                                    <button type="button" class="circle"
                                                                        data-quantity="plus" data-field="onewayInfant">
                                                                        <i class="bi bi-plus"></i>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <label class="radio-inline">
                                                                <input type="radio" name="class" value="Economy"
                                                                    class="me-2"/>Economy </label>
                                                        </li>
                                                        <li>
                                                            <label class="radio-inline">
                                                                <input type="radio" name="class" value="Special"
                                                                    class="me-2"/>Premium Economy </label>
                                                        </li>
                                                        <li>
                                                            <label class="radio-inline">
                                                                <input type="radio" name="class" value="Business"
                                                                    class="me-2"/>Business </label>
                                                        </li>
                                                        <li>
                                                            <label class="radio-inline">
                                                                <input type="radio" name="class" value="First"
                                                                    class="me-2"/>First Class </label>
                                                        </li>
                                                        <li>
                                                            <button type="button" class="btn btn"
                                                                onclick="">Done</button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12 col-lg-6 col-xl-2 px-0">
                                            <button type="submit" class="btn btn-search"
                                                onclick="window.location.href='flight-listing-round-trip.html';">
                                                <span class="fw-bold">Search</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                     
                        <div id="multiCity" class="tab-pane fade">
                            <div class="row">
                                <div class="col-sm-12 col-md-12">
                                    <div class="search-pan row mx-0 theme-border-radius">
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-12 col-lg-6 col-xl-3 ps-0 mb-2 mb-xl-0 pe-0 pe-lg-2">
                                                    <div class="form-group">
                                                        <i class="bi bi-geo-alt-fill position-absolute h2 icon-pos"></i>
                                                        <input type="text" class="form-control ps-5" id="multiOrigin"
                                                            placeholder="Origin"/>
                                                    </div>
                                                </div>
                                                <div
                                                    class="col-12 col-lg-6 col-xl-3 ps-0 mb-2 mb-xl-0 pe-0 pe-lg-0 pe-xl-2">
                                                    <div class="form-group">
                                                        <i class="bi bi-geo-alt-fill position-absolute h2 icon-pos"></i>
                                                        <input type="text" class="form-control ps-5"
                                                            id="multiDestination" placeholder="Destination"/>
                                                    </div>
                                                </div>
                                                <div
                                                    class="col-12 col-lg-6 col-xl-2 ps-0 mb-2 mb-xl-0 pe-0 pe-lg-2 pe-xl-2">
                                                    <div class="form-control form-group d-flex">
                                                        <i class="bi bi-calendar3 position-absolute h2 icon-pos"></i>
                                                        <span class="dep-date-input">
                                                            <input type="text" class="cal-input"
                                                                placeholder="Depart Date" id="datepicker3"/>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div
                                                    class="col-12 col-lg-6 col-xl-4 ps-0 mb-2 mb-lg-0 mb-xl-0 pe-0 pe-lg-0 pe-xl-0">
                                                    <div class="dropdown" id="myDDRound">
                                                        <button class="dropdown-toggle form-control" type="button"
                                                            id="travellerInfoMulti" data-bs-toggle="dropdown"
                                                            aria-expanded="false">
                                                            <i
                                                                class="bi bi-person-lines-fill position-absolute h2 icon-pos"></i>
                                                            <span class="text-truncate">1 Traveller(s), Economy </span>
                                                        </button>
                                                        <div class="dropdown-menu" aria-labelledby="travellerInfoMulti">
                                                            <ul class="drop-rest">
                                                                <li>
                                                                    <div class="d-flex">Select Adults</div>
                                                                    <div class="ms-auto input-group plus-minus-input">
                                                                        <div class="input-group-button">
                                                                            <button type="button" class="circle"
                                                                                data-quantity="minus"
                                                                                data-field="onewayAdult">
                                                                                <i class="bi bi-dash"></i>
                                                                            </button>
                                                                        </div>
                                                                        <input class="input-group-field" type="number"
                                                                            name="onewayAdult" value="0"/>
                                                                        <div class="input-group-button">
                                                                            <button type="button" class="circle"
                                                                                data-quantity="plus"
                                                                                data-field="onewayAdult">
                                                                                <i class="bi bi-plus"></i>
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div class="d-flex">Select Child</div>
                                                                    <div class="ms-auto input-group plus-minus-input">
                                                                        <div class="input-group-button">
                                                                            <button type="button" class="circle"
                                                                                data-quantity="minus"
                                                                                data-field="onewayChild">
                                                                                <i class="bi bi-dash"></i>
                                                                            </button>
                                                                        </div>
                                                                        <input class="input-group-field" type="number"
                                                                            name="onewayChild" value="0"/>
                                                                        <div class="input-group-button">
                                                                            <button type="button" class="circle"
                                                                                data-quantity="plus"
                                                                                data-field="onewayChild">
                                                                                <i class="bi bi-plus"></i>
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div class="d-flex">Select Infants</div>
                                                                    <div class="ms-auto input-group plus-minus-input">
                                                                        <div class="input-group-button">
                                                                            <button type="button" class="circle"
                                                                                data-quantity="minus"
                                                                                data-field="onewayInfant">
                                                                                <i class="bi bi-dash"></i>
                                                                            </button>
                                                                        </div>
                                                                        <input class="input-group-field" type="number"
                                                                            name="onewayInfant" value="0"/>
                                                                        <div class="input-group-button">
                                                                            <button type="button" class="circle"
                                                                                data-quantity="plus"
                                                                                data-field="onewayInfant">
                                                                                <i class="bi bi-plus"></i>
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <label class="radio-inline">
                                                                        <input type="radio" name="class" value="Economy"
                                                                            class="me-2"/>Economy </label>
                                                                </li>
                                                                <li>
                                                                    <label class="radio-inline">
                                                                        <input type="radio" name="class" value="Special"
                                                                            class="me-2"/>Premium Economy </label>
                                                                </li>
                                                                <li>
                                                                    <label class="radio-inline">
                                                                        <input type="radio" name="class"
                                                                            value="Business" class="me-2"/>Business
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label class="radio-inline">
                                                                        <input type="radio" name="class" value="First"
                                                                            class="me-2"/>First Class </label>
                                                                </li>
                                                                <li>
                                                                    <button type="button" class="btn btn"
                                                                        onclick="">Done</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row mt-0 mt-md-0 mt-lg-0 mt-xl-2">
                                                <div class="col-12 col-lg-4 col-xl-3 ps-0 mb-2 mb-xl-0 pe-0 pe-lg-2">
                                                    <div class="form-group">
                                                        <i class="bi bi-geo-alt-fill position-absolute h2 icon-pos"></i>
                                                        <input type="text" class="form-control ps-5" id="multiOrigin2"
                                                            placeholder="Origin"/>
                                                    </div>
                                                </div>
                                                <div class="col-12 col-lg-4 col-xl-3 ps-0 mb-2 mb-xl-0 pe-0 pe-lg-2">
                                                    <div class="form-group">
                                                        <i class="bi bi-geo-alt-fill position-absolute h2 icon-pos"></i>
                                                        <input type="text" class="form-control ps-5"
                                                            id="multiDestination2" placeholder="Destination"/>
                                                    </div>
                                                </div>
                                                <div
                                                    class="col-12 col-lg-4 col-xl-2 ps-0 mb-2 mb-xl-0 pe-0 pe-lg-0 pe-xl-2">
                                                    <div class="form-control form-group d-flex">
                                                        <i class="bi bi-calendar3 position-absolute h2 icon-pos"></i>
                                                        <span class="dep-date-input">
                                                            <input type="text" class="cal-input"
                                                                placeholder="Depart Date" id="datepicker4"/>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div class="col-12 col-lg-12 col-xl-4 px-0">
                                                    <div class="row">
                                                        <div
                                                            class="col-12 col-lg-6 col-xl-7 mb-2 mb-md-2 mb-lg-0 d-flex justify-content-center align-items-center">
                                                            <button type="submit" class="btn btn-light" id="add-button">
                                                                <span class="fw-bold">+ Add City</span> </button>
                                                            <button type="submit" class="btn" id="remove-button"> <span
                                                                    class="fw-bold">Close</span> </button>
                                                        </div>
                                                        <div class="col-12 col-lg-6 col-xl-5">
                                                            <button type="submit" class="btn btn-search"
                                                                onclick="window.location.href='';">
                                                                <span class="fw-bold">Search</span>
                                                            </button>
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
            </div>
    </>
  )
}

export default FLightsSearching
