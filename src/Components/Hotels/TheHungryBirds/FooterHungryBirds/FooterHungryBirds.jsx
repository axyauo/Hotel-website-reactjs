import React from 'react'
import './FooterHungryBirds.css'

export default function FooterHungryBirds() {
  return (
    <>
        <div class="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s" style={{visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeIn'}}>
            <div class="container pb-5">
                <div class="row g-5">
                    <div class="col-lg-3 col-md-6">
                        <h4 class="section-title ff-secondary text-start text-color fw-normal mb-4">The Hungry Birds</h4>
                        <a class="btn btn-link" href="">About Us</a>
                        <a class="btn btn-link" href="">Contact Us</a>
                        <a class="btn btn-link" href="">Reservation</a>
                        <a class="btn btn-link" href="">Privacy Policy</a>
                        <a class="btn btn-link" href="">Terms &amp; Condition</a>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <h4 class="section-title ff-secondary text-start text-color fw-normal mb-4">Contact</h4>
                        <p class="mb-2"><i class="fa fa-map-marker-alt me-3"></i>Near Namkum Railway Station, Purulia Road, Ranchi-834010</p>
                        <p class="mb-2"><i class="fa fa-phone-alt me-3"></i>+91 707-952-0046</p>
                        <p class="mb-2"><i class="fa fa-envelope me-3"></i>info@thehungrybirds.online
</p>
                        <div class="d-flex pt-2">
                            <a class="btn btn-outline-light btn-social" href=""><i class='bx bxl-twitter'></i></a>
                            <a class="btn btn-outline-light btn-social" href=""><i class='bx bxl-facebook'></i></a>
                            <a class="btn btn-outline-light btn-social" href=""><i class='bx bxl-youtube'></i></a>
                            <a class="btn btn-outline-light btn-social" href=""><i class='bx bxl-linkedin-square' ></i></a>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <h4 class="section-title ff-secondary text-start text-color fw-normal mb-4">Opening</h4>
                        <h5 class="text-light fw-normal">Monday - Saturday</h5>
                        <p>09AM - 09PM</p>
                        <h5 class="text-light fw-normal">Sunday</h5>
                        <p>10AM - 08PM</p>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <h4 class="section-title ff-secondary text-start text-color fw-normal mb-4">Newsletter</h4>
                        <p>The Hungry Birds is ideal for banquet events in Ranchi. It is aesthetically designed to hold Conferences, Seminars, Workshops, Training Programs, Product Launches, Weddings, Receptions and Get-togethers.
</p>
                        <div class="position-relative mx-auto" style={{maxWidth: '400px'}}>
                            <input class="form-control border-primary w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email"/>
                            <button type="button" class="btn1 text-black py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="copyright">
                    <div class="row">
                        <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            © <a class="border-bottom" href="#">The Hungry Birds</a>, All Right Reserved. 
							Designed & Developed By <a class="border-bottom" href="https://www.jharkhanditservices.com/" target='_blank'>Jharkhand IT Services</a>
                        </div>
                        <div class="col-md-6 text-center text-md-end">
                            <div class="footer-menu">
                                <a href="javascript:void">Home</a>
                                <a href="javascript:void">Cookies</a>
                                <a href="javascript:void">Help</a>
                                <a href="javascript:void">FQAs</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
