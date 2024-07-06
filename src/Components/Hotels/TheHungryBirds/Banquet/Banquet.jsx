import React from 'react'
import './Banquet.css'
import BannerArea from './BannerArea/BannerArea'
import AboutBanquet from './AboutBanquet/AboutBanquet'
import InquryBanquet from './InquryBanquet/InquryBanquet'

export default function Banquet() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-12">
            <BannerArea />
          </div>
          <div className="col-lg-5 col-12">
            <InquryBanquet />
          </div>
        </div>
      </div>

      <section className="about_section">
        <AboutBanquet />
      </section>




    




    </>
  )
}
