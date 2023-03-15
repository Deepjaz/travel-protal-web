import React from "react";
import destination01 from "../../../assets/images/destination/destination01.png";
import destination02 from "../../../assets/images/destination/destination02.png";
import destination03 from "../../../assets/images/destination/destination03.png";
import destination04 from "../../../assets/images/destination/destination04.png";
import destination05 from "../../../assets/images/destination/destination05.png";
import destination06 from "../../../assets/images/destination/destination06.png";
import destination07 from "../../../assets/images/destination/destination07.png";
import destination08 from "../../../assets/images/destination/destination08.png";
import destination09 from "../../../assets/images/destination/destination09.png";
import TopDestinations from "../../TopDestinations/TopDestinations";

const FlightDestination = () => {
  return (
    <>
      <section className="flight-destination py-5 border-top" id="topDestination">
        <div className="container">
          <div className="row my-5 aos-init aos-animate" data-aos="fade-down">
            <div className="col-12">
              <h4 className="h3 text-center fw-bold theme-text-secondary mb-3">
                Flights to top destinations
              </h4>
              <p className="text-center theme-text-accent-two mb-0">
                Everything You Want &amp; More
              </p>
            </div>
          </div>
          <div className="row aos-init aos-animate" data-aos="fade-up">
            <TopDestinations img={destination01} />
            <TopDestinations img={destination02} />
            <TopDestinations img={destination03} />
            <TopDestinations img={destination04} />
            <TopDestinations img={destination05} />
            <TopDestinations img={destination06} />
            <TopDestinations img={destination07} />
            <TopDestinations img={destination08} />
            <TopDestinations img={destination09} />
          </div>
        </div>
      </section>
    </>
  );
};

export default FlightDestination;
