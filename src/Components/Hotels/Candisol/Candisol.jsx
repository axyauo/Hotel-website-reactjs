import React from 'react';
import 'boxicons/css/boxicons.min.css';
import './Candisol.css'; 
import slide1 from '../../Body/Images/Slider1.webp';
import slide2 from '../../Body/Images/Slider2.webp';
import slide3 from '../../Body/Images/Slider3.webp';
import BookHotel from './Hotels/BookHotel/BookHotel';
import BookNowButton from './Hotels/BookNowButton/BookNowButton';
import aboutImg from './Hotel_Images/About-rb.avif';
import { FacilityBox } from './Hotels/FacilityBox/FacilityBox';
import ExclusiveRoom from './Hotels/ExclusiveRoom/ExclusiveRoom';
import ResturantArea from './Hotels/ResturantArea/ResturantArea';
import { Testimonial } from './Hotels/Testimonial/Testimonial';
import footerShape from '../../Body/Images/white-shape-bottom.png';
import NavsTabs from './Hotels/Tabs/NavsTabs';
import MapComponent from './Hotels/Map/MapComponent';


export default function Hotel01() {
  return (
    <>
      <section className="carouselBanner Banner_content">
        <div id="carouselExampleCaptions" className="carousel slide">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="carousel-overlay"></div>
              <img src={slide1} className="d-block w-100" alt="Slide 1" />
              <div className="carousel-caption d-md-block left-slide">
                <p>Discover Luxury and Comfort at Candisol!</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-overlay"></div>
              <img src={slide2} className="d-block w-100" alt="Slide 2" />
              <div className="carousel-caption d-md-block right-slide">
                <p>Experience Unmatched Hospitality at Candisol, Where Every Moment is Tailored to Perfection!</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-overlay"></div>
              <img src={slide3} className="d-block w-100" alt="Slide 3" />
              <div className="carousel-caption d-md-block left-slide">
                <p>Choose Candisol for Unforgettable Vacations and Seamless Corporate Gatherings!</p>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
      <section className="bookingHotel">
        <div className="container">
          <BookHotel /> 
        </div>
      </section>
      <section className="abouthotel mt-5 mb-5">
        <div className="container">
          <div className="section-title">
            <span>About</span>
            <h2>
              Candisol
            </h2>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="explore-content mr-30">

                <p className="all-content-justify">
                    At Candisol, We Redefine Hospitality: Explore Our Range of Exquisite Amenities and Impeccable Service for the Perfect Getaway or Productive Meeting!
                </p>

                <p className="all-content-justify">
                    Indulge in Unparalleled Luxury: Welcome to Candisol, Where Every Stay Transforms into a Memorable Experience!

                    Embark on a journey of unparalleled luxury, where every moment is meticulously crafted to elevate your experience, as Candisol invites you to immerse yourself in a world of exquisite amenities, impeccable service, and unparalleled hospitality, whether you seek the perfect getaway or a productive meeting venue.
                    Step Into a Realm of Refined Elegance: Candisol Invites You to Experience the Pinnacle of Hospitality, Where Impeccable Service, Stylish Accommodations, and Exceptional Dining Options Await, Providing the Perfect Setting for Your Dream Vacation or Corporate Gathering.
                </p>

                <BookNowButton ButtonName="Read More" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="explore-img explore-img-two">
                <img src={aboutImg} alt="Image" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='Navs&Tabs'>
        <NavsTabs />
      </section>
      <section class="facilities-area mt-5 mb-5">
        <div class="container">
          <div class="section-title">
            <span>Facilities</span>
            <h2>Giving Entirely Awesome</h2>
          </div>
          <div class="row">
            <FacilityBox />
          </div>
        </div>
      </section>
      <section class="exclusive-area exclusive-area-two pt-3 pb-3">
        <div class="container">
          <div class="section-title">
            <span>Rooms</span>
            <h2>You can get an exclusive Rooms</h2>
          </div>
          <div class="row">
            <ExclusiveRoom />
          </div>
        </div>
      </section>
      <section class="restaurants-area_ pb-3">
          <div class="container-fluid px-0">
              <div class="section-title">
                  <h2>The Area We Cover Under<br /> Archie Regency</h2>
              </div>
              <div class="row">
                <ResturantArea />
              </div>
          </div>
      </section>
      <section class="testimonials-area pb-3 mt-5 mb-5">
        <div class="container">
            <div class="section-title">
                <span>Testimonials</span>
                <h2>What customers say</h2>
            </div>
            <div class="testimonials-wrap">
               <Testimonial />
            </div>
        </div>
      </section>

      <MapComponent Address="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3663.0119076131264!2d85.31945437989332!3d23.351583149701327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e1a58210e9ff%3A0xdcde4c351e08e8b0!2sRadisson%20Blu%20Hotel%20Ranchi!5e0!3m2!1sen!2sin!4v1715066831867!5m2!1sen!2sin" />

      <footer class="footer-top-area footer-top-area-two pt-3">
        <div class="container">
          <div class="footer-middle-area">
            <div class="row">
              <div class="col-lg-4 col-md-6">
                <div class="single-widget">
                  <h3>About Us</h3>
                  <p align="justify">Our room’s services are open 24 hours to satisfy the late night cravings of our guest. Our whole property is fully air-conditioned within which we have 2 Banquet halls with best of the audio-visual facility to meet the conferencing needs of your guest.</p>
                  <ul class="social-icon">
                    <li>
                      <a href="https://www.facebook.com/" target="_blank">
                      <i class='bx bxl-facebook-circle'></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/" target="_blank">
                      <i class='bx bxl-instagram' ></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.youtube.com/" target="_blank">
                      <i class='bx bxl-youtube' ></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/" target="_blank">
                      <i class='bx bxl-linkedin-square' ></i>
                      </a>
                    </li>

                  </ul>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="single-widget">
                  <h3>Quick Links</h3>
                  <ul>
                    <li>
                      <a href="./index.php">
                        <i class="right-icon bx bx-chevrons-right"></i>
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="./about-us.php">
                        <i class="right-icon bx bx-chevrons-right"></i>
                        About Us
                      </a>
                    </li>
                    <li>
                      <a href="./rooms.php">
                        <i class="right-icon bx bx-chevrons-right"></i>
                        Rooms
                      </a>
                    </li>
                    <li>
                      <a href="./royal-banquet-hall.php">
                        <i class="right-icon bx bx-chevrons-right"></i>
                        Royal Banquet Hall
                      </a>
                    </li>
                    <li>
                      <a href="./arch-restaurant.php">
                        <i class="right-icon bx bx-chevrons-right"></i>
                        Arch Restaurant
                      </a>
                    </li>
                    <li>
                      <a href="./gallery.php">
                        <i class="right-icon bx bx-chevrons-right"></i>
                        Gallery
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-2 col-md-6">
                <div class="single-widget">
                  <h3>Useful Links</h3>
                  <ul>
                    <li>
                      <a href="./faq.php">
                        <i class="right-icon bx bx-chevrons-right"></i>
                        FAQ's
                      </a>
                    </li>
                    <li>
                      <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <i class="right-icon bx bx-chevrons-right"></i>
                        Booking
                      </a>
                    </li>
                    <li>
                      <a href="./contact-us.php">
                        <i class="right-icon bx bx-chevrons-right"></i>
                        Contact Us
                      </a>
                    </li>
                    <li>
                      <a href="./terms-and-conditions.php">
                        <i class="right-icon bx bx-chevrons-right"></i>
                        Terms & Conditions
                      </a>
                    </li>
                    <li>
                      <a href="./privacy-policy.php">
                        <i class="right-icon bx bx-chevrons-right"></i>
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a href="./refund-policy.php">
                        <i class="right-icon bx bx-chevrons-right"></i>
                        Refund Policy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="single-widget cont-wdgt">
                  <h3>Contact Us</h3>
                  <ul class="information">
                    <li class="address">
                    <i class='bx bx-current-location' ></i>
                      <span>Address</span>
                       Ranchi Railway Station Road ,  Ranchi-834001
                    </li>
                    <li class="address">
                    <i class='bx bx-phone' ></i>
                      <span>Phone</span>
                      <a href="tel: 000000000000">
                        91 9876543210
                      </a>
                    </li>
                    <li class="address">
                    <i class='bx bx-envelope' ></i>
                      <span>Email</span>
                      <a href="">
                        </a><a href="mailto:info@gmail.com">info@gmail.com</a>
                      
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="footer-bottom-area">
            <div class="row align-items-center">
              <div class="col-lg-6">
                <div class="copy-right">
                  <p>Copyright 2024 <a href="index.php" class="fw-bold">Hotel Archie Regency</a>. All Rights Reserved</p>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="designed">
                  <p>Designed By <a href="https://jharkhanditservices.com/" class="fw-bold" target="_blank">Jharkhand IT Services Software Private Limited</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-shape">
          <img src={footerShape} alt="Image" />
        </div>
      </footer>

    </>
  );
}
