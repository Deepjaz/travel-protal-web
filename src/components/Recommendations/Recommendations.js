import React from 'react'
import UniqueExperiences from "../UniqueExperiences/UniqueExperiences";
import articles08 from "../../assets/images/unique-ex/articles08.png";


import articles07 from "../../assets/images/unique-ex/articles07.png";
import articles06 from "../../assets/images/unique-ex/articles06.png";
import articles05 from "../../assets/images/unique-ex/articles05.png";
import articles04 from "../../assets/images/unique-ex/articles04.png";
import articles03 from "../../assets/images/unique-ex/articles03.png";


const Recommendations = () => {
  return (
    <>
        <section className="recom-sec py-5 border-top" id="Recommendations">
              <div className="container">
                <div className="row my-5">
                  <div
                    className="col-12 aos-init aos-animate"
                    data-aos="fade-up"
                    data-aos-delay={200}
                  >
                    <p className="text-center theme-text-accent-two mb-3">
                      <span className="ribbon">Recommendations</span>
                    </p>
                    <h5 className="theme-text-secondary h3 fw-bold text-center mb-0">
                      Only Unique Experiences
                    </h5>
                  </div>
                </div>
                <div className="row">
                  <UniqueExperiences img={articles08} />
                  <UniqueExperiences img={articles07} />
                  <UniqueExperiences img={articles06} />
                  <UniqueExperiences img={articles05} />
                  <UniqueExperiences img={articles04} />
                  <UniqueExperiences img={articles03} />
                </div>
              </div>
            </section>
    </>
  )
}

export default Recommendations