import React from "react";
import TravellerAddOn from "./TravellerAddOn";
import TravellerNaveTabes from "./TravellerNaveTabes";
import TravellerHistory from "./TravellerHistory";
import TravellerMeal from "./TravellerMeal";
import TravellerBaggage from './TravellerBaggage';
import Travellerseat from './Travellerseat';
import TravellerFooter from './TravellerFooter';

const TravellerMain = () => {
  return (
    <>
      <TravellerAddOn />
      <div class="content-section">
        <TravellerNaveTabes />
        <TravellerHistory />

        <div class="review-flight py-3">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <div class="theme-box-shadow theme-border-radius bg-light mb-3 pb-0">
                  <div class="tab-content" id="pills-tabContent">
                    <TravellerMeal />
                    <TravellerBaggage/>
                    <Travellerseat/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
            <TravellerFooter/>
      </div>
    </>
  );
};

export default TravellerMain;
