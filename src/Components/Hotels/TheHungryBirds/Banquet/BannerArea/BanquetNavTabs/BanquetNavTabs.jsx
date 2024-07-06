import React from 'react'
import './BanquetNavTabs.css'
import { ImagesDataNavTabs } from './ImagesDataNavTabs'
import { VideoDataNavTabs } from './VideoDataNavTabs'

export default function BanquetNavTabs() {
  return (
    <>
        <nav>
        <div class="nav nav-tabs" id="nav-tab" role="tablist">
            <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Portfolio</button>
            <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Videos</button>
            <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">About</button>
        </div>
        </nav>
        <div class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
                <div className="row">
                    {ImagesDataNavTabs.map((image, index) => (
                        <div className="col-lg-4 col-6 mt-3 mb-3" key={index}>
                            <a href={image.images} target="_blank" rel="noopener noreferrer">
                                <div className="portfolio_images">
                                    <img src={image.images} alt="" style={{ width: '100%', height: 'auto' }} />
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
            <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
                <div className="row">
                    {VideoDataNavTabs.map((video, index) => (
                        <div className="col-lg-6 col-12 mt-3 mb-3" key={index}>
                            <a href={video.video_link} target='_blank'>
                                <div className="portfolio_images">
                                    <img src={video.images} alt="" />
                                    <span className='video_icon'><i class='bx bxs-videos'></i></span>
                                </div>
                            </a>
                        </div>
                    ))}  
                </div>
            </div>
            <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">
                <div className="banquet_about mt-4 mb-4">
                    <h4>About The Hungry Birds Wedding Venues, at Ranchi</h4>
                    <hr />
                    <p>Nestled in the scenic heart of Ranchi, The Hungry Birds Wedding Venues offers a perfect blend of elegance and natural beauty, making it an ideal location for your dream wedding. With its lush green landscapes, beautifully manicured gardens, and stunning architectural details, this venue provides a picturesque backdrop for both intimate ceremonies and grand celebrations.</p>

                    <p>The Hungry Birds is renowned for its exceptional service and attention to detail, ensuring that every aspect of your special day is meticulously planned and executed. From the moment you step onto the property, you'll be captivated by the serene ambiance and the welcoming atmosphere. The versatile spaces can accommodate a variety of wedding styles and sizes, offering both indoor and outdoor options to suit your needs.</p>
                    <p>Choosing The Hungry Birds Wedding Venues in Ranchi means choosing a venue where your wedding dreams come to life, surrounded by natural beauty and supported by a team dedicated to making your day as special as you have always envisioned.</p>
                </div>
            </div>
        </div>
    </>
  )
}
