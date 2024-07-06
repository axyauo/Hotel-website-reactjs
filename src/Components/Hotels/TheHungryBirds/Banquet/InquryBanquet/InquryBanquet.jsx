import React from 'react';
import './InquryBanquet.css';

export default function InquryBanquet() {
  return (
    <>
      <div className="container mt-5 mb-5">
        <div className="containerrrr mt-5">
          <div className="accordion" id="pricingInfoAccordion">
            <div className="card accordion-item">
              <div className="card-header accordion-header" id="headingOne">
                <h2 className="mb-0">
                  <button className="btn btn-link pricing_info" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Pricing Info
                  </button>
                </h2>
              </div>

              <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#pricingInfoAccordion">
                <div className="card-body">
                  <div className="price-item mb-3">
                    <div>
                      <div className="price">₹ 600</div>
                      <div className="taxes-info">(taxes extra)</div>
                    </div>
                    <div>Veg price</div>
                  </div>
                  <div className="price-item">
                    <div>
                      <div className="price">₹ 700</div>
                      <div className="taxes-info">(taxes extra)</div>
                    </div>
                    <div>Non Veg price</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-buttons">
            <h4 className='contact_us'>The Hungry Birds Banquet and Marriage Hall</h4>
          </div>

          <form className="form-container">
            {/* <h6>The Hungry Birds Banquet and Marriage Hall,</h6> */}
            <div className="form-group">
              <label htmlFor="fullName">Full name*</label>
              <input type="text" className="form-control" id="fullName" required />
            </div>
            <div className="form-group">
              <label htmlFor="emailAddress">Email address</label>
              <input type="email" className="form-control" id="emailAddress" />
            </div>
            <div className="form-group">
              <label htmlFor="functionDate">Function date*</label>
              <input type="date" className="form-control" id="functionDate" required />
            </div>
            <div className="form-group">
              <label htmlFor="noOfGuests">No of guests* (min 50)</label>
              <input type="number" className="form-control" id="noOfGuests" min="50" required />
            </div>
            <div className="form-group">
              <label htmlFor="noOfRooms">No of rooms</label>
              <input type="number" className="form-control" id="noOfRooms" />
            </div>
            <div className="row">
              <div className="col-6">
                <div className="form-group">
                  <label>Function Type</label><br />
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="functionType" id="preWedding" value="preWedding" />
                    <label className="form-check-label" htmlFor="preWedding">Pre-Wedding</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="functionType" id="wedding" value="wedding" />
                    <label className="form-check-label" htmlFor="wedding">Wedding</label>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label>Function Time</label><br />
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="functionTime" id="evening" value="evening" />
                    <label className="form-check-label" htmlFor="evening">Evening</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="functionTime" id="day" value="day" />
                    <label className="form-check-label" htmlFor="day">Day</label>
                  </div>
                </div>
              </div>
            </div>
            <button type="submit" className="contact_us">Check Availability & Prices</button>
          </form>
        </div>
      </div>

      <button className="btn btn-danger chat-button">Chat with us</button>
    </>
  );
}
