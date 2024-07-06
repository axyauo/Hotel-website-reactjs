import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import './Rooms.css';
import { Link } from 'react-router-dom';
import rooms1 from '../../../Hotel_Images/sup4.avif';
import rooms2 from '../../../Hotel_Images/sup2.avif';
import rooms22 from '../../../Hotel_Images/sup3.avif';
import rooms3 from '../../../Hotel_Images/sup4.avif';
import rooms33 from '../../../Hotel_Images/sup5.avif';

export default function Rooms() {
    const sliderRef = useRef(null);

  useEffect(() => {
    // Initialize slick slider when component mounts
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(0); 
    }
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 2000, 
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true, 
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="rooms-section">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 col-12 pb-5">
                <h4 className='roomsHeading'>Non AC Standard Room</h4>
                <div className="roomsintro">
                  <div className="roomtype">
                  <Slider ref={sliderRef} {...settings}>
                    <img src={rooms1} alt="" />
                    <img src={rooms2} alt="" />
                    <img src={rooms3} alt="" />
                    <img src={rooms22} alt="" />
                    <img src={rooms33} alt="" />
                  </Slider>
                  </div>
                  <h3>Non AC Standard Room</h3>
                  <div className="row">
                    <div className="col-4">
                      <div className="smallIntro">
                        <span><i class='bx bx-shape-square'></i> 120 Sq.ft</span>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="smallIntro">
                        <span><i class='bx bxs-city' ></i> City View</span>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="smallIntro">
                        <span><i class='bx bx-bed' ></i> Queen Bed</span>
                      </div>
                    </div>
                  </div>
                  <ul>
                    <li>Air Conditioning</li>
                    <li>Wi-Fi</li>
                    <li>Iron/Ironing Board</li>
                    <li>Room Service</li>
                    <li>Mineral Water</li>
                    <li>Bathroom</li>
                  </ul>
                <hr />
                <div className="row">
                  <div className="col-7">
                    <div className="">
                      <div className="roomsopttion">
                        <button>Recommended</button>
                        <h2>Room With Free Cancellation</h2>
                        <ul>
                          <li>Book with ₹0 Payment</li>
                          <li>No meals included</li>
                          <li>Free Cancellation till check-in</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-5 borderr">
                    <div className="bookNow">
                      <div className="roomsprice">
                        <p className='grayText'>Price Per Night <br /> <span>₹ 1,725</span></p>
                        <p className='gst'>+₹ 362 taxes & fees</p>
                      </div>
                      <Link to="/Login"><button>Book Now</button></Link>
                    </div>
                  </div>
                </div>
              </div>  
              </div>
              <div className="col-lg-4 col-md-6 col-12 pb-5">
                <h4 className='roomsHeading'>Superior Room</h4>
                <div className="roomsintro">
                  <div className="roomtype">
                  <Slider ref={sliderRef} {...settings}>
                    <img src={rooms2} alt="" />
                    <img src={rooms1} alt="" />
                    <img src={rooms3} alt="" />
                    <img src={rooms22} alt="" />
                    <img src={rooms33} alt="" />
                  </Slider>
                  </div>
                  <h3>Superior Room</h3>
                  <div className="row">
                    <div className="col-4">
                      <div className="smallIntro">
                        <span><i class='bx bx-shape-square'></i> 150 Sq.ft</span>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="smallIntro">
                        <span><i class='bx bxs-city' ></i> City View</span>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="smallIntro">
                        <span><i class='bx bx-bed' ></i> Queen Bed</span>
                      </div>
                    </div>
                  </div>
                  <ul>
                    <li>Air Conditioning</li>
                    <li>Wi-Fi</li>
                    <li>Work Desk</li>
                    <li>Room Service</li>
                    <li>Mineral Water</li>
                    <li>Bathroom</li>
                  </ul>
                <hr />
                <div className="row">
                  <div className="col-7">
                    <div className="">
                      <div className="roomsopttion">
                        <button>Recommended</button>
                        <h2>Room With Free Cancellation</h2>
                        <ul>
                          <li>Book with ₹0 Payment</li>
                          <li>No meals included</li>
                          <li>Free Cancellation till check-in</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-5 borderr">
                    <div className="bookNow">
                      <div className="roomsprice">
                        <p className='grayText'>Price Per Night <br /> <span>₹ 1,925</span></p>
                        <p className='gst'>+₹ 404 taxes & fees</p>
                      </div>
                      <Link to="/Login"><button>Book Now</button></Link>
                    </div>
                  </div>
                </div>
                </div>
                
              </div>
              <div className="col-lg-4 col-md-6 col-12 pb-5">
                <h4 className='roomsHeading'>Family Room</h4>
                <div className="roomsintro">
                  <div className="roomtype">
                  <Slider ref={sliderRef} {...settings}>
                    <img src={rooms3} alt="" />
                    <img src={rooms1} alt="" />
                    <img src={rooms2} alt="" />
                    <img src={rooms22} alt="" />
                    <img src={rooms33} alt="" />
                  </Slider>
                  </div>
                  <h3>Family Room</h3>
                  <div className="row">
                    <div className="col-4">
                      <div className="smallIntro">
                        <span><i class='bx bx-shape-square'></i> 144 Sq.ft</span>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="smallIntro">
                        <span><i class='bx bxs-city' ></i> City View</span>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="smallIntro">
                        <span><i class='bx bx-bed' ></i> Queen Bed</span>
                      </div>
                    </div>
                  </div>
                  <ul>
                    <li>Air Conditioning</li>
                    <li>Wi-Fi</li>
                    <li>Iron/Ironing Board</li>
                    <li>Room Service</li>
                    <li>Mineral Water</li>
                    <li>Bathroom</li>
                  </ul>
                <hr />
                <div className="row">
                  <div className="col-7">
                    <div className="">
                      <div className="roomsopttion">
                        <button>Recommended</button>
                        <h2>Room With Free Cancellation</h2>
                        <ul>
                          <li>Book with ₹0 Payment</li>
                          <li>No meals included</li>
                          <li>Free Cancellation till check-in</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-5 borderr">
                    <div className="bookNow">
                      <div className="roomsprice">
                        <p className='grayText'>Price Per Night <br /> <span>₹ 2,325</span></p>
                        <p className='gst'>+₹ 488 taxes & fees</p>
                      </div>
                      <Link to="/Login"><button>Book Now</button></Link>
                    </div>
                  </div>
                </div>
                </div>
                
              </div>
              
            </div>
          </div>
  )
}
