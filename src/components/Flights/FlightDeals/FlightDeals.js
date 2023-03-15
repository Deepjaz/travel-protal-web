/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';


const FlightDeals = (props) => {
    return (
        <>
            <div className="col-12 col-md-6 col-lg-3 mb-3">
                <div className="d-flex flex-column theme-box-shadow theme-border-radius">
                    <div className="picHeight overflow-hidden hoverShine theme-border-radius-top">
                        <figure className="mb-0 img-effect">
                            <img
                                // src="assets/images/featured-flights-deals/Deals01.png"
                                src={props.img}
                                className="img-fluid"
                                alt="Deals One"
                                title="Deals One"
                            />
                        </figure>
                        <div className="airline-tags position-absolute">
                            <div className="flood-effect airline-icon">
                                <img
                                    // src="assets/images/icons/thaiAir.jpg"
                                    src={props.img1}
                                    alt="airline"
                                    className="img-fluid rounded-pill"
                                />
                                <a href="#" className="font-small pe-2">
                                    Thai Airlines
                                </a>
                            </div>
                        </div>
                    </div>
                    <a
                        href="#"
                        className="position-relative py-3 px-3 mb-0 theme-border-radius-bottom card-effect theme-bg-white"
                    >
                        <div className="card-box" />
                        <span className="mb-0 pb-2 theme-text-accent-one">
                            London to New Delhi
                        </span>
                        <span className="d-flex pb-2 font-small theme-text-accent-two">
                            Oneway Trip,
                            <span className="d-inline-flex">Economy</span>
                        </span>
                        <span className="d-flex theme-text-accent-one">
                            From
                            <span className="fw-bold price theme-text-secondary">
                                <i className="bi bi-currency-dollar" /> 309 USD
                            </span>
                        </span>
                    </a>
                </div>
            </div>



        </>
    )
}

export default FlightDeals
