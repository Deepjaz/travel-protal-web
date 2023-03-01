import React from 'react';
import '../../assets/css/main.css';
import '../../assets/css/aos.css';
import '../../assets/css/bootstrap.min.css';

const TopDestinations = (props) => {
    return (

        <>
            <div className="col-12 col-md-4 mb-3">
                <div className="theme-box-shadow theme-border-radius px-4 py-4 theme-bg-white">
                    <div className="row g-0">
                        <div className="col-12 col-xxl-6 overflow-hidden theme-border-radius">
                            <div className="overflow-hidden hoverShine">
                                <figure className="mb-0 img-effect">
                                    <img
                                        // src="assets/images/destination/destination01.png"
                                        src={props.img}
                                        className="img-fluid"
                                        alt="flight-destination-one"
                                        title="flight-destination-one"
                                    />
                                </figure>
                            </div>
                        </div>
                        <div className="col-12 col-xxl-6">
                            <div className="mt-2 mt-xxl-0 ps-md-0 ps-xxl-3">
                                <span className="d-flex fw-bold">Emirrates Flights to Mumbai</span>
                                <span className="d-flex font-small fw-normal theme-text-accent-two">
                                    Book your faviort itiniary in best price
                                </span>
                                <a href="#" className="d-inline-flex mt-2 text-link text-link-effect">
                                    <span>Book Now</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




        </>

    )
}

export default TopDestinations
