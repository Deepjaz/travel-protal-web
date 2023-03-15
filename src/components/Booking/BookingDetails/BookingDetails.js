import React from 'react'

const BookingDetails = () => {
  return (
    <>
        <div className="row">
            <div className="col-12 col-md-9">
                <div className="d-flex justify-content-between align-items-start mb-3">
                    <span className="fw-bold">Booking Details</span>
                </div>
                <div className="theme-box-shadow theme-border-radius bg-light mb-3 px-3">
                    <div className="row g-0">
                        <div className="col-sm-12 border-bottom">
                            <div className="row">
                                <div className="col-6 col-md-6 col-lg-3 py-3">
                                    <div className="float-start">
                                        <img src="assets/images/icons/D-indigo.jpg" alt="indigo" />
                                        <div className="font-small mt-1">Indigo</div>
                                    </div>
                                    <div className="float-start ms-2">
                                        <div className="font-medium">Departure</div>
                                        <div className="font-medium">Sat, 30 Mar</div>
                                    </div>
                                </div>
                                <div className="col-6 col-md-3 col-lg-3 py-3">
                                    <div className="fw-bold text-uppercase">DEL
                                    </div>
                                    <div className="fw-bold">07:20</div>
                                </div>
                                <div className="col-6 col-md-6 col-lg-3 py-3">
                                    <div className="float-start">
                                        <span className="font-medium d-block">03h 15m</span>
                                        <span className="font-small d-block">Non Stop</span>
                                    </div>
                                </div>
                                <div className="col-6 col-md-6 col-lg-3 py-3">
                                    <div className="fw-bold text-uppercase">DXB</div>
                                    <div className="fw-bold">10:35</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 border-bottom">
                            <div className="row">
                                <div className="col-6 col-md-6 col-lg-3 py-3">
                                    <div className="float-start">
                                        <img src="assets/images/icons/D-goair.jpg" alt="goair" />
                                        <div className="font-small mt-1">Goair</div>
                                    </div>
                                    <div className="float-start ms-2">
                                        <div className="font-medium">Return</div>
                                        <div className="font-medium">Tue, 01 Apr</div>
                                    </div>
                                </div>
                                <div className="col-6 col-md-3 col-lg-3 py-3">
                                    <div className="fw-bold text-uppercase">DXB
                                    </div>
                                    <div className="fw-bold">14:05</div>
                                </div>
                                <div className="col-6 col-md-6 col-lg-3 py-3">
                                    <div className="float-start">
                                        <span className="font-medium d-block">07h 15m</span>
                                        <span className="font-small d-block">01 Stop (s)</span>
                                    </div>
                                </div>
                                <div className="col-6 col-md-6 col-lg-3 py-3">
                                    <div className="fw-bold text-uppercase">DEL</div>
                                    <div className="fw-bold">20:35</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6 mb-3 mb-md-0">

                        <div className="theme-box-shadow theme-border-radius bg-light p-3">
                            <div className="d-flex mb-3">
                                <span className="fw-bold font-medium">Traveller Details</span>
                            </div>
                            <div className="col-12">
                                <div className="d-flex justify-content-between mb-2">
                                    <span className="font-medium">
                                        1. Mr. John Doe
                                    </span>
                                    <span className="font-medium">
                                        Adult
                                    </span>
                                </div>
                                <div className="d-flex justify-content-between mb-2">
                                    <span className="font-medium">
                                        2. Mr. Rendy Cina
                                    </span>
                                    <span className="font-medium">
                                        Child
                                    </span>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <span className="font-medium">
                                        3. Ms. Venu Doe
                                    </span>
                                    <span className="font-medium">
                                        Infant
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 mb-3 mb-md-0">
                        <div className="theme-box-shadow theme-border-radius bg-light p-3">
                            <div className="d-flex mb-3">
                                <span className="fw-bold font-medium">Contact Details</span>
                            </div>
                            <div className="col-12">
                                <div className="d-flex mb-3">
                                    <span className="font-medium">
                                        <i className="bi bi-envelope fs-6 me-2"></i>test.name@gmail.com
                                    </span>
                                </div>
                                <div className="d-flex mb-3">
                                    <span className="font-medium">
                                        <i className="bi bi-telephone fs-6 me-2"></i>(+91) 98745 63214
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-3">
                <div className="fw-bold mb-3">Fare Details</div>
                <div className="row">
                    <div className="col-12 mb-3">
                        <div className="theme-box-shadow theme-border-radius bg-light">
                            <ul className="">

                                <li className="border-bottom p-3 font-medium">
                                    <a className="d-flex justify-content-between theme-text-accent-one"
                                        data-bs-toggle="collapse" href="#baseFare" role="button"
                                        aria-expanded="false" aria-controls="baseFare">
                                        <span className="font-medium fw-bold">
                                            Base Fare</span>
                                        <span>
                                            <i className="bi bi-plus-circle-fill theme-text-accent-two"></i>
                                        </span>
                                    </a>
                                    <div className="collapse" id="baseFare">
                                        <div className="d-flex justify-content-between pt-3">
                                            <span className="font-medium">Adult(s)
                                                (1 X ₹ 11,545)</span>
                                            <span className="font-medium">
                                                <i className="bi bi-currency-dollar"></i>
                                                <span className="fw-normal">11,545</span>
                                            </span>
                                        </div>
                                    </div>
                                </li>
                                <li className="border-bottom p-3 font-medium">
                                    <a className="d-flex justify-content-between theme-text-accent-one"
                                        data-bs-toggle="collapse" href="#airlineSurcharge" role="button"
                                        aria-expanded="false" aria-controls="airlineSurcharge">
                                        <span className="font-medium fw-bold">
                                            Airline Fuel Surcharge</span>
                                        <span>
                                            <i className="bi bi-plus-circle-fill theme-text-accent-two"></i>
                                        </span>
                                    </a>
                                    <div className="collapse" id="airlineSurcharge">
                                        <div className="d-flex justify-content-between pt-3">
                                            <span className="font-medium">Adult(s)
                                                (1 X ₹ 8,0)</span>
                                            <span className="font-medium">
                                                <i className="bi bi-currency-dollar"></i>
                                                <span className="fw-normal">800</span>
                                            </span>
                                        </div>
                                    </div>
                                </li>
                                <li className="border-bottom p-3 font-medium">
                                    <a className="d-flex justify-content-between theme-text-accent-one"
                                        data-bs-toggle="collapse" href="#otherCharges" role="button"
                                        aria-expanded="false" aria-controls="otherCharges">
                                        <span className="font-medium fw-bold">
                                            Other Taxes</span>
                                        <span>
                                            <i className="bi bi-plus-circle-fill theme-text-accent-two"></i>
                                        </span>
                                    </a>
                                    <div className="collapse" id="otherCharges">
                                        <div className="d-flex justify-content-between pt-3">
                                            <span className="font-medium">Passenger Service Fee</span>
                                            <span className="font-medium">
                                                <i className="bi bi-currency-dollar"></i>
                                                <span className="fw-normal">480</span>
                                            </span>
                                        </div>
                                        <div className="d-flex justify-content-between pt-3">
                                            <span className="font-medium">Airline GST</span>
                                            <span className="font-medium">
                                                <i className="bi bi-currency-dollar"></i>
                                                <span className="fw-normal">396</span>
                                            </span>
                                        </div>
                                        <div className="d-flex justify-content-between pt-3">
                                            <span className="font-medium">Other Taxes</span>
                                            <span className="font-medium">
                                                <i className="bi bi-currency-dollar"></i>
                                                <span className="fw-normal">1151</span>
                                            </span>
                                        </div>
                                    </div>
                                </li>
                                <li className="border-bottom p-3 font-medium">
                                    <div className="d-flex justify-content-between">
                                        <span className="font-medium fw-bold text-uppercase">
                                            HC</span>
                                        <span>
                                            <i className="bi bi-currency-dollar"></i><span
                                                className="fw-normal">480</span>
                                        </span>
                                    </div>
                                </li>
                                <li className="border-bottom p-3 font-medium">
                                    <div className="d-flex justify-content-between">
                                        <span className="font-medium fw-bold text-uppercase">
                                            GST</span>
                                        <span>
                                            <i className="bi bi-currency-dollar"></i><span
                                                className="fw-normal">80</span>
                                        </span>
                                    </div>
                                </li>
                                <li className="border-bottom p-3 font-medium">
                                    <div className="d-flex justify-content-between">
                                        <span className="fs-6 fw-bold">
                                            Grand Total</span>
                                        <span className="fs-6">
                                            <i className="bi bi-currency-dollar"></i><span
                                                className="fw-bold">14952</span>
                                        </span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="theme-box-shadow theme-border-radius bg-light p-3 font-small">
                            Cancellation &amp;
                            Date change
                            charges <a href="#" className="">More</a></div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default BookingDetails