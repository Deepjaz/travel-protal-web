import React from 'react'

const TravellerFooter = () => {
  return (
    <>
      <div class="selected-strip theme-bg-white mt-5">
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-xl-6 mb-3 mb-lg-0 border-end">
                            <div class="row g-0 p-4 align-items-center">
                                <div class="col-12 col-md-7">
                                    <div class="fw-bold">0 Baggage(s) Selected</div>
                                    <div class="font-small font-medium">0 of 1 Baggage(s) Selected</div>
                                </div>
                                <div class="col-12 col-md-5">
                                    <div class="fw-bold">Added to fare</div>
                                    <div class="font-small font-medium"><i class="bi bi-currency-dollar"></i>0</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-xl-6 mb-3 mb-lg-0 align-self-center">
                            <div class="row p-4">
                                <div class="col-6 col-lg-6 align-self-center">
                                    <span class="fw-bold fs-5">Total Fare:</span>
                                    <span class="fw-bold fs-5 d-flex">
                                        <i class="bi bi-currency-dollar"></i>
                                        <span class="">9506</span>
                                    </span>
                                </div>
                                <div class="col-6 col-lg-6 align-self-center">
                                    <button type="button" class="btn btn-effect btn-book"
                                        onclick="window.location.href='payment.html';">continue</button>
                                    <a href="#" class="font-small ms-3" data-bs-toggle="modal"
                                        data-bs-target="#exampleModal">Skip to Payment</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default TravellerFooter
