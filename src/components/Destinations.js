import React from 'react'

const Destinations = () => {
    return (
        <>
            {/* repetable */}
            <div className="col-12 col-md-3 mb-3">
                    <div className="theme-box-shadow theme-border-radius px-4 py-4 theme-bg-white">
                      <div className="row g-0">
                        <div className="col-12 col-xxl-6 overflow-hidden theme-border-radius">
                          <div className="overflow-hidden hoverShine">
                            <figure className="mb-0 img-effect">
                              <img
                                src="../../assets/images/destination/destination01.png"
                                className="img-fluid"
                                alt="flight-destination-one"
                                title="flight-destination-one"
                              />
                            </figure>
                          </div>
                        </div>
                        <div className="col-12 col-xxl-6">
                          <div className="mt-2 mt-xxl-0 ps-md-0 ps-xxl-3">
                            <a href="filter.html">
                              <span className="d-flex fw-bold">Goa</span>
                            </a>
                            <span className="d-flex font-small fw-normal theme-text-accent-two">
                              Hotels, Budget Hotels, Resorts, Best Hotels, Villas
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

        </>
    )
}

export default Destinations