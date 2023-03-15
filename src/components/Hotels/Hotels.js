import React from "react";
import HotelSearch from "../HotelSearch/HotelSearch";
import FlightDestination from "../Destination/FlightDestination";
import FeaturedFlights from "../Destination/FeaturedFlights";

const Hotels = () => {
  return (
    <>
      <div className="pagewrap" id="default-page">
        <div className="head-wrapper">
          <HotelSearch />
          <div className="content-section">
            {/* <FlightDestination /> */}
            <FeaturedFlights />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hotels;
