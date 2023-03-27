import React, {useEffect , useState} from "react";
import SixE from "../../assets/images/icons/6E.jpg";
import TravelDeal from "../TravelDeal/TravelDeal";
import axios from "axios";
import { useLocation } from "react-router-dom";

const TravelDeals = () => {


  return (
    <>
      <section className="travel-deal py-5 border-top" id="travelDeals">
        <div className="container">
          <div className="row my-5 aos-init aos-animate" data-aos="fade-up">
            <div className="col-12">
              <h3 className="h3 text-center theme-text-secondary fw-bold mb-3">
                Amazing travel deals &amp; More
              </h3>
              <p className="text-center theme-text-accent-two mb-0">
                Explore the best of travel with our exclusive deals for{" "}
              </p>
            </div>
          </div>
          <div className="row aos-init aos-animate" data-aos="fade-down">
            {/* {travelDealsList} */}
            <TravelDeal img={SixE} />
            <TravelDeal img={SixE} />
            <TravelDeal img={SixE} />
            <TravelDeal img={SixE} />
            <TravelDeal img={SixE} />
            <TravelDeal img={SixE} />
            <TravelDeal img={SixE} />
            <TravelDeal img={SixE} />
            <TravelDeal img={SixE} />
          </div>
        </div>
      </section>
    </>
  );
};

export default TravelDeals;
