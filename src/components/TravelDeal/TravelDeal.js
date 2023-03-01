import React from 'react';
import '../../assets/css/main.css'
// import 

const TravelDeal = (props) => {

  return (

    <>
        <div className="col-12 col-md-6 col-xl-4 mb-3">
                <div className="p-3 d-flex flex-row border theme-box-shadow theme-bg-white theme-border-radius cardeffect">
                    <div className="flex-grow-1">
                    <h6 className="fw-bold">
                        Berlin BER
                        <i className="bi bi-arrow-right mx-2" />
                        Japan AXT
                    </h6>
                    <p className="mb-3">Sun, 31/03 - Thu, 04/04</p>
                    <div className="float-start">
                        <img
                        src={props.img}
                        className="img-fluid theme-border-radius"
                        alt="Indigo"
                        title="airline Indigo"
                        />
                        <p className="font-small d-inline-flex mb-0 align-middle lh-1">
                        IndiGo - Roundtrip
                        <br />
                        Economy{" "}
                        </p>
                    </div>
                    <div className="float-end">
                        <span className="float-end h5 fw-bold theme-text-secondary">
                        <i className="bi bi-currency-dollar" /> 3,096
                        </span>
                    </div>
                    </div>
                </div>
        </div>

    </>
      
  )
}

export default TravelDeal


