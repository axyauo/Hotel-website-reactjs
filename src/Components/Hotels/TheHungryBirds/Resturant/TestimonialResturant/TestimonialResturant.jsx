import React from 'react';
import './TestimonialResturant.css';
import { TestimonialResturantData } from './TestimonialResturantData';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function TestimonialResturant() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };

    return (
        <div className="container mb-5">
            <div className="headings">
                <h5 className="section-title ff-secondary text-center text-color text-center">Testimonial</h5>
                <h1 className="mb-5 text-center">What Our Clients Say</h1>
            </div>
            <div className="testimonial_items">
                <Slider {...settings}>
                    {TestimonialResturantData.map((item, index) => (
                        <div className="testimonialItem" key={index}>
                            <i className='bx bxs-quote-left'></i>
                            <p>{item.comments}</p>
                            <div className="row">
                                <div className="col-2">
                                    <div className="testiImage">
                                        <img src={item.Image} alt="" />
                                    </div>
                                </div>
                                <div className="col-10">
                                    <div className="TetiName">
                                        <h4>{item.Name}</h4>
                                        <p>{item.Proffesion}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}
