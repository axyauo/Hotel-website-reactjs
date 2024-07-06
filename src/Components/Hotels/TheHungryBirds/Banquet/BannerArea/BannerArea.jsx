import React from 'react'
import './BannerArea.css'
import img1 from '../../ImagesHungryBirds/img1.jpg'
import indoor from '../../ImagesHungryBirds/indoor.svg'
import outdoor from '../../ImagesHungryBirds/outdoor.svg'
import BanquetNavTabs from './BanquetNavTabs/BanquetNavTabs'


export default function BannerArea() {
  return (
    <>
        <section className='Banquet_Banner mt-5 pb-5 '>
            <div className="position-relative">
                <div className="banquetImage">
                    <img src={img1} alt="" />
                </div>
                <div className="infoHB border_shadow">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-9 col-12">
                                <h3>The Hungry Birds Banquet Hall</h3>
                                <p><i class='bx bx-current-location'></i> Near Namkum Railway Station, Purulia Road, Ranchi-83401</p>
                            </div>
                            <div className="col-md-3 col-12">
                                <div className='ratingBox'><i class='bx bxs-star'></i> 5.0</div>
                                <p className='text-center'>24 reviews</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="areaAvailable border_shadow">
            <div className="areasBanquet">
                <h3>Areas Available (2)</h3>
                <hr />
                <div className="row">
                    <div className="col-6">
                        <div className="row">
                            <div className="col-3">
                                <img src={indoor} alt="" />
                                <div className="mt-2">Indoor</div>
                            </div>
                            <div className="col-9">
                                <div className="indoor/outdoor">
                                    <p>600 Seating | 800 Floating</p>
                                    <span>Banquet Hall</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className="col-3">
                                <img src={outdoor} alt="" />
                                <div className="mt-2">Outdoor</div>
                            </div>
                            <div className="col-9">
                                <div className="indoor/outdoor">
                                    <p>1000 Seating | 1200 Floating</p>
                                    <span>Lawn</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="Nav1Tabs">
           <BanquetNavTabs /> 
        </section>
    </>
  )
}
