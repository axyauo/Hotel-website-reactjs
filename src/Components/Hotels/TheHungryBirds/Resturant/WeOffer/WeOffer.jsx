import React from 'react';
import './WeOffer.css';
import { WeOfferData } from './WeOfferData';

export default function WeOffer() {
  return (
    <>
      <div className="container">
          <div className="row">
            {WeOfferData.map((item, index)=> (
              <div className="col-lg-3 col-md-6 col-12" key={index}>
                <div className="Offer">
                  <i className={item.logo}></i>
                  <h4>{item.heading}</h4>
                  <p>{item.content.slice(0, 150)}...</p>
                </div>
              </div>
            ))}
          </div>
      </div>
    </>
  );
}
