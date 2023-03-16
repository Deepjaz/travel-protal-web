import React from 'react'

const Payment = () => {
  return (
    <>
      <div class="content-section">

            <div class="review-flight py-3">
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-md-8">
                            <div class="d-flex justify-content-between align-items-start mb-3">
                                <div class="fw-bold">Pay via Wallet</div>
                            </div>
                           
                            <div class="theme-box-shadow theme-border-radius theme-bg-white mb-3">
                                <div class="row border-bottom py-3 m-auto">
                                    <div class="col-12 col-md-6">
                                        <div class="fw-bold font-medium">
                                            <img src="assets/images/icons/wallet-app.png" class="img-fluid"
                                                alt="wallet"/>
                                            <span class="ms-2">Flight World Wallet</span>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 text-end align-self-center">
                                        <span class="font-medium">You have
                                            <span class="fw-bold"><i class="bi bi-currency-dollar"></i>110
                                            </span>balance in your wallet.</span>
                                    </div>
                                </div>
                            </div>
                           
                            <div class="row g-0 py-3">
                                <div class="col-12 col-md-6">
                                    <span class="fw-bold">Choose Payment Mode
                                    </span>
                                    <p class="mb-0 mt-2 font-small theme-text-accent-one">* Your Payments are
                                        secured by SSL
                                        certificate</p>
                                </div>
                                <div class="col-12 col-md-6">
                                    <img src="../../assets/images/payment-icon.png" alt="payment-option-icons"
                                        class="img-fluid"/>
                                </div>
                            </div>
                            
                            <div class="theme-box-shadow theme-border-radius theme-bg-white mb-3">
                
                                <div class="row g-0 my-3">
                                    <div class="col-12 col-md-12 p-0">
                                        <div class="row g-0">
                                            
                                            <div class="col-12 col-sm-4 col-md-2 col-lg-2 col-xl-2 col-xxl-3">
                                                <div class="nav flex-column nav-pills me-1 custom-tab" id="v-pills-tab"
                                                    role="tablist" aria-orientation="vertical">
                                                    <button class="nav-link first-tab active" id="v-pills-credit-tab"
                                                        data-bs-toggle="pill" data-bs-target="#v-pills-credit"
                                                        type="button" role="tab" aria-controls="v-pills-credit"
                                                        aria-selected="true"><i class="payment-icon credit"></i>Credit
                                                        Card</button>

                                                    <button class="nav-link" id="v-pills-debit-tab"
                                                        data-bs-toggle="pill" data-bs-target="#v-pills-debit"
                                                        type="button" role="tab" aria-controls="v-pills-debit"
                                                        aria-selected="false"><i class="payment-icon debit"></i>Debit
                                                        Card</button>

                                                    <button class="nav-link" id="v-pills-net-banking-tab"
                                                        data-bs-toggle="pill" data-bs-target="#v-pills-net-banking"
                                                        type="button" role="tab" aria-controls="v-pills-net-banking"
                                                        aria-selected="false"><i class="payment-icon net"></i>Net
                                                        Banking</button>

                                                    <button class="nav-link" id="v-pills-upi-tab" data-bs-toggle="pill"
                                                        data-bs-target="#v-pills-upi" type="button" role="tab"
                                                        aria-controls="v-pills-upi" aria-selected="false"><i
                                                            class="payment-icon upi"></i>UPI</button>

                                                    <button class="nav-link" id="v-pills-apppay-tab"
                                                        data-bs-toggle="pill" data-bs-target="#v-pills-apppay"
                                                        type="button" role="tab" aria-controls="v-pills-apppay"
                                                        aria-selected="false"><i
                                                            class="payment-icon phone"></i>PhonePay/ Paytm</button>

                                                    <button class="nav-link" id="v-pills-wallet-tab"
                                                        data-bs-toggle="pill" data-bs-target="#v-pills-wallet"
                                                        type="button" role="tab" aria-controls="v-pills-wallet"
                                                        aria-selected="false"><i class="payment-icon wallet"></i>Mobile
                                                        Wallet</button>

                                                    <button class="nav-link" id="v-pills-payPal-tab"
                                                        data-bs-toggle="pill" data-bs-target="#v-pills-payPal"
                                                        type="button" role="tab" aria-controls="v-pills-payPal"
                                                        aria-selected="false"><i
                                                            class="payment-icon paypal"></i>Paypal</button>

                                                    <button class="nav-link last-tab" id="v-pills-emi-tab"
                                                        data-bs-toggle="pill" data-bs-target="#v-pills-emi"
                                                        type="button" role="tab" aria-controls="v-pills-emi"
                                                        aria-selected="false"><i class="payment-icon emi"></i>No
                                                        Cost
                                                        EMI</button>
                                                </div>
                                            </div>
                                       
                                            <div class="col-12 col-sm-8 col-md-10 col-lg-10 col-xl-10 col-xxl-9">
                                                <div class="tab-content p-4" id="v-pills-tabContent">
                                                    <div class="tab-pane fade show active" id="v-pills-credit"
                                                        role="tabpanel" aria-labelledby="v-pills-credit-tab">
                                                        
                                                        <div class="row">
                                                            <div class="col-12 mb-3">
                                                                <span class="d-flex fw-bold mb-3">Pay with Credit
                                                                    Card</span>
                                                                <img src="assets/images/card-options-icon.png"
                                                                    alt="card-options-icon" class="img-fluid"/>
                                                            </div>
                                                            <div class="col-12 col-xl-10">
                                                                <div class="mb-3">
                                                                    <label for="exampleInputNumber"
                                                                        class="form-label">Card
                                                                        Number</label>
                                                                    <input type="email" class="form-control"
                                                                        id="exampleInputNumber"
                                                                        placeholder="Enter card number here"/>
                                                                </div>
                                                                <div class="mb-3">
                                                                    <label for="exampleInputCardName"
                                                                        class="form-label">Name on Card</label>
                                                                    <input type="email" class="form-control"
                                                                        id="exampleInputCardName"
                                                                        placeholder="Enter name here"/>
                                                                </div>
                                                                <div class="mb-3">
                                                                    <div class="row">
                                                                        <div class="col-12 col-lg-6">
                                                                            <label class="form-label">Expiry
                                                                                Date</label>
                                                                            <div class="row">
                                                                                <div class="col-6 col-md-6 pe-0">
                                                                                    <select class="form-select"
                                                                                        aria-label="Default select example">
                                                                                        <option selected>Month
                                                                                        </option>
                                                                                        <option value="1">One
                                                                                        </option>
                                                                                        <option value="2">Two
                                                                                        </option>
                                                                                        <option value="3">Three
                                                                                        </option>
                                                                                    </select>
                                                                                </div>
                                                                                <div
                                                                                    class="col-6 col-md-6 pe-3 pe-lg-0">
                                                                                    <select class="form-select"
                                                                                        aria-label="Default select example">
                                                                                        <option selected>Year
                                                                                        </option>
                                                                                        <option value="1">One
                                                                                        </option>
                                                                                        <option value="2">Two
                                                                                        </option>
                                                                                        <option value="3">Three
                                                                                        </option>
                                                                                    </select>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-12 col-lg-6 mt-3 mt-lg-0">
                                                                            <label for="exampleInputCVV"
                                                                                class="form-label">CVV Code</label>
                                                                            <div class="d-flex align-items-center">
                                                                                <input type="email" class="form-control"
                                                                                    id="exampleInputCVV"
                                                                                    placeholder="CVV"/>
                                                                                <span class="font-extra-small ms-1">3
                                                                                    digits
                                                                                    printed on the
                                                                                    back of the card</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="mb-3">
                                                                    <div class="form-check">
                                                                        <input class="form-check-input" type="checkbox"
                                                                            value="" id="flexCheckChecked1" checked/>
                                                                        <label
                                                                            class="form-check-label font-small theme-text-accent-one"
                                                                            for="flexCheckChecked1">
                                                                            Save your card details for faster
                                                                            checkout.
                                                                            CVV
                                                                            is not saved.
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                     
                                                    </div>

                                                    <div class="tab-pane fade" id="v-pills-debit" role="tabpanel"
                                                        aria-labelledby="v-pills-debit-tab">
                                                    
                                                        <div class="row">
                                                            <div class="col-12 mb-3">
                                                                <span class="d-flex fw-bold mb-3">Pay with Debit
                                                                    Card</span>
                                                                <img src="assets/images/card-options-icon.png"
                                                                    alt="card-options-icon" class="img-fluid"/>
                                                            </div>
                                                            <div class="col-12 col-xl-10">
                                                                <div class="mb-3">
                                                                    <label for="exampleInputCardNumber"
                                                                        class="form-label">Card
                                                                        Number</label>
                                                                    <input type="email" class="form-control"
                                                                        id="exampleInputCardNumber"
                                                                        placeholder="Enter card number here"/>
                                                                </div>
                                                                <div class="mb-3">
                                                                    <label for="exampleInputName"
                                                                        class="form-label">Name on Card</label>
                                                                    <input type="email" class="form-control"
                                                                        id="exampleInputName"
                                                                        placeholder="Enter name here"/>
                                                                </div>
                                                                <div class="mb-3">
                                                                    <div class="row">
                                                                        <div class="col-12 col-lg-6">
                                                                            <label class="form-label">Expiry
                                                                                Date</label>
                                                                            <div class="row">
                                                                                <div class="col-6 col-md-6 pe-0">
                                                                                    <select class="form-select"
                                                                                        aria-label="Default select example">
                                                                                        <option selected>Month
                                                                                        </option>
                                                                                        <option value="1">One
                                                                                        </option>
                                                                                        <option value="2">Two
                                                                                        </option>
                                                                                        <option value="3">Three
                                                                                        </option>
                                                                                    </select>
                                                                                </div>
                                                                                <div
                                                                                    class="col-6 col-md-6 pe-3 pe-lg-0">
                                                                                    <select class="form-select"
                                                                                        aria-label="Default select example">
                                                                                        <option selected>Year
                                                                                        </option>
                                                                                        <option value="1">One
                                                                                        </option>
                                                                                        <option value="2">Two
                                                                                        </option>
                                                                                        <option value="3">Three
                                                                                        </option>
                                                                                    </select>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-12 col-lg-6 mt-3 mt-lg-0">
                                                                            <label for="exampleInputCreditCVV"
                                                                                class="form-label">CVV Code</label>
                                                                            <div class="d-flex align-items-center">
                                                                                <input type="email" class="form-control"
                                                                                    id="exampleInputCreditCVV"
                                                                                    placeholder="CVV"/>
                                                                                <span class="font-extra-small ms-1">3
                                                                                    digits
                                                                                    printed on the
                                                                                    back of the card</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="mb-3">
                                                                    <div class="form-check">
                                                                        <input class="form-check-input" type="checkbox"
                                                                            value="" id="flexCheckChecked" checked/>
                                                                        <label
                                                                            class="form-check-label font-small theme-text-accent-one"
                                                                            for="flexCheckChecked">
                                                                            Save your card details for faster
                                                                            checkout.
                                                                            CVV
                                                                            is not saved.
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                      
                                                    </div>

                                                    <div class="tab-pane fade" id="v-pills-net-banking" role="tabpanel"
                                                        aria-labelledby="v-pills-net-banking-tab">
                                                        
                                                        <div class="row">
                                                            <div class="col-12 mb-3">
                                                                <span class="d-flex fw-bold mb-3">Pay with Net
                                                                    Banking
                                                                    Card</span>
                                                                <img src="assets/images/card-options-icon.png"
                                                                    alt="card-options-icon" class="img-fluid"/>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="tab-pane fade" id="v-pills-upi" role="tabpanel"
                                                        aria-labelledby="v-pills-upi-tab">
                        
                                                        <div class="row">
                                                            <div class="col-12 mb-3">
                                                                <span class="d-flex fw-bold mb-3">Pay with
                                                                    UPI</span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="tab-pane fade" id="v-pills-apppay" role="tabpanel"
                                                        aria-labelledby="v-pills-apppay-tab">
                        
                                                        <div class="row">
                                                            <div class="col-12 mb-3">
                                                                <span class="d-flex fw-bold mb-3">Pay with
                                                                    Mobile App</span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="tab-pane fade" id="v-pills-wallet" role="tabpanel"
                                                        aria-labelledby="v-pills-wallet-tab">
                                    
                                                        <div class="row">
                                                            <div class="col-12 mb-3">
                                                                <span class="d-flex fw-bold mb-3">Pay with
                                                                    Wallet</span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="tab-pane fade" id="v-pills-payPal" role="tabpanel"
                                                        aria-labelledby="v-pills-payPal-tab">
                                    
                                                        <div class="row">
                                                            <div class="col-12 mb-3">
                                                                <span class="d-flex fw-bold mb-3">Pay with
                                                                    PayPal</span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="tab-pane fade" id="v-pills-emi" role="tabpanel"
                                                        aria-labelledby="v-pills-emi-tab">
                        
                                                        <div class="row">
                                                            <div class="col-12 mb-3">
                                                                <span class="d-flex fw-bold mb-3">Pay with
                                                                    EMI</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="row">
                                <div class="col-12">
                                    <div class="mb-2">
                                        Total amount to be paid
                                        <span class="fw-bold"><i class="bi bi-currency-dollar"></i>22,978</span>
                                        <span class="font-extra-small d-flex">+ Payment Fee</span>
                                    </div>
                                    <button type="submit" class="btn btn-effect btn-book px-5"
                                        onclick="window.location.href='booking-confirmation-success.html';">
                                        <span class="fw-bold">Pay Now</span>
                                    </button>
                                    <p class="mt-2 mb-0 theme-text-accent-one font-small">On Clicking "Pay" you will be
                                        redirected to the payment gateway</p>
                                </div>

                            </div>
                        </div>
                        <div class="col-12 col-md-4">
                            <div class="fw-bold mb-3">Booking Details</div>
                            <div class="row">
                                
                                <div class="col-12">
                                    <div class="theme-box-shadow theme-border-radius theme-bg-white p-3 mb-3">

                                        <div class="row g-0">
                                            <div class="col-12 pb-3 mb-3 border-bottom">
                                                <div class="row">
                                                    <div class="col-12 col-md-12 mb-2">
                                                        <div class="d-flex">
                                                            <div>
                                                                <img src="assets/images/icons/D-indigo.jpg"
                                                                    alt="airline-indigo" title="airline-indigo"/>
                                                            </div>
                                                            <div class="d-flex flex-column ms-2">
                                                                <span class="font-medium fw-bold mb-0">Departure Sat, 30
                                                                    Mar
                                                                </span>
                                                                <span class="font-medium mb-0 theme-text-accent-one">New
                                                                    Delhi <i class="bi bi-arrow-right"></i> Kochi</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-12 col-md-3">
                                                        <div class="font-medium fw-bold text-uppercase">del</div>
                                                        <div class="font-medium theme-text-accent-one">07:20
                                                        </div>
                                                    </div>
                                                    <div class=" col-12 col-md-6 text-center align-self-center">
                                                        <div class="font-extra-small theme-text-accent-one">03h 15m
                                                        </div>
                                                        <div class="font-extra-small theme-text-accent-one">Non Stop
                                                        </div>
                                                    </div>
                                                    <div class="col-12 col-md-3 text-end">
                                                        <div class="font-medium fw-bold text-uppercase">cok</div>
                                                        <div class="font-medium theme-text-accent-one">10:40
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row g-0">
                                            <div class="col-12 pb-3 mb-3 border-bottom">
                                                <div class="row">
                                                    <div class="col-12 col-md-12 mb-2">
                                                        <div class="d-flex">
                                                            <div>
                                                                <img src="assets/images/icons/D-goair.jpg"
                                                                    alt="airline-goair" title="airline-goair"/>
                                                            </div>
                                                            <div class="d-flex flex-column ms-2">
                                                                <span class="font-medium fw-bold mb-0">Return Mon, 01
                                                                    Apr
                                                                </span>
                                                                <span
                                                                    class="font-medium mb-0 theme-text-accent-one">Kochi
                                                                    <i class="bi bi-arrow-right"></i> New Delhi</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-12 col-md-3">
                                                        <div class="font-medium fw-bold text-uppercase">del</div>
                                                        <div class="font-medium theme-text-accent-one">07:20
                                                        </div>
                                                    </div>
                                                    <div class=" col-12 col-md-6 text-center align-self-center">
                                                        <div class="font-extra-small theme-text-accent-one">07h 10m
                                                        </div>
                                                        <div class="font-extra-small theme-text-accent-one">01 Stop
                                                        </div>
                                                    </div>
                                                    <div class="col-12 col-md-3 text-end">
                                                        <div class="font-medium fw-bold text-uppercase">cok</div>
                                                        <div class="font-medium theme-text-accent-one">14:40
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                
                                        <div class="d-flex">
                                            <span class="font-medium fw-bold">Travellers</span>
                                        </div>
                                        <div class="d-flex justify-content-between pt-3">
                                            <span class="font-medium theme-text-accent-one">1. Mr. John Doe</span>
                                            <span class="font-medium ms-4">Adult</span>
                                        </div>
                                        <div class="d-flex justify-content-between pt-3">
                                            <span class="font-medium theme-text-accent-one">2. Mr. Rendy Cina</span>
                                            <span class="font-medium ms-4">Child</span>
                                        </div>
                                        <div class="d-flex justify-content-between pt-3">
                                            <span class="font-medium theme-text-accent-one">3. Ms. Venu Doe</span>
                                            <span class="font-medium ms-4">Infant</span>
                                        </div>
                        
                                        <div class="d-flex mt-3">
                                            <span class="font-medium fw-bold">Contact Details</span>
                                        </div>
                                        <div class="d-flex justify-content-start pt-3">
                                            <span class="font-medium theme-text-accent-one"><i
                                                    class="bi bi-envelope"></i></span>
                                            <span class="font-medium ms-4">test.email@gmail.com</span>
                                        </div>
                                        <div class="d-flex justify-content-start pt-3">
                                            <span class="font-medium theme-text-accent-one"><i
                                                    class="bi bi-telephone"></i></span>
                                            <span class="font-medium ms-4">9874563214</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="fw-bold mb-3">Fare Details</div>
                            <div class="row">
                                <div class="col-12 mb-3">
                                    <div class="theme-box-shadow theme-border-radius theme-bg-white">
                                        <ul class="">
                        
                                            <li class="border-bottom p-3 font-medium">
                                                <div class="d-flex justify-content-between">
                                                    <span class="font-medium fw-bold">
                                                        Adult(s) (1 X $ 11,545)</span>
                                                    <span>
                                                        <i class="bi bi-currency-dollar"></i><span
                                                            class="fw-normal">1154</span>
                                                    </span>
                                                </div>
                                            </li>
                            
                                            <li class="border-bottom p-3 font-medium">
                                                <div class="d-flex justify-content-between">
                                                    <span class="font-medium fw-bold">
                                                        Convenience Fee</span>
                                                    <span>
                                                        <i class="bi bi-currency-dollar"></i><span
                                                            class="fw-normal">60</span>
                                                    </span>
                                                </div>
                                            </li>
                                           
                                            <li class="border-bottom p-3 font-medium">
                                                <div class="d-flex justify-content-between">
                                                    <span class="fs-5 fw-bold">
                                                        Grand Total</span>
                                                    <span class="fs-5">
                                                        <i class="bi bi-currency-dollar"></i><span
                                                            class="fw-bold">11785</span>
                                                    </span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </>
  )
}

export default Payment
