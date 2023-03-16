import React from 'react'
import indigo from "../../assets/images/icons/D-indigo.jpg"
import Indigo from "../../assets/images/icons/6E.jpg"
const TravellerHistory = () => {
  return (
    <>
      <div class="theme-bg-white mb-3">
                <div class="container">
                    <div class="row border-bottom py-2">
                        <div class="col-8">
                            <ul class="d-flex nav nav-pills addons-tab" id="pills-tab" role="tablist">
                                <li class="nav-item mb-3 mb-sm-0" role="presentation">
                                    <div class="p-2 border theme-border-radius d-flex align-items-center"
                                        id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home"
                                        role="tab" aria-controls="pills-home" aria-selected="true">
                                        <div class="flex-shrink-0">
                                            <img src={Indigo} class="img-fluid" alt="Indigo"
                                                title="airline Indigo"/>
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            <div class="fw-bold">DEL - COK</div>
                                            <div class="font-small">1 of 1 selected</div>
                                        </div>
                                    </div>
                                </li>
                                <li class="nav-item ms-0 ms-sm-3" role="presentation">
                                    <div class="p-2 border theme-border-radius d-flex align-items-center"
                                        id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile"
                                        role="tab" aria-controls="pills-profile" aria-selected="false">
                                        <div class="flex-shrink-0">
                                            <img src={Indigo} class="img-fluid" alt="Indigo"
                                                title="airline Indigo"/>
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            <div class="fw-bold">COK - DEL</div>
                                            <div class="font-small text-danger">Selection pending</div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="col-4 text-end align-self-center">
                            <a class="font-small" data-bs-toggle="collapse" href="#collapseDepart" role="button"
                                aria-expanded="false" aria-controls="collapseDepart">
                                Flight summary<i class="bi bi-chevron-down ps-1"></i></a>

                        </div>
                    </div>
                    <div class="collapse" id="collapseDepart">
                        <div class="row">
                            <div class="col-sm-12">
                                <div class="px-3">
                                    <ul class="row py-3">
                                        <li class="col-12 pb-3">
                                            <div class="float-start">
                                                <img src={indigo} alt="indigo"/>
                                            </div>
                                            <div class="float-start ms-2">
                                                <div class="font-medium">Spicejet</div>
                                                <div class="font-small">SG-191</div>
                                            </div>
                                            <div
                                                class="float-start rounded theme-bg-secondary theme-text-white font-medium px-2 ms-5">
                                                Class - SS</div>
                                            <div class="font-medium float-start mx-5">Economy</div>
                                            <div class="font-medium float-start mx-5">Refundable</div>

                                        </li>
                                        <li class="col-12 col-md-6 col-lg-3 pb-3">
                                            <div class="font-medium fw-bold text-uppercase">New Delhi
                                            </div>
                                            <div class="font-medium fw-bold">07:20 | <span class="fw-normal">Sat,
                                                    Mar 30</span></div>
                                            <div class="font-small">Indira Gandhi, T - 1D</div>
                                        </li>
                                        <li class="col-12 col-md-6 col-lg-3 pb-3">
                                            <div class="float-start"><i class="bi bi-clock pe-2 fs-6"></i>
                                            </div>
                                            <div class="float-start"> <span class="font-medium d-block">03h
                                                    15m</span>
                                                <span class="font-small d-block">Non Stop</span> <span
                                                    class="font-small d-block">Equipment:737</span>
                                            </div>
                                        </li>
                                        <li class="col-12 col-md-6 col-lg-3 pb-3">
                                            <div class="font-medium fw-bold text-uppercase">KOCHI</div>
                                            <div class="font-medium fw-bold">10:35 | <span class="fw-normal">Sat,
                                                    Mar 30</span></div>
                                            <div class="font-small">Cochin, T - 2</div>
                                        </li>
                                        <li class="col-12 col-md-6 col-lg-3 pb-3"> <span
                                                class="font-small text-uppercase fw-bold"> <i
                                                    class="bi bi-briefcase me-2 fs-6"></i> Baggage </span>
                                            <span class="font-small d-block">CHECK-IN : 15 Kgs</span><span
                                                class="font-small d-block">CABIN : 7 Kgs</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default TravellerHistory
