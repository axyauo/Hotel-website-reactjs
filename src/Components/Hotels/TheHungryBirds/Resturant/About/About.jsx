import React from 'react';
import './About.css';
import r1 from '../ResturantImage/r1.jpg'
import r2 from '../ResturantImage/r2.jpg'
import r3 from '../ResturantImage/r3.jpg'
import r4 from '../ResturantImage/r4.jpg'

export default function About() {
  return (
    <div className="container">
      <div className="row g-5 align-items-center">
        <div className="col-lg-6">
          <div className="row g-3">
            <div className="col-6 text-start">
              <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.1s" src={r1} style={{visibility: 'visible', animationDelay: '0.1s', animationName: 'zoomIn'}} alt="About 1" />
            </div>
            <div className="col-6 text-start">
              <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.3s" src={r2} style={{marginTop: '25%', visibility: 'visible', animationDelay: '0.3s', animationName: 'zoomIn'}} alt="About 2" />
            </div>
            <div className="col-6 text-end">
              <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.5s" src={r3} style={{visibility: 'visible', animationDelay: '0.5s', animationName: 'zoomIn'}} alt="About 3" />
            </div>
            <div className="col-6 text-end">
              <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.7s" src={r4} style={{visibility: 'visible', animationDelay: '0.7s', animationName: 'zoomIn'}} alt="About 4" />
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <h5 className="section-title ff-secondary text-start text-color fw-normal">About Us</h5>
          <h1 className="mb-4">Welcome to <i class='bx bx-restaurant text-color me-2'></i>The Hungry Birds</h1>
          <p className="mb-4">Welcome to The Hungry Birds, where flavors take flight and your cravings find a home. We are dedicated to providing you with a culinary experience that tantalizes your taste buds and leaves you craving more.</p>
          <p className="mb-4">At The Hungry Birds, we believe in the power of good food to bring people together. Whether you're looking for a quick bite or a leisurely meal with friends and family, our menu offers a variety of options to suit every palate.</p>
          <div className="row g-4 mb-4">
            <div className="col-sm-6">
              <div className="d-flex align-items-center border-start border-5 border-warning px-3">
                <h1 className="flex-shrink-0 display-5 text-color mb-0" data-toggle="counter-up">15</h1>
                <div className="ps-4">
                  <p className="mb-0">Years of</p>
                  <h6 className="text-uppercase mb-0">Experience</h6>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="d-flex align-items-center border-start border-5  border-warning px-3">
                <h1 className="flex-shrink-0 display-5 text-color mb-0" data-toggle="counter-up">50</h1>
                <div className="ps-4">
                  <p className="mb-0">Popular</p>
                  <h6 className="text-uppercase mb-0">Master Chefs</h6>
                </div>
              </div>
            </div>
          </div>
          <button className='btn1 py-3 px-5 mt-2 text-black'>Read More</button>
          {/* <a className="btn1 py-3 px-5 mt-2" href="/">Read More</a> */}
        </div>

      </div>
    </div>
  );
}
