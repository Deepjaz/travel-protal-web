import React from "react";
import FlightDeals from "../FlightDeals/FlightDeals";
import Deals01 from "../../../assets/images/featured-flights-deals/Deals01.png";
import Deals02 from "../../../assets/images/featured-flights-deals/deals02.png";
import thaiAir from "../../../assets/images/icons/thaiAir.jpg";
import Deals03 from "../../../assets/images/featured-flights-deals/deals03.png";
import vistara from "../../../assets/images/icons/vistara.jpg";
import Deals04 from "../../../assets/images/featured-flights-deals/deals04.png";
import spicejet from "../../../assets/images/icons/spicejet.jpg";
import airasia from "../../../assets/images/icons/airasia.jpg";

const featuredFlights = () => {
    
  
  return (
    <>
      <section className="featured-deal border-top py-5" id="featuredFlights">
        <div className="container">
          <div className="row my-5 aos-init aos-animate" data-aos="fade-up">
            <div className="col-12">
              <h4 className="h3 text-center theme-text-secondary fw-bold mb-3">
                Featured Flights Deals
              </h4>
              <p className="text-center theme-text-accent-two mb-0">
                Everything You Want &amp; More
              </p>
            </div>
          </div>

          <div className="row aos-init aos-animate" data-aos="fade-down">
            <FlightDeals img={Deals01} img1={thaiAir} />
            <FlightDeals img={Deals02} img1={vistara} />
            <FlightDeals img={Deals03} img1={spicejet} />
            <FlightDeals img={Deals04} img1={airasia} />
          </div>
        </div>
      </section>
    </>
  );
};

export default featuredFlights;
