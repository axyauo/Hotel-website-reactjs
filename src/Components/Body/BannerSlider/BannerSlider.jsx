import React from 'react'
import sliderimg1 from '../Images/sliderimg1.jpg'
import sliderimg2 from '../Images/sliderimg2.webp'
import sliderimg3 from '../Images/sliderimg3.avif'
import './BannerSlider.css'

export default function BannerSlider() {
  return (
    <div id="carouselExampleCaptions" class="carousel slide">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
            <img src={sliderimg1} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block  left-slide">
                <h5>Live the Experience</h5>
                <p>Allow Yourself to Unwind and Relax in the Comfortable Ambiance</p>
            </div>
            </div>
            <div class="carousel-item">
            <img src={sliderimg2} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block  right-slide">
                <h5>Experience Pure Bliss</h5>
                <p>Immerse Yourself in Genuine Care and Attention</p>
            </div>
            </div>
            <div class="carousel-item">
            <img src={sliderimg3} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block left-slide">
                <h5>Where Comfort Meets Convenience</h5>
                <p>Our Passion for Hospitality Ensures Your Stay is Truly Memorable</p>
            </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
        </div>
  )
}
