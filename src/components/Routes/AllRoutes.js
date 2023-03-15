import React from 'react'
import Home from '../Home/Home';
import SignIn from '../SignIn/SignIn';
import SignUp from '../Signup/SignUp';
import {Routes, Route} from 'react-router-dom';
import Hotels from '../Hotels/Hotels';
import PrivateRoute from './PrivateRoute';
import TopDestinations from '../TopDestinations/TopDestinations';
import BookSuccess from '../Booking/BookSuccess';
import ContactUs from '../ContactUs.js/ContactUs';
import OfferDeals from '../OfferDeals/OfferDeals';

const AllRoutes = () => {
  return (
    <>
        <Routes> 
            <Route path='/' element={<PrivateRoute/>}>
                <Route  index  element={<Home/>}></Route>
                <Route  path='/hotels' element={<Hotels/>}></Route>
                <Route  path='/top-destinations' element={<TopDestinations/>}></Route>
                <Route  path='/book-success' element={<BookSuccess/>}></Route>
                <Route  path='/contact' element={<ContactUs/>}></Route>
                <Route  path='/deals-offers' element={<OfferDeals/>}></Route>
            </Route>
            <Route  path='/sign-up' element={<SignUp/>}></Route>
            <Route  path='/sign-in' element={<SignIn/>}></Route>
      </Routes>
     
    
    </>
  )
}

export default AllRoutes