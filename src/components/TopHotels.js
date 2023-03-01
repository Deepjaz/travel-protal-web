import React from 'react'

const TopHotels = () => {
    return (
        <>
            <div className="col-12 col-md-6 col-lg-3 mb-3">
                <div className="d-flex flex-column theme-box-shadow theme-border-radius">
                    <div className="picHeight overflow-hidden hoverShine theme-border-radius-top">
                        <figure className="mb-0 img-effect">
                            <img
                                src="https://media-cdn.tripadvisor.com/media/photo-s/26/d1/95/b5/nh-collection-santo-stefano.jpg"
                                className="img-fluid"
                                alt="Deals One"
                                title="Deals One"
                            />
                        </figure>
                        <div className="airline-tags position-absolute">
                            <div className="flood-effect wish_icon">
                                <i className="bi bi-heart-fill" />
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

export default TopHotels
