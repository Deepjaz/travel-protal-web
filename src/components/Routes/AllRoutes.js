import React from "react";
import Home from "../Home/Home";
import SignIn from "../SignIn/SignIn";
import SignUp from "../Signup/SignUp";
import { Routes, Route } from "react-router-dom";
import Hotels from "../Hotels/Hotels";
import PrivateRoute from "./PrivateRoute";
import TopDestinations from "../TopDestinations/TopDestinations";
import BookSuccess from "../Booking/BookSuccess";
import ContactUs from "../ContactUs.js/ContactUs";
import OfferDeals from "../OfferDeals/OfferDeals";
import TravellerAddOn from "./../TravellerAddOn/TravellerAddOn";
import TravellerMain from "./../TravellerAddOn/TravellerMain";
import Payment from "./../Payment/Payment";
import Privacy from './../Privacy/Privacy';
import DetailofFlight from './../Flights/FlightSearch.js/DetailofFlight';
import Demo from './../../Demo';

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<PrivateRoute />}>
          <Route index element={<Home />}></Route>
          <Route path="/hotels" element={<Hotels />}></Route>
          <Route path="/top-destinations" element={<TopDestinations />}></Route>
          <Route path="/book-success" element={<BookSuccess />}></Route>
          <Route path="/contact" element={<ContactUs />}></Route>
          <Route path="/deals-offers" element={<OfferDeals />}></Route>
          <Route path="/TravellerAddOn" element={<TravellerMain />}></Route>
          <Route path="/Payment" element={<Payment />}></Route>
          <Route path="/Privacy" element={<Privacy />}></Route>
          <Route path="/DetailofFlight" element={<DetailofFlight />}></Route>
          <Route path="/Demo" element={<Demo />}></Route>
        </Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
        <Route path="/sign-in" element={<SignIn />}></Route>
      </Routes>
    </>
  );
};

export default AllRoutes;
