import React from "react";
import BookingConfirmation from "./BookingConfirmation/BookingConfirmation";
import BookingDetails from "./BookingDetails/BookingDetails";

const BookSuccess = () => {
  return (
    <>
      <div className="review-flight py-5">
        <div className="container">
          <BookingConfirmation/>
          <BookingDetails/>
        </div>
      </div>
    </>
  );
};

export default BookSuccess;
