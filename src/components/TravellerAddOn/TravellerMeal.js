import React from 'react'
import fluid from "../../assets/images/icons/veg-meal.png"
import nonveg from "../../assets/images/icons/nonveg-meal.png"
const TravellerMeal = () => {
  return (
    <>
         <div class="tab-pane fade show active" id="pills-home" role="tabpanel"
                                        aria-labelledby="pills-home-tab">
                                        <div class="row g-0 mb-3">
                                            <div class="col-12 border-bottom">
                                                <div class="d-flex flex-column p-3">
                                                    <span class="fw-bold">Select your prefered meal(s)</span>
                                                    <span class="font-medium">Delhi - Kochi</span>
                                                </div>
                                            </div>
                                            <div class="col-12 p-3">
                                               
                                                <ul class="d-md-flex justify-content-between pt-3">
                                                    <li class="pb-3">
                                                        <img src={fluid} class="img-fluid"
                                                            alt="Meal"/>
                                                        <span class="ms-2 font-medium">VEG Sandwich</span>
                                                    </li>
                                                    <li class="pb-3">
                                                        <div class="d-flex align-items-center justify-content-end">
                                                            <i class="bi bi-currency-dollar"></i>
                                                            <span class="font-medium me-3 fw-bold">80</span>
                                                            <div class="add-btn-wrap">
                                                                <div class="input-group">
                                                                    <span class="input-group-btn">
                                                                        <button type="button"
                                                                            class="btn btn-default btn-number"
                                                                            disabled="disabled" data-type="minus"
                                                                            data-field="quant[1]">
                                                                            <span class="bi bi-dash"></span>
                                                                        </button>
                                                                    </span>
                                                                    <input type="text" name="quant[1]"
                                                                        class="form-control input-number text-center border-0"
                                                                        value="Add"/>
                                                                    <span class="input-group-btn">
                                                                        <button type="button"
                                                                            class="btn btn-default btn-number"
                                                                            data-type="plus" data-field="quant[1]">
                                                                            <span class="bi bi-plus"></span>
                                                                        </button>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                          
                                                <ul class="d-md-flex justify-content-between pt-3">
                                                    <li class="pb-3">
                                                        <img src={fluid} class="img-fluid"
                                                            alt="Meal"/>
                                                        <span class="ms-2 font-medium">VEG Meal</span>
                                                    </li>
                                                    <li class="pb-3">
                                                        <div class="d-flex align-items-center justify-content-end">
                                                            <i class="bi bi-currency-dollar"></i>
                                                            <span class="font-medium me-3 fw-bold">275</span>
                                                            <div class="add-btn-wrap">
                                                                <div class="input-group">
                                                                    <span class="input-group-btn">
                                                                        <button type="button"
                                                                            class="btn btn-default btn-number"
                                                                            disabled="disabled" data-type="minus"
                                                                            data-field="quant[2]">
                                                                            <span class="bi bi-dash"></span>
                                                                        </button>
                                                                    </span>
                                                                    <input type="text" name="quant[2]"
                                                                        class="form-control input-number text-center border-0"
                                                                        value="Add"/>
                                                                    <span class="input-group-btn">
                                                                        <button type="button"
                                                                            class="btn btn-default btn-number"
                                                                            data-type="plus" data-field="quant[2]">
                                                                            <span class="bi bi-plus"></span>
                                                                        </button>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                             
                                                <ul class="d-md-flex justify-content-between pt-3">
                                                    <li class="pb-3">
                                                        <img src={fluid} class="img-fluid"
                                                            alt="Meal"/>
                                                        <span class="ms-2 font-medium">Vegetables in Red Thai Curry with
                                                            Steamed Rice</span>
                                                    </li>
                                                    <li class="pb-3">
                                                        <div class="d-flex align-items-center justify-content-end">
                                                            <i class="bi bi-currency-dollar"></i>
                                                            <span class="font-medium me-3 fw-bold">300</span>
                                                            <div class="add-btn-wrap">
                                                                <div class="input-group">
                                                                    <span class="input-group-btn">
                                                                        <button type="button"
                                                                            class="btn btn-default btn-number"
                                                                            disabled="disabled" data-type="minus"
                                                                            data-field="quant[3]">
                                                                            <span class="bi bi-dash"></span>
                                                                        </button>
                                                                    </span>
                                                                    <input type="text" name="quant[3]"
                                                                        class="form-control input-number text-center border-0"
                                                                        value="Add"/>
                                                                    <span class="input-group-btn">
                                                                        <button type="button"
                                                                            class="btn btn-default btn-number"
                                                                            data-type="plus" data-field="quant[3]">
                                                                            <span class="bi bi-plus"></span>
                                                                        </button>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                      
                                                <ul class="d-md-flex justify-content-between pt-3">
                                                    <li class="pb-3">
                                                        <img src={fluid} class="img-fluid"
                                                            alt="Meal"/>
                                                        <span class="ms-2 font-medium">Non VEG Sandwich</span>
                                                    </li>
                                                    <li class="pb-3">
                                                        <div class="d-flex align-items-center justify-content-end">
                                                            <i class="bi bi-currency-dollar"></i>
                                                            <span class="font-medium me-3 fw-bold">180</span>
                                                            <div class="add-btn-wrap">
                                                                <div class="input-group">
                                                                    <span class="input-group-btn">
                                                                        <button type="button"
                                                                            class="btn btn-default btn-number"
                                                                            disabled="disabled" data-type="minus"
                                                                            data-field="quant[4]">
                                                                            <span class="bi bi-dash"></span>
                                                                        </button>
                                                                    </span>
                                                                    <input type="text" name="quant[4]"
                                                                        class="form-control input-number text-center border-0"
                                                                        value="Add"/>
                                                                    <span class="input-group-btn">
                                                                        <button type="button"
                                                                            class="btn btn-default btn-number"
                                                                            data-type="plus" data-field="quant[4]">
                                                                            <span class="bi bi-plus"></span>
                                                                        </button>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                           
                                                <ul class="d-md-flex justify-content-between pt-3">
                                                    <li class="pb-3">
                                                        <img src={nonveg} class="img-fluid"
                                                            alt="Meal"/>
                                                        <span class="ms-2 font-medium">Non VEG Meal</span>
                                                    </li>
                                                    <li class="pb-3">
                                                        <div class="d-flex align-items-center justify-content-end">
                                                            <i class="bi bi-currency-dollar"></i>
                                                            <span class="font-medium me-3 fw-bold">275</span>
                                                            <div class="add-btn-wrap">
                                                                <div class="input-group">
                                                                    <span class="input-group-btn">
                                                                        <button type="button"
                                                                            class="btn btn-default btn-number"
                                                                            disabled="disabled" data-type="minus"
                                                                            data-field="quant[5]">
                                                                            <span class="bi bi-dash"></span>
                                                                        </button>
                                                                    </span>
                                                                    <input type="text" name="quant[5]"
                                                                        class="form-control input-number text-center border-0"
                                                                        value="Add"/>
                                                                    <span class="input-group-btn">
                                                                        <button type="button"
                                                                            class="btn btn-default btn-number"
                                                                            data-type="plus" data-field="quant[5]">
                                                                            <span class="bi bi-plus"></span>
                                                                        </button>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                               
                                                <ul class="d-md-flex justify-content-between pt-3">
                                                    <li class="pb-3">
                                                        <img src={nonveg} class="img-fluid"
                                                            alt="Meal"/>
                                                        <span class="ms-2 font-medium">Chicken in Red Thai Curry with
                                                            Steamed Rice</span>
                                                    </li>
                                                    <li class="pb-3">
                                                        <div class="d-flex align-items-center justify-content-end">
                                                            <i class="bi bi-currency-dollar"></i>
                                                            <span class="font-medium me-3 fw-bold">300</span>
                                                            <div class="add-btn-wrap">
                                                                <div class="input-group">
                                                                    <span class="input-group-btn">
                                                                        <button type="button"
                                                                            class="btn btn-default btn-number"
                                                                            disabled="disabled" data-type="minus"
                                                                            data-field="quant[6]">
                                                                            <span class="bi bi-dash"></span>
                                                                        </button>
                                                                    </span>
                                                                    <input type="text" name="quant[6]"
                                                                        class="form-control input-number text-center border-0"
                                                                        value="Add"/>
                                                                    <span class="input-group-btn">
                                                                        <button type="button"
                                                                            class="btn btn-default btn-number"
                                                                            data-type="plus" data-field="quant[6]">
                                                                            <span class="bi bi-plus"></span>
                                                                        </button>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                               
                                                <ul class="d-md-flex justify-content-between pt-3">
                                                    <li class="pb-3">
                                                        <img src={nonveg} class="img-fluid"
                                                            alt="Meal"/>
                                                        <span class="ms-2 font-medium">Grilled Chicken Breast with
                                                            Mushroom Sauce, Yellow Rice, Saute Carrot and Beans
                                                            Baton</span>
                                                    </li>
                                                    <li class="pb-3">
                                                        <div class="d-flex align-items-center justify-content-end">
                                                            <i class="bi bi-currency-dollar"></i>
                                                            <span class="font-medium me-3 fw-bold">300</span>
                                                            <div class="add-btn-wrap">
                                                                <div class="input-group">
                                                                    <span class="input-group-btn">
                                                                        <button type="button"
                                                                            class="btn btn-default btn-number"
                                                                            disabled="disabled" data-type="minus"
                                                                            data-field="quant[7]">
                                                                            <span class="bi bi-dash"></span>
                                                                        </button>
                                                                    </span>
                                                                    <input type="text" name="quant[7]"
                                                                        class="form-control input-number text-center border-0"
                                                                        value="Add"/>
                                                                    <span class="input-group-btn">
                                                                        <button type="button"
                                                                            class="btn btn-default btn-number"
                                                                            data-type="plus" data-field="quant[7]">
                                                                            <span class="bi bi-plus"></span>
                                                                        </button>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                           
                                                <ul class="d-md-flex justify-content-between pt-3">
                                                    <li class="pb-3">
                                                        <img src={fluid} class="img-fluid"
                                                            alt="Meal"/>
                                                        <span class="ms-2 font-medium">Gluten Free Veg Meal</span>
                                                    </li>
                                                    <li class="pb-3">
                                                        <div class="d-flex align-items-center justify-content-end">
                                                            <i class="bi bi-currency-dollar"></i>
                                                            <span class="font-medium me-3 fw-bold">350</span>
                                                            <div class="add-btn-wrap">
                                                                <div class="input-group">
                                                                    <span class="input-group-btn">
                                                                        <button type="button"
                                                                            class="btn btn-default btn-number"
                                                                            disabled="disabled" data-type="minus"
                                                                            data-field="quant[8]">
                                                                            <span class="bi bi-dash"></span>
                                                                        </button>
                                                                    </span>
                                                                    <input type="text" name="quant[8]"
                                                                        class="form-control input-number text-center border-0"
                                                                        value="Add"/>
                                                                    <span class="input-group-btn">
                                                                        <button type="button"
                                                                            class="btn btn-default btn-number"
                                                                            data-type="plus" data-field="quant[8]">
                                                                            <span class="bi bi-plus"></span>
                                                                        </button>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                              
                                                <ul class="d-md-flex justify-content-between pt-3">
                                                    <li class="pb-3">
                                                        <img src={nonveg} class="img-fluid"
                                                            alt="Meal"/>
                                                        <span class="ms-2 font-medium">Gluten Free Non-Veg Meal</span>
                                                    </li>
                                                    <li class="pb-3">
                                                        <div class="d-flex align-items-center justify-content-end">
                                                            <i class="bi bi-currency-dollar"></i>
                                                            <span class="font-medium me-3 fw-bold">380</span>
                                                            <div class="add-btn-wrap">
                                                                <div class="input-group">
                                                                    <span class="input-group-btn">
                                                                        <button type="button"
                                                                            class="btn btn-default btn-number"
                                                                            disabled="disabled" data-type="minus"
                                                                            data-field="quant[9]">
                                                                            <span class="bi bi-dash"></span>
                                                                        </button>
                                                                    </span>
                                                                    <input type="text" name="quant[9]"
                                                                        class="form-control input-number text-center border-0"
                                                                        value="Add"/>
                                                                    <span class="input-group-btn">
                                                                        <button type="button"
                                                                            class="btn btn-default btn-number"
                                                                            data-type="plus" data-field="quant[9]">
                                                                            <span class="bi bi-plus"></span>
                                                                        </button>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                     
                                                <ul class="d-md-flex justify-content-between pt-3">
                                                    <li class="pb-3">
                                                        <img src={fluid} class="img-fluid"
                                                            alt="Meal"/>
                                                        <span class="ms-2 font-medium">Beverages</span>
                                                    </li>
                                                    <li class="pb-3">
                                                        <div class="d-flex align-items-center justify-content-end">
                                                            <i class="bi bi-currency-dollar"></i>
                                                            <span class="font-medium me-3 fw-bold">80</span>
                                                            <div class="add-btn-wrap">
                                                                <div class="input-group">
                                                                    <span class="input-group-btn">
                                                                        <button type="button"
                                                                            class="btn btn-default btn-number"
                                                                            disabled="disabled" data-type="minus"
                                                                            data-field="quant[10]">
                                                                            <span class="bi bi-dash"></span>
                                                                        </button>
                                                                    </span>
                                                                    <input type="text" name="quant[10]"
                                                                        class="form-control input-number text-center border-0"
                                                                        value="Add"/>
                                                                    <span class="input-group-btn">
                                                                        <button type="button"
                                                                            class="btn btn-default btn-number"
                                                                            data-type="plus" data-field="quant[10]">
                                                                            <span class="bi bi-plus"></span>
                                                                        </button>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
    </>
  )
}

export default TravellerMeal
