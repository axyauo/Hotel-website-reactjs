import React from 'react'
import './FoodMenu.css'
import BreakFast from '.././Meal/BreakFast/BreakFast'
import Lunch from '.././Meal/Lunch/Lunch'
import Dinner from '.././Meal/Dinner/Dinner'

export default function FoodMenu() {
  return (
    <>
        <div className="container">
            <div className="headings">
                <h5 class="section-title ff-secondary text-center text-color text-center">Food Menu</h5>
                <h1 class="mb-5 text-center">Most Popular Items</h1>
            </div>
            <nav>
              <div class="nav-tab-01" role="tablist">
                  <div className="row">
                      <div className="col-md-4 col-12 p-0">
                        <button class="nav-link active" id="nav-breakfast-tab" data-bs-toggle="tab" data-bs-target="#nav-breakfast" type="button" role="tab" aria-controls="nav-breakfast" aria-selected="true">
                          <div className="row">
                            <div className="col-4 align-content-center">
                              <div className="buttonIcn">
                                <i class='bx bx-bowl-hot'></i>
                              </div>
                            </div>
                            <div className="col-8">
                              <div className="foodName">
                                <span>Popular</span>
                                <p>BreakFast</p>
                              </div>
                            </div>
                          </div>
                      </button> 
                      </div>
                      <div className="col-md-4 col-12 p-0">
                          <button class="nav-link" id="nav-lunch-tab" data-bs-toggle="tab" data-bs-target="#nav-lunch" type="button" role="tab" aria-controls="nav-lunch" aria-selected="true">
                          <div className="row">
                            <div className="col-4 align-content-center">
                              <div className="buttonIcn">
                                <i class='bx bxs-bowl-rice' ></i>
                              </div>
                            </div>
                            <div className="col-8">
                              <div className="foodName">
                                <span>Special</span>
                                <p>Lunch</p>
                              </div>
                            </div>
                          </div>
                          </button> 
                      </div>
                      <div className="col-md-4 col-12 p-0">
                          <button class="nav-link" id="nav-dinner-tab" data-bs-toggle="tab" data-bs-target="#nav-dinner" type="button" role="tab" aria-controls="nav-dinner" aria-selected="true">
                          <div className="row">
                            <div className="col-4 align-content-center">
                              <div className="buttonIcn">
                                <i class='bx bx-restaurant' ></i>
                              </div>
                            </div>
                            <div className="col-8">
                              <div className="foodName">
                                <span>Lovely</span>
                                <p>Dinner</p>
                              </div>
                            </div>
                          </div>
                          </button> 
                      </div>
                  </div>
              </div>
            </nav>
            <div class="container tab-content mt-5 mb-5" id="nav-tabContent">
              <div class="tab-pane fade show active" id="nav-breakfast" role="tabpanel" aria-labelledby="nav-breakfast-tab" tabindex="0">
                <BreakFast />
              </div>
              <div class="tab-pane fade show" id="nav-lunch" role="tabpanel" aria-labelledby="nav-lunch-tab" tabindex="0">
                <Lunch />
              </div>
              <div class="tab-pane fade show" id="nav-dinner" role="tabpanel" aria-labelledby="nav-dinner-tab" tabindex="0">
                <Dinner />
              </div>
            </div> 
        </div>
    </>
  )
}
