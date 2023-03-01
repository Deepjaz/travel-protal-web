import React from 'react'
import Header from '../Header/Header'
import HotelSearch from '../HotelSearch/HotelSearch'
import Destinations from '../Destinations'
import TopHotels from '../TopHotels'
import TopExperiences from '../TopExperiences'

const Hotels = () => {
  return (
    <>
      <div className="pagewrap" id="default-page">
        <div className="head-wrapper">
          <Header />
          <HotelSearch />
          <div className="content-section">
            {/* Flight top destination */}
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
            <section className="featured-deal border-top py-5" id="featuredFlights">
              <div className="container">
                <div className="row my-5 aos-init aos-animate" data-aos="fade-up">
                  <div className="col-12">
                    <h4 className="h3 text-center theme-text-secondary fw-bold mb-3">
                      Travellers’ Choice: Top hotels
                    </h4>
                    <p className="text-center theme-text-accent-two mb-0">
                      Everything You Want &amp; More
                    </p>
                  </div>
                </div>
                <div className="row aos-init aos-animate" data-aos="fade-down">
                  <TopHotels />
                  <TopHotels />
                  <TopHotels />
                  <TopHotels />
                </div>
                <div
                  className="row my-5 border-top py-5 aos-init aos-animate"
                  data-aos="fade-up"
                >
                  <div className="col-12">
                    <h4 className="h3 text-center theme-text-secondary fw-bold mb-3">
                      {" "}
                      Top experiences on Travel Portal
                    </h4>
                    <p className="text-center theme-text-accent-two mb-0">
                      The best tours, activities and tickets
                    </p>
                  </div>
                </div>
                <div class="row aos-init aos-animate" data-aos="fade-down">
                  <TopExperiences/>
                  <TopExperiences/>
                  <TopExperiences/>
                  <TopExperiences/>
                  <TopExperiences/>
                  <TopExperiences/>
                  <TopExperiences/>
                  <TopExperiences/>
                </div>

              </div>
            </section>

          </div>


        </div>
      </div>
    </>
  )
}

export default Hotels