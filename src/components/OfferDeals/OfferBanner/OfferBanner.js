import React from "react";

const OfferBanner = () => {
  return (
    <>
      <div className="col-12 text-center">
        <h2 className="fs-2 mb-5">
          Flight World Offers, Coupons and Daily Deals
        </h2>
      </div>
      <div className="col-12">
        <div className=" d-flex justify-content-center">
          <ul
            className="nav nav-pills mb-3 deals-tab"
            id="pills-tab"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="domestic-tab"
                data-bs-toggle="pill"
                data-bs-target="#domestic"
                type="button"
                role="tab"
                aria-controls="domestic"
                aria-selected="true"
              >
                Domestic Flights
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="international-tab"
                data-bs-toggle="pill"
                data-bs-target="#international"
                type="button"
                role="tab"
                aria-controls="international"
                aria-selected="false"
              >
                International Flights
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default OfferBanner;
