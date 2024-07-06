import React from 'react'
import './Footer.css';
import logo from '../Body/Images/logo.png'
import Button from '../Body/Button/Button';

let Footer=()=> {
  return (
    <footer>
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-6 col-12 mb-3">
                    <div className="footer_content">
                        <h3>About Us</h3>
                        <p>Lalpur, Ranchi <br /> Jharkhand-834001 </p>
                        <p>91 987 654 0123 <br /> info@gmail.com</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12 mb-3">
                    <div className="footer_content">
                        <h3>The Hotel</h3> 
                        <ul>
                        <li><a href="#">Rooms & Suits</a></li>
                        <li><a href="#">Experience</a></li>
                        <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12 mb-3">
                    <div className="footer_content">
                        <h3>Restaurant</h3>  
                        <ul>
                        <li><a href="#">Offer</a></li>
                        <li><a href="#">Job</a></li>
                        <li><a href="#">Seminar</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12 mb-3">
                    <div className="footer_content">
                        <h2>"Offer more than a Gift Voucher, Gift and Experience"</h2>
                        <Button ButtonName="Book Now" />
                    </div>
                </div>
            </div>
        </div>
        <div className="endfooter">
            <p>Copyright © 2024 Hotel.com ®</p>
        </div>
    </footer>
  )
}
export default Footer;