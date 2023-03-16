import React from 'react'
import mealIcon from "../../assets/images/icons/meal.png"
import baggage from "../../assets/images/icons/baggage.png"
import Seat from "../../assets/images/icons/seat.png"
const TravellerNaveTabes = () => {
  return (
    <>
      <div class="border-bottom theme-bg-white">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <ul class="d-flex flex-row justify-content-center">
                                <li class="p-3 me-3 active-addon">
                                    <a href="traveller-addons-meal.html"><img src={mealIcon}
                                            class="img-fluid me-2" title="meal" alt="meal"/>Add
                                        Meals</a>
                                </li>
                                <li class="p-3 me-3">
                                    <a href="traveller-addons-baggage.html"><img src={baggage}
                                            class="img-fluid me-2" title="baggage" alt="baggage"/>Add
                                        Baggage</a>
                                </li>
                                <li class="p-3">
                                    <a href="traveller-addons-seat.html"><img src={Seat}
                                            class="img-fluid me-2" title="seat" alt="seat"/>Seat</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default TravellerNaveTabes
