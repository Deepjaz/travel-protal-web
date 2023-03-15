import React from 'react';

const BookingConfirmation = () => {
  return (
    <>  
         <div className="theme-box-shadow theme-border-radius bg-light mb-5">
            <div className="row py-4 m-auto">
                <div className="col-12 col-md-8">
                    <div className="d-flex align-items-center">
                        <div className="flex-shrink-0">
                            <div className="p-2 border border-success rounded-circle lh-1"><i
                                    className="bi bi-check-lg fs-2 text-success"></i></div>
                        </div>
                        <div className="flex-grow-1 ms-3">
                            <span className="fs-4 fw-bold">Your Booking is Confirmed!</span>
                            <p className="mb-0 font-medium">Thank you for booking with Flight World. You
                                will soon
                                receive a
                                confirmation via email.</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4 text-end">
                    <div className="font-medium fw-bold border p-2 d-inline-block theme-border-radius">Booking
                        ID: <a href="#" className="text-success">#115477</a>
                    </div>
                    <div className="font-medium mt-3"><span className="fw-bold">Booked on:</span> 9/02/2020 |
                        12:27:12 PM</div>
                </div>
            </div>
        </div>
    </>
  )
}

export default BookingConfirmation