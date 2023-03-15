import React from 'react'
import Destinations from '../Destinations'



const FlightDestination = () => {
  return (
    <>
        <section className="flight-destination py-5 border-top" id="topDestination">
              <div className="container">
                <div className="row my-5" data-aos="fade-down">
                  <div className="col-12">
                    <h4 className="h3 text-center fw-bold theme-text-secondary mb-3">
                      Find top destinations
                    </h4>
                    <p className="text-center theme-text-accent-two mb-0">
                      Everything You Want &amp; More
                    </p>
                  </div>
                </div>
                <div className="row" data-aos="fade-up">
                  <Destinations />
                  <Destinations />
                  <Destinations />
                  <Destinations />
                  <Destinations />
                  <Destinations />
                  <Destinations />
                  <Destinations />
                </div>
              </div>

            </section>
    </>
  )
}

export default FlightDestination