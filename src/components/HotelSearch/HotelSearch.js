import React, { useState, useEffect } from 'react'
import axios from 'axios';

const HotelSearch = () => {
    const [toggle, setToggle] = useState()
    const [adults, setAdults] = useState(0)
    const [child, setChild] = useState(0)

    const [hotelData, setHotelData] = useState([]);
    const [cityCode, setCityCode] = useState('');

    useEffect(() => {
        const fetchHotelData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/hotel-booking?cityCode=${cityCode}`);
                setHotelData(response.data.data || []);
                console.log('data', response.data.data)
                
            } catch (error) {
                console.error(error);
            }
        };
        fetchHotelData();
    }, [cityCode]);

    const handleCityCodeChange = (event) => {
        setCityCode(event.target.value);
    };

    const handleAdultIncrease = () => {
        setAdults(adults + 1);
    }

    const handleAdultDecrease = () => {
        if (adults > 0) {
            setAdults(adults - 1);
        }
    }

    const handleChildIncrease = () => {
        setChild(child + 1)
    }

    const handleChildDecrease = () => {
        if (child > 0) {
            setChild(child - 1)
        }


    }

    const handleSearch = () => {
        setCityCode(document.getElementById('returnDestination').value);
      };


    return (
        <>
            <div className="flight-search">
                <div className="container">
                    {/* Nav tabs */}
                    <ul className="nav nav-tabs border-0" role="tablist"></ul>
                    {/* Tab content */}
                    <div className="tab-content">
                        {/* Return search */}
                        <div id="return" className="tab-pane  active">
                            <div className="row">
                                <div className="col-sm-12 col-md-12">
                                    <div className="search-pan row mx-0 theme-border-radius">
                                        <div className="col-12 col-lg-4 col-xl-3 ps-0 mb-2 mb-xl-0 pe-0 pe-lg-2">
                                            <div className="form-group">
                                                <i className="bi bi-geo-alt-fill position-absolute h2 icon-pos" />
                                                <input
                                                    type="text"
                                                    className="form-control ps-5"
                                                    id="returnDestination"
                                                    placeholder="HotelName or Destination"
                                                    
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-4 col-xl-4 ps-0 mb-2 mb-xl-0 pe-0 pe-lg-0 pe-xl-2">
                                            <div className="form-control form-group d-flex">
                                                <i className="bi bi-calendar3 position-absolute h2 icon-pos" />
                                                <span className="dep-date-input">
                                                    <input
                                                        type="text"
                                                        className="cal-input"
                                                        placeholder="check-in"
                                                        id="datepicker1"
                                                    />
                                                </span>
                                                <span className="arv-date-input ms-2">
                                                    <input
                                                        type="text"
                                                        className="cal-input"
                                                        placeholder="Check-out"
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
                                                    onClick={() => setToggle(!toggle)}
                                                >
                                                    <i className="bi bi-person-lines-fill position-absolute h2 icon-pos" />
                                                    <span className="text-truncate">{adults + child} Guest </span>
                                                </button>
                                                {toggle && (<div
                                                    className="dropdown-menu"
                                                    aria-labelledby="travellerInfoReturn"
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
                                                                        data-field="onewayChild"
                                                                        onClick={handleAdultDecrease}

                                                                    >
                                                                        <i className="bi bi-dash" />
                                                                    </button>
                                                                </div>
                                                                <input
                                                                    className="input-group-field"
                                                                    type="number"
                                                                    name="onewayChild"
                                                                    value={adults}
                                                                />
                                                                <div className="input-group-button">
                                                                    <button
                                                                        type="button"
                                                                        className="circle"
                                                                        data-quantity="plus"
                                                                        data-field="onewayChild"
                                                                        onClick={handleAdultIncrease}
                                                                    >
                                                                        <i className="bi bi-plus" />
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="d-flex">Select Children</div>
                                                            <div className="ms-auto input-group plus-minus-input">
                                                                <div className="input-group-button">
                                                                    <button
                                                                        type="button"
                                                                        className="circle"
                                                                        data-quantity="minus"
                                                                        data-field="onewayInfant"
                                                                        onClick={handleChildDecrease}
                                                                    >
                                                                        <i className="bi bi-dash" />
                                                                    </button>
                                                                </div>
                                                                <input
                                                                    className="input-group-field"
                                                                    type="number"
                                                                    name="onewayInfant"
                                                                    value={child}
                                                                />
                                                                <div className="input-group-button">
                                                                    <button
                                                                        type="button"
                                                                        className="circle"
                                                                        data-quantity="plus"
                                                                        data-field="onewayInfant"
                                                                        onClick={handleChildIncrease}
                                                                    >
                                                                        <i className="bi bi-plus" />
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </li>

                                                    </ul>
                                                </div>)}
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-6 col-xl-2 px-0">
                                            <button
                                                type="submit"
                                                className="btn btn-search"
                                                onClick={() => {
                                                    setCityCode(document.getElementById('returnDestination').value);
                                                }}
                                                
                                            >
                                                <span className="fw-bold">Search</span>
                                            </button>
                                        </div>
                                        {/* <ul>
                                            {hotelData.map((hotel) => (
                                                <li key={hotel.id}>{hotel.name}</li>
                                            ))}
                                        </ul> */}
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

export default HotelSearch