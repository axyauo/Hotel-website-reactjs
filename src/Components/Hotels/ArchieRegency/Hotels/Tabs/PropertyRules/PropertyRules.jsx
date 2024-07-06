import React from 'react';
import './PropertyRules.css'

const PropertyRules = () => {
  return (
    <div className="htlRules">
      <h2 className="font22 latoBlack blackText appendBottom3">Property Rules</h2>
      <p className="font16 appendTop8">
        <span>Check-in:<span className="latoBlack appendRight5">1 PM</span></span>
        <span>Check-out:<span className="latoBlack appendLeft5">11 AM</span></span>
      </p>
      <div className="cplFriendly appendTop10">
        <span className="appendRight10">
          <img src="https://promos.makemytrip.com/Hotels_product/Details/Couplefriendly2x.png" alt="Couple, Bachelor Rules" width="49" height="48" />
        </span>
        <div className="cplFriendly__desc">
          <div className="makeFlex hrtlCenter">
            <span className="latoBlack font14 blackText">Couple, Bachelor Rules</span>
            <span className="cplFriendly__tag appendLeft10">Couple Friendly</span>
          </div>
          <p className="appendTop3">Unmarried couples/guests with Local IDs are allowed.</p>
        </div>
      </div>
      <div className="htlRules__list grid2">
        <div className="htlRules__list--Col1">
          <div className="htlRules__list--item">
            <span className="greyDot appendRight10"></span>
            <div className="font14 lineHight18">Guests below 18 years of age are not allowed at the property.</div>
          </div>
          <div className="htlRules__list--item">
            <span className="greyDot appendRight10"></span>
            <div className="font14 lineHight18">Passport, Aadhar, Driving License and Govt. ID are accepted as ID proof(s)</div>
          </div>
        </div>
        <div className="htlRules__list--Col2">
          <div className="htlRules__list--item">
            <span className="greyDot appendRight10"></span>
            <div className="font14 lineHight18">Pets are not allowed.</div>
          </div>
          <div className="htlRules__list--item">
            <span className="greyDot appendRight10"></span>
            <div className="font14 lineHight18">Smoking within the premises is not allowed</div>
          </div>
        </div>
      </div>
      <span className="htlRules__list--category">Guest Profile<span>&nbsp;(2)</span></span>
      <div className="htlRules__list grid2">
        <div className="htlRules__list--Col1">
          <div className="htlRules__list--item">
            <span className="greyDot appendRight10"></span>
            <div className="font14 lineHight18">Unmarried couples allowed</div>
          </div>
        </div>
        <div className="htlRules__list--Col2">
          <div className="htlRules__list--item">
            <span className="greyDot appendRight10"></span>
            <div className="font14 lineHight18">Guests below 18 years of age are not allowed at the property.</div>
          </div>
        </div>
      </div>
      <a className="htlRules__viewAllBtn inlineFlex capText">Read All Property Rules</a>
    </div>
  );
};

export default PropertyRules;
