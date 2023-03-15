import React, { useState } from "react";
import DatePicker from "react-datepicker";
import axios from "axios";

const FlightSearch = () => {
  const [toggle, setToggle] = useState();
  const [adults, setAdults] = useState(0);
  const [child, setChild] = useState(0);
  const [infants, setInfants] = useState(0);
  const [cabinClass, setcabinClass] = useState();
  const [date, setDate] = useState(new Date());
  const [flight, setFlight] = useState("hotels");

  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [departDate, setDepartDate] = useState("");
  const [travellers, setTravellers] = useState("");
  const [data, setData] = useState([]);

  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(
        `localhost:3000/api/flight-booking?originLocationCode=${encodeURIComponent(
          origin
        )}&destinationLocationCode=${encodeURIComponent(
          destination
        )}&departureDate=${encodeURIComponent(
          departDate
        )}&adults=${encodeURIComponent(travellers)}`
      );
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAdultIncrease = () => {
    setAdults(adults + 1);
  };

  const handleAdultDecrease = () => {
    if (adults > 0) {
      setAdults(adults - 1);
    }
  };

  const handleChildIncrease = () => {
    setChild(child + 1);
  };

  const handleChildDecrease = () => {
    if (child > 0) {
      setChild(child - 1);
    }
  };

  const handleInfantIncrease = () => {
    setInfants(infants + 1);
  };

  const handleInfantDecrease = () => {
    if (infants > 0) {
      setInfants(infants - 1);
    }
  };

  const onChangeCaptureHandler = (e) => {
    setcabinClass(e.target.value);
  };

  const handleFlight = (tabName) => {
    console.log("flight", flight);
    setFlight(tabName);
  };

  return (
    <>
      <div className="flight-search aos-init aos-animate" data-aos="fade-up">
        <div className="container">
          <ul className="nav nav-tabs border-0" role="tablist" id="top_tab">
            <li className="nav-item">
              <button
                className="nav-link active"
                id="hotels-tab"
                data-bs-toggle="tab"
                data-bs-target="#hotels"
                type="button"
                role="tab"
                aria-controls="hotels"
                aria-selected="true"
                onClick={() => handleFlight(true)}
              >
                <i className="fa-solid fa-hotel" />
                Hotels
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link"
                id="Flights-tab"
                data-bs-toggle="tab"
                data-bs-target="#Flights"
                type="button"
                role="tab"
                aria-controls="Flights"
                aria-selected="false"
                onClick={() => handleFlight(false)}
              >
                <i className="fa fa-plane-departure" />
                Flights
              </button>
            </li>
          </ul>
          {/* Tab content */}
          <div className="tab-content">
            {/* oneway search */}
            {flight ? (
              <div
                id="hotels"
                className="tab-pane active"
                onSubmit={handleSearch}
              >
                <div className="row">
                  <div className="col-12">
                    <div className="search-pan row mx-0 theme-border-radius">
                      <div className="col-12 col-lg-4 col-xl-2 ps-0 mb-2 mb-xl-0 pe-0 pe-lg-2">
                        <div className="form-group">
                          <i className="bi bi-geo-alt-fill position-absolute h2 icon-pos" />
                          <input
                            type="text"
                            className="form-control ps-5"
                            id="onewayOrigin"
                            placeholder="Origin"
                            value={origin}
                            onChange={(e) => setOrigin(e.target.value)}
                          />
                          <button className="pos-swap">
                            <i className="bi bi-arrow-left-right pl-1" />
                          </button>
                        </div>
                      </div>
                      <div className="col-12 col-lg-4 col-xl-2 ps-0 mb-2 mb-xl-0 pe-0 pe-lg-2">
                        <div className="form-group">
                          <i className="bi bi-geo-alt-fill position-absolute h2 icon-pos" />
                          <input
                            type="text"
                            className="form-control ps-5"
                            id="onewayDestination"
                            placeholder="Destination"
                            value={destination}
                            onChange={(e) => setDestination(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-12 col-lg-4 col-xl-3 ps-0 mb-2 mb-xl-0 pe-0 pe-lg-0 pe-xl-2">
                        <div className="form-control form-group d-flex">
                          <i className="bi bi-calendar3 position-absolute h2 icon-pos" />
                          <span className="dep-date-input">
                            <input
                              type="text"
                              className="cal-input hasDatepicker"
                              placeholder="Depart Date"
                              id="datepicker"
                              dateFormat="yyyy-MM-dd"
                              value={departDate}
                              onChange={(e) => setDepartDate(e.target.value)}
                            />
                            <DatePicker
                              selected={date}
                              onChange={(date) => setDate(date)}
                            />
                          </span>
                        </div>
                      </div>
                      <div className="col-12 col-lg-6 col-xl-3 ps-0 mb-2 mb-lg-0 mb-xl-0 pe-0 pe-lg-2">
                        <div className="dropdown" id="myDD">
                          <button
                            className="dropdown-toggle form-control"
                            type="button"
                            id="travellerInfoOneway"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            onClick={() => setToggle(!toggle)}
                          >
                            <i className="bi bi-person-lines-fill position-absolute h2 icon-pos" />
                            <span className="text-truncate">
                              {adults + child + infants} Traveller(s),{" "}
                              {cabinClass}
                            </span>
                          </button>
                          {toggle && (
                            <div
                              className="dropdown-menu"
                              aria-labelledby="travellerInfoOneway"
                            >
                              <ul className="drop-rest">
                                <li>
                                  <div className="d-flex">Select Adults</div>
                                  <div className="ms-auto input-group plus-minus-input">
                                    <div className="input-group-button">
                                      <button
                                        type="button"
                                        className="circle"
                                        data-quantity="minus"
                                        data-field="onewayAdult"
                                        onClick={handleAdultDecrease}
                                        value={travellers}
                                        onChange={(e) =>
                                          setTravellers(e.target.value)
                                        }
                                      >
                                        <i className="bi bi-dash" />
                                      </button>
                                    </div>
                                    <input
                                      className="input-group-field"
                                      type="number"
                                      name="onewayAdult"
                                      // defaultValue={0}
                                      value={adults}
                                    />
                                    <div className="input-group-button">
                                      <button
                                        type="button"
                                        className="circle"
                                        data-quantity="plus"
                                        data-field="onewayAdult"
                                        onClick={handleAdultIncrease}
                                      >
                                        <i className="bi bi-plus" />
                                      </button>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="d-flex">Select Child</div>
                                  <div className="ms-auto input-group plus-minus-input">
                                    <div className="input-group-button">
                                      <button
                                        type="button"
                                        className="circle"
                                        data-quantity="minus"
                                        data-field="onewayChild"
                                        onClick={handleChildDecrease}
                                      >
                                        <i className="bi bi-dash" />
                                      </button>
                                    </div>
                                    <input
                                      className="input-group-field"
                                      type="number"
                                      name="onewayChild"
                                      value={child}
                                    />
                                    <div className="input-group-button">
                                      <button
                                        type="button"
                                        className="circle"
                                        data-quantity="plus"
                                        data-field="onewayChild"
                                        onClick={handleChildIncrease}
                                      >
                                        <i className="bi bi-plus" />
                                      </button>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="d-flex">Select Infants</div>
                                  <div className="ms-auto input-group plus-minus-input">
                                    <div className="input-group-button">
                                      <button
                                        type="button"
                                        className="circle"
                                        data-quantity="minus"
                                        data-field="onewayInfant"
                                        onClick={handleInfantDecrease}
                                      >
                                        <i className="bi bi-dash" />
                                      </button>
                                    </div>
                                    <input
                                      className="input-group-field"
                                      type="number"
                                      name="onewayInfant"
                                      value={infants}
                                    />
                                    <div className="input-group-button">
                                      <button
                                        type="button"
                                        className="circle"
                                        data-quantity="plus"
                                        data-field="onewayInfant"
                                        onClick={handleInfantIncrease}
                                      >
                                        <i className="bi bi-plus" />
                                      </button>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <label className="radio-inline">
                                    <input
                                      type="radio"
                                      name="class"
                                      value="Economy"
                                      className="me-2"
                                      onChangeCapture={onChangeCaptureHandler}
                                    />
                                    Economy{" "}
                                  </label>
                                </li>
                                <li>
                                  <label className="radio-inline">
                                    <input
                                      type="radio"
                                      name="class"
                                      defaultValue="Premium Economy"
                                      className="me-2"
                                      onChangeCapture={onChangeCaptureHandler}
                                    />
                                    Premium Economy{" "}
                                  </label>
                                </li>
                                <li>
                                  <label className="radio-inline">
                                    <input
                                      type="radio"
                                      name="class"
                                      defaultValue="Business Class"
                                      className="me-2"
                                      onChangeCapture={onChangeCaptureHandler}
                                    />
                                    Business{" "}
                                  </label>
                                </li>
                                <li>
                                  <label className="radio-inline">
                                    <input
                                      type="radio"
                                      name="class"
                                      defaultValue="First Class"
                                      className="me-2"
                                      onChangeCapture={onChangeCaptureHandler}
                                    />
                                    First Class{" "}
                                  </label>
                                </li>
                                {/* <li>
                        <button type="button" className="btn btn" onclick={handleDone}>
                          Done
                        </button>
                      </li> */}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="col-12 col-lg-6 col-xl-2 px-0">
                        <button
                          type="submit"
                          className="btn btn-search"
                          // onclick="window.location.href='flight-listing-oneway.html';"
                          onSubmit={handleSearch}
                        >
                          <span className="fw-bold">Search</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div id="Flights" className="tab-pane fade">
                <div className="row">
                  <div className="col-sm-12 col-md-12">
                    {/* Nav tabs */}
                    <ul
                      className="nav nav-tabs border-0 justify_end"
                      role="tablist"
                    >
                      <li className="nav-item">
                        <button
                          className="nav-link active"
                          id="oneway-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#oneway"
                          type="button"
                          role="tab"
                          aria-controls="oneway"
                          aria-selected="true"
                        >
                          <span className="d-inline-block icon-20 rounded-circle bg-white align-middle me-2" />
                          One-way
                        </button>
                      </li>
                      <li className="nav-item">
                        <button
                          className="nav-link"
                          id="return-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#return"
                          type="button"
                          role="tab"
                          aria-controls="return"
                          aria-selected="false"
                        >
                          <span className="d-inline-block icon-20 rounded-circle bg-white align-middle me-2" />
                          Return
                        </button>
                      </li>
                      <li className="nav-item">
                        <button
                          className="nav-link"
                          id="multiCity-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#multiCity"
                          type="button"
                          role="tab"
                          aria-controls="multiCity"
                          aria-selected="false"
                        >
                          <span className="d-inline-block icon-20 rounded-circle bg-white align-middle me-2" />
                          Multi-city
                        </button>
                      </li>
                    </ul>
                    {/* Tab content */}
                    <div className="tab-content">
                      {/* oneway search */}
                      <div id="oneway" className="tab-pane active">
                        <div className="row">
                          <div className="col-12">
                            <div className="search-pan row mx-0 theme-border-radius">
                              <div className="col-12 col-lg-4 col-xl-2 ps-0 mb-2 mb-xl-0 pe-0 pe-lg-2">
                                <div className="form-group">
                                  <i className="bi bi-geo-alt-fill position-absolute h2 icon-pos" />
                                  <input
                                    type="text"
                                    className="form-control ps-5"
                                    id="onewayOrigin"
                                    placeholder="Origin"
                                  />
                                  <button className="pos-swap">
                                    <i className="bi bi-arrow-left-right pl-1" />
                                  </button>
                                </div>
                              </div>
                              <div className="col-12 col-lg-4 col-xl-2 ps-0 mb-2 mb-xl-0 pe-0 pe-lg-2">
                                <div className="form-group">
                                  <i className="bi bi-geo-alt-fill position-absolute h2 icon-pos" />
                                  <input
                                    type="text"
                                    className="form-control ps-5"
                                    id="onewayDestination"
                                    placeholder="Destination"
                                  />
                                </div>
                              </div>
                              <div className="col-12 col-lg-4 col-xl-3 ps-0 mb-2 mb-xl-0 pe-0 pe-lg-0 pe-xl-2">
                                <div className="form-control form-group d-flex">
                                  <i className="bi bi-calendar3 position-absolute h2 icon-pos" />
                                  <span className="dep-date-input">
                                    <input
                                      type="text"
                                      className="cal-input"
                                      placeholder="Depart Date"
                                      id="datepicker"
                                    />
                                  </span>
                                </div>
                              </div>
                              <div className="col-12 col-lg-6 col-xl-3 ps-0 mb-2 mb-lg-0 mb-xl-0 pe-0 pe-lg-2">
                                <div className="dropdown" id="myDD">
                                  <button
                                    className="dropdown-toggle form-control"
                                    type="button"
                                    id="travellerInfoOneway"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    <i className="bi bi-person-lines-fill position-absolute h2 icon-pos" />
                                    <span className="text-truncate">
                                      1 Traveller(s), Economy{" "}
                                    </span>
                                  </button>

                                  <div
                                    className="dropdown-menu"
                                    aria-labelledby="travellerInfoOneway"
                                  >
                                    <ul className="drop-rest">
                                      <li>
                                        <div className="d-flex">
                                          Select Adults
                                        </div>
                                        <div className="ms-auto input-group plus-minus-input">
                                          <div className="input-group-button">
                                            <button
                                              type="button"
                                              className="circle"
                                              data-quantity="minus"
                                              data-field="onewayAdult"
                                            >
                                              <i className="bi bi-dash" />
                                            </button>
                                          </div>
                                          <input
                                            className="input-group-field"
                                            type="number"
                                            name="onewayAdult"
                                            defaultValue={0}
                                          />
                                          <div className="input-group-button">
                                            <button
                                              type="button"
                                              className="circle"
                                              data-quantity="plus"
                                              data-field="onewayAdult"
                                            >
                                              <i className="bi bi-plus" />
                                            </button>
                                          </div>
                                        </div>
                                      </li>
                                      <li>
                                        <div className="d-flex">
                                          Select Child
                                        </div>
                                        <div className="ms-auto input-group plus-minus-input">
                                          <div className="input-group-button">
                                            <button
                                              type="button"
                                              className="circle"
                                              data-quantity="minus"
                                              data-field="onewayChild"
                                            >
                                              <i className="bi bi-dash" />
                                            </button>
                                          </div>
                                          <input
                                            className="input-group-field"
                                            type="number"
                                            name="onewayChild"
                                            defaultValue={0}
                                          />
                                          <div className="input-group-button">
                                            <button
                                              type="button"
                                              className="circle"
                                              data-quantity="plus"
                                              data-field="onewayChild"
                                            >
                                              <i className="bi bi-plus" />
                                            </button>
                                          </div>
                                        </div>
                                      </li>
                                      <li>
                                        <div className="d-flex">
                                          Select Infants
                                        </div>
                                        <div className="ms-auto input-group plus-minus-input">
                                          <div className="input-group-button">
                                            <button
                                              type="button"
                                              className="circle"
                                              data-quantity="minus"
                                              data-field="onewayInfant"
                                            >
                                              <i className="bi bi-dash" />
                                            </button>
                                          </div>
                                          <input
                                            className="input-group-field"
                                            type="number"
                                            name="onewayInfant"
                                            defaultValue={0}
                                          />
                                          <div className="input-group-button">
                                            <button
                                              type="button"
                                              className="circle"
                                              data-quantity="plus"
                                              data-field="onewayInfant"
                                            >
                                              <i className="bi bi-plus" />
                                            </button>
                                          </div>
                                        </div>
                                      </li>
                                      <li>
                                        <label className="radio-inline">
                                          <input
                                            type="radio"
                                            name="class"
                                            defaultValue="Economy"
                                            className="me-2"
                                          />
                                          Economy{" "}
                                        </label>
                                      </li>
                                      <li>
                                        <label className="radio-inline">
                                          <input
                                            type="radio"
                                            name="class"
                                            defaultValue="Special"
                                            className="me-2"
                                          />
                                          Premium Economy{" "}
                                        </label>
                                      </li>
                                      <li>
                                        <label className="radio-inline">
                                          <input
                                            type="radio"
                                            name="class"
                                            defaultValue="Business"
                                            className="me-2"
                                          />
                                          Business{" "}
                                        </label>
                                      </li>
                                      <li>
                                        <label className="radio-inline">
                                          <input
                                            type="radio"
                                            name="class"
                                            defaultValue="First"
                                            className="me-2"
                                          />
                                          First Class{" "}
                                        </label>
                                      </li>
                                      <li>
                                        <button
                                          type="button"
                                          className="btn btn"
                                          onclick=""
                                        >
                                          Done
                                        </button>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="col-12 col-lg-6 col-xl-2 px-0">
                                <button
                                  type="submit"
                                  className="btn btn-search"
                                  onclick="window.location.href='flight-listing-oneway.html';"
                                >
                                  <span className="fw-bold">Search</span>
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 mt-4">
                            <div className="row">
                              <div className="col-12">
                                <div className="form-check-inline">
                                  <label className="check-wrap">
                                    Refundable Flights
                                    <input type="checkbox" />
                                    <span className="checkmark" />{" "}
                                  </label>
                                </div>
                                <div className="form-check-inline">
                                  <label className="check-wrap">
                                    {" "}
                                    Non Stop Flights
                                    <input type="checkbox" />
                                    <span className="checkmark" />{" "}
                                  </label>
                                </div>
                                <div className="form-check-inline">
                                  <label className="check-wrap">
                                    {" "}
                                    GDS Special Return
                                    <input type="checkbox" />
                                    <span className="checkmark" />{" "}
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Return search */}
                      <div id="return" className="tab-pane fade">
                        <div className="row">
                          <div className="col-sm-12 col-md-12">
                            <div className="search-pan row mx-0 theme-border-radius">
                              <div className="col-12 col-lg-4 col-xl-2 ps-0 mb-2 mb-xl-0 pe-0 pe-lg-2">
                                <div className="form-group">
                                  <i className="bi bi-geo-alt-fill position-absolute h2 icon-pos" />
                                  <input
                                    type="text"
                                    className="form-control ps-5"
                                    id="returnOrigin"
                                    placeholder="Origin"
                                  />
                                  <button className="pos-swap">
                                    <i className="bi bi-arrow-left-right pl-1" />
                                  </button>
                                </div>
                              </div>
                              <div className="col-12 col-lg-4 col-xl-2 ps-0 mb-2 mb-xl-0 pe-0 pe-lg-2">
                                <div className="form-group">
                                  <i className="bi bi-geo-alt-fill position-absolute h2 icon-pos" />
                                  <input
                                    type="text"
                                    className="form-control ps-5"
                                    id="returnDestination"
                                    placeholder="Destination"
                                  />
                                </div>
                              </div>
                              <div className="col-12 col-lg-4 col-xl-3 ps-0 mb-2 mb-xl-0 pe-0 pe-lg-0 pe-xl-2">
                                <div className="form-control form-group d-flex">
                                  <i className="bi bi-calendar3 position-absolute h2 icon-pos" />
                                  <span className="dep-date-input">
                                    <input
                                      type="text"
                                      className="cal-input hasDatepicker"
                                      placeholder="Depart Date"
                                      id="datepicker1"
                                    />
                                  </span>
                                  <span className="arv-date-input ms-2">
                                    <input
                                      type="text"
                                      className="cal-input"
                                      placeholder="Return Date"
                                      id="datepickerNull"
                                    />
                                  </span>
                                </div>
                              </div>
                              <div className="col-12 col-lg-6 col-xl-3 ps-0 mb-2 mb-lg-0 mb-xl-0 pe-0 pe-lg-2">
                                <div className="dropdown" id="myDDReturn">
                                  <button
                                    className="dropdown-toggle form-control"
                                    type="button"
                                    id="travellerInfoReturn"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    <i className="bi bi-person-lines-fill position-absolute h2 icon-pos" />
                                    <span className="text-truncate">
                                      1 Traveller(s), Economy{" "}
                                    </span>
                                  </button>
                                  <div
                                    className="dropdown-menu"
                                    aria-labelledby="travellerInfoReturn"
                                  >
                                    <ul className="drop-rest">
                                      <li>
                                        <div className="d-flex">
                                          Select Adults
                                        </div>
                                        <div className="ms-auto input-group plus-minus-input">
                                          <div className="input-group-button">
                                            <button
                                              type="button"
                                              className="circle"
                                              data-quantity="minus"
                                              data-field="onewayAdult"
                                            >
                                              <i className="bi bi-dash" />
                                            </button>
                                          </div>
                                          <input
                                            className="input-group-field"
                                            type="number"
                                            name="onewayAdult"
                                            defaultValue={0}
                                          />
                                          <div className="input-group-button">
                                            <button
                                              type="button"
                                              className="circle"
                                              data-quantity="plus"
                                              data-field="onewayAdult"
                                            >
                                              <i className="bi bi-plus" />
                                            </button>
                                          </div>
                                        </div>
                                      </li>
                                      <li>
                                        <div className="d-flex">
                                          Select Child
                                        </div>
                                        <div className="ms-auto input-group plus-minus-input">
                                          <div className="input-group-button">
                                            <button
                                              type="button"
                                              className="circle"
                                              data-quantity="minus"
                                              data-field="onewayChild"
                                            >
                                              <i className="bi bi-dash" />
                                            </button>
                                          </div>
                                          <input
                                            className="input-group-field"
                                            type="number"
                                            name="onewayChild"
                                            defaultValue={0}
                                          />
                                          <div className="input-group-button">
                                            <button
                                              type="button"
                                              className="circle"
                                              data-quantity="plus"
                                              data-field="onewayChild"
                                            >
                                              <i className="bi bi-plus" />
                                            </button>
                                          </div>
                                        </div>
                                      </li>
                                      <li>
                                        <div className="d-flex">
                                          Select Infants
                                        </div>
                                        <div className="ms-auto input-group plus-minus-input">
                                          <div className="input-group-button">
                                            <button
                                              type="button"
                                              className="circle"
                                              data-quantity="minus"
                                              data-field="onewayInfant"
                                            >
                                              <i className="bi bi-dash" />
                                            </button>
                                          </div>
                                          <input
                                            className="input-group-field"
                                            type="number"
                                            name="onewayInfant"
                                            defaultValue={0}
                                          />
                                          <div className="input-group-button">
                                            <button
                                              type="button"
                                              className="circle"
                                              data-quantity="plus"
                                              data-field="onewayInfant"
                                            >
                                              <i className="bi bi-plus" />
                                            </button>
                                          </div>
                                        </div>
                                      </li>
                                      <li>
                                        <label className="radio-inline">
                                          <input
                                            type="radio"
                                            name="class"
                                            defaultValue="Economy"
                                            className="me-2"
                                          />
                                          Economy{" "}
                                        </label>
                                      </li>
                                      <li>
                                        <label className="radio-inline">
                                          <input
                                            type="radio"
                                            name="class"
                                            defaultValue="Special"
                                            className="me-2"
                                          />
                                          Premium Economy{" "}
                                        </label>
                                      </li>
                                      <li>
                                        <label className="radio-inline">
                                          <input
                                            type="radio"
                                            name="class"
                                            defaultValue="Business"
                                            className="me-2"
                                          />
                                          Business{" "}
                                        </label>
                                      </li>
                                      <li>
                                        <label className="radio-inline">
                                          <input
                                            type="radio"
                                            name="class"
                                            defaultValue="First"
                                            className="me-2"
                                          />
                                          First Class{" "}
                                        </label>
                                      </li>
                                      <li>
                                        <button
                                          type="button"
                                          className="btn btn"
                                          onclick=""
                                        >
                                          Done
                                        </button>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="col-12 col-lg-6 col-xl-2 px-0">
                                <button
                                  type="submit"
                                  className="btn btn-search"
                                  onclick="window.location.href='flight-listing-round-trip.html';"
                                >
                                  <span className="fw-bold">Search</span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Multicity search */}
                      <div id="multiCity" className="tab-pane fade">
                        <div className="row">
                          <div className="col-sm-12 col-md-12">
                            <div className="search-pan row mx-0 theme-border-radius">
                              <div className="col-12">
                                <div className="row">
                                  <div className="col-12 col-lg-6 col-xl-3 ps-0 mb-2 mb-xl-0 pe-0 pe-lg-2">
                                    <div className="form-group">
                                      <i className="bi bi-geo-alt-fill position-absolute h2 icon-pos" />
                                      <input
                                        type="text"
                                        className="form-control ps-5"
                                        id="multiOrigin"
                                        placeholder="Origin"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-12 col-lg-6 col-xl-3 ps-0 mb-2 mb-xl-0 pe-0 pe-lg-0 pe-xl-2">
                                    <div className="form-group">
                                      <i className="bi bi-geo-alt-fill position-absolute h2 icon-pos" />
                                      <input
                                        type="text"
                                        className="form-control ps-5"
                                        id="multiDestination"
                                        placeholder="Destination"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-12 col-lg-6 col-xl-2 ps-0 mb-2 mb-xl-0 pe-0 pe-lg-2 pe-xl-2">
                                    <div className="form-control form-group d-flex">
                                      <i className="bi bi-calendar3 position-absolute h2 icon-pos" />
                                      <span className="dep-date-input">
                                        <input
                                          type="text"
                                          className="cal-input hasDatepicker"
                                          placeholder="Depart Date"
                                          id="datepicker3"
                                        />
                                      </span>
                                    </div>
                                  </div>
                                  <div className="col-12 col-lg-6 col-xl-4 ps-0 mb-2 mb-lg-0 mb-xl-0 pe-0 pe-lg-0 pe-xl-0">
                                    <div className="dropdown" id="myDDRound">
                                      <button
                                        className="dropdown-toggle form-control"
                                        type="button"
                                        id="travellerInfoMulti"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                      >
                                        <i className="bi bi-person-lines-fill position-absolute h2 icon-pos" />
                                        <span className="text-truncate">
                                          1 Traveller(s), Economy{" "}
                                        </span>
                                      </button>
                                      <div
                                        className="dropdown-menu"
                                        aria-labelledby="travellerInfoMulti"
                                      >
                                        <ul className="drop-rest">
                                          <li>
                                            <div className="d-flex">
                                              Select Adults
                                            </div>
                                            <div className="ms-auto input-group plus-minus-input">
                                              <div className="input-group-button">
                                                <button
                                                  type="button"
                                                  className="circle"
                                                  data-quantity="minus"
                                                  data-field="onewayAdult"
                                                >
                                                  <i className="bi bi-dash" />
                                                </button>
                                              </div>
                                              <input
                                                className="input-group-field"
                                                type="number"
                                                name="onewayAdult"
                                                defaultValue={0}
                                              />
                                              <div className="input-group-button">
                                                <button
                                                  type="button"
                                                  className="circle"
                                                  data-quantity="plus"
                                                  data-field="onewayAdult"
                                                >
                                                  <i className="bi bi-plus" />
                                                </button>
                                              </div>
                                            </div>
                                          </li>
                                          <li>
                                            <div className="d-flex">
                                              Select Child
                                            </div>
                                            <div className="ms-auto input-group plus-minus-input">
                                              <div className="input-group-button">
                                                <button
                                                  type="button"
                                                  className="circle"
                                                  data-quantity="minus"
                                                  data-field="onewayChild"
                                                >
                                                  <i className="bi bi-dash" />
                                                </button>
                                              </div>
                                              <input
                                                className="input-group-field"
                                                type="number"
                                                name="onewayChild"
                                                defaultValue={0}
                                              />
                                              <div className="input-group-button">
                                                <button
                                                  type="button"
                                                  className="circle"
                                                  data-quantity="plus"
                                                  data-field="onewayChild"
                                                >
                                                  <i className="bi bi-plus" />
                                                </button>
                                              </div>
                                            </div>
                                          </li>
                                          <li>
                                            <div className="d-flex">
                                              Select Infants
                                            </div>
                                            <div className="ms-auto input-group plus-minus-input">
                                              <div className="input-group-button">
                                                <button
                                                  type="button"
                                                  className="circle"
                                                  data-quantity="minus"
                                                  data-field="onewayInfant"
                                                >
                                                  <i className="bi bi-dash" />
                                                </button>
                                              </div>
                                              <input
                                                className="input-group-field"
                                                type="number"
                                                name="onewayInfant"
                                                defaultValue={0}
                                              />
                                              <div className="input-group-button">
                                                <button
                                                  type="button"
                                                  className="circle"
                                                  data-quantity="plus"
                                                  data-field="onewayInfant"
                                                >
                                                  <i className="bi bi-plus" />
                                                </button>
                                              </div>
                                            </div>
                                          </li>
                                          <li>
                                            <label className="radio-inline">
                                              <input
                                                type="radio"
                                                name="class"
                                                defaultValue="Economy"
                                                className="me-2"
                                              />
                                              Economy{" "}
                                            </label>
                                          </li>
                                          <li>
                                            <label className="radio-inline">
                                              <input
                                                type="radio"
                                                name="class"
                                                defaultValue="Special"
                                                className="me-2"
                                              />
                                              Premium Economy{" "}
                                            </label>
                                          </li>
                                          <li>
                                            <label className="radio-inline">
                                              <input
                                                type="radio"
                                                name="class"
                                                defaultValue="Business"
                                                className="me-2"
                                              />
                                              Business
                                            </label>
                                          </li>
                                          <li>
                                            <label className="radio-inline">
                                              <input
                                                type="radio"
                                                name="class"
                                                defaultValue="First"
                                                className="me-2"
                                              />
                                              First Class{" "}
                                            </label>
                                          </li>
                                          <li>
                                            <button
                                              type="button"
                                              className="btn btn"
                                              onclick=""
                                            >
                                              Done
                                            </button>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="multi_city_form_wrapper" />
                                <div className="row mt-0 mt-md-0 mt-lg-0 mt-xl-2">
                                  <div className="col-12 col-lg-12 col-xl-8">
                                    <div className="row">
                                      <div className="col-12 col-lg-4 col-xl-4 ps-0 mb-2 mb-xl-0 pe-0 pe-lg-2">
                                        <div className="form-group">
                                          <i className="bi bi-geo-alt-fill position-absolute h2 icon-pos" />
                                          <input
                                            type="text"
                                            className="form-control ps-5"
                                            id="multiOrigin2"
                                            placeholder="Origin"
                                          />
                                        </div>
                                      </div>
                                      <div className="col-12 col-lg-4 col-xl-4 ps-0 mb-2 mb-xl-0 pe-0 pe-lg-2">
                                        <div className="form-group">
                                          <i className="bi bi-geo-alt-fill position-absolute h2 icon-pos" />
                                          <input
                                            type="text"
                                            className="form-control ps-5"
                                            id="multiDestination2"
                                            placeholder="Destination"
                                          />
                                        </div>
                                      </div>
                                      <div className="col-12 col-lg-4 col-xl-4 ps-0 mb-2 mb-xl-0 pe-0 pe-lg-0 pe-xl-2">
                                        <div className="form-control form-group d-flex">
                                          <i className="bi bi-calendar3 position-absolute h2 icon-pos" />
                                          <span className="dep-date-input">
                                            <input
                                              type="text"
                                              className="cal-input hasDatepicker"
                                              placeholder="Depart Date"
                                              id="datepicker4"
                                            />
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-12 col-lg-12 col-xl-4 px-0">
                                    <div className="row">
                                      <div
                                        className="col-12 col-lg-6 col-xl-5 mb-2 mb-md-2 mb-lg-0 d-flex justify-content-center align-items-center"
                                        id="wrapper"
                                      >
                                        <button
                                          type="submit"
                                          className="btn btn-light font-small"
                                          id="addMulticityRow"
                                        >
                                          <span className="fw-bold">
                                            + Add City
                                          </span>{" "}
                                        </button>
                                      </div>
                                      <div className="col-12 col-lg-6 col-xl-7">
                                        <button
                                          type="submit"
                                          className="btn btn-search"
                                          onclick="window.location.href='flight-listing-multicity.html';"
                                        >
                                          <span className="fw-bold">
                                            Search
                                          </span>
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
              </div>
            )}
          </div>
          <div>
            {data.length > 0 && (
              <div>
                <h1>Data from the backend:</h1>
                <ul>
                  {data.map((item) => (
                    <li key={item.id}>{item.name}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
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
      </div>
    </>
  );
};

export default FlightSearch;
