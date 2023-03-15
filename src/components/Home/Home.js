import React from "react";
import FlightSearch from "../Flights/FlightSearch.js/FlightSearch";
import Working from "../Working/Working";
import Banner from "./Banner/Banner";
import TravelDeals from "../TravelsDeals/TravelDeals";
// import {featuredFlights} from "../Flights/FeaturedFlights/featuredFlights"
import FlightDestination from "../Flights/FlightDestination/FlightDestination";
import Recommendations from "../Recommendations/Recommendations";
import { Link } from "react-router-dom";

const Home = () => {
  const travelDeals = Array.from({ length: 9 }, (_, index) => index);
  const travelDealsList = travelDeals.map((deal) => <TravelDeals key={deal} />);

  const flightDeals = Array.from({ length: 4 }, (_, index) => index);
  const flightDealsList = flightDeals.map((deal) => (
    <featuredFlights key={deal} />
  ));

  const topDestination = Array.from({ length: 9 }, (_, index) => index);
  const topDestinationList = topDestination.map((deal) => (
    <FlightDestination key={deal} />
  ));

  const working = Array.from({ length: 3 }, (_, index) => index);
  const workingList = working.map((deal) => <Working key={deal} />);
  return (
    <>
      <div className="pagewrap" id="default-page">
        <div className="head-wrapper">
          <Banner />
          <FlightSearch />
          <div className="content-section">
            <TravelDeals />
            <featuredFlights />
            <FlightDestination />
            <section class="py-5 theme-bg-white border-top" id="howWork">
              <div class="container">
                <Working />
              </div>
            </section>
            <Recommendations />
            <div className="col-12 text-center">
              <Link
                to="blog.html"
                className="d-inline-flex mt-2 text-link text-link-effect"
              >
                <span className="py-4 px-4">See more Popular Experiences</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
