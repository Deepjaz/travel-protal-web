import React from 'react'

const UniqueExperiences = (props) => {
  return (


    <>
     
        <div
          className="col-12 col-md-4 mb-4 aos-init aos-animate"
          data-aos="fade-down"
          data-aos-delay={300}
        >
          <div className="position-relative theme-border-radius theme-box-shadow item-effect">
            <div className="con theme-text-white theme-text-shadow">
              <h2 className="h6 fw-bold d-inline-flex border-bottom pb-2">
                New York, United States
              </h2>
              <span className="d-flex font-14">Get prices</span>
            </div>
            <img
              // src={articles08}
              src={props.img}
              className="img-fluid"
              alt="Unique Experience One"
              title="Unique Experience One"
            />
            <a href="#" className="text-center">
              <i className="bi bi-search" />
            </a>
          </div>
        </div>
  

    </>



  )
}

export default UniqueExperiences
