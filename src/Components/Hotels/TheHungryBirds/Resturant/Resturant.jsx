import React from 'react'
import './Resturant.css'
import heroImg from './ResturantImage/hero.png'
import WeOffer from './WeOffer/WeOffer'
import About from './About/About'
import FoodMenu from './FoodMenu/FoodMenu'
import BookTable from './BookTable/BookTable'
import TestimonialResturant from './TestimonialResturant/TestimonialResturant'

export default function Resturant() {
  return (
    <>
        {/* banner section  */}
        
        <div class="bg-dark hero-header">
            <div class="container py-5">
                <div class="row align-items-center g-5">
                    <div class="col-lg-6 text-center text-lg-start">
                        <h1 class="display-3 text-white animated slideInLeft">Enjoy Our<br />Delicious Meal</h1>
                        <p class="text-white animated slideInLeft mb-4 pb-2">
                            Welcome to The Hungry Birds, where flavor takes flight! Nestled in the heart of Ranchi, our restaurant offers a delightful culinary journey inspired by global cuisines.
                        </p>
                        <button className='btn1 py-3 px-5 mt-2'>Book a Table</button>
                    </div>
                    <div class="col-lg-6 text-center text-lg-end overflow-hidden">
                        <img class="img-fluid" src={heroImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
        <section className='services_we_offer'>
           <WeOffer /> 
        </section>
        <section className='services_we_offer'>
           <About /> 
        </section>
        <section className='FoodMenu'>
            <FoodMenu />
        </section>
        <section className='BookTable'>
            <BookTable />
        </section>
        <section className='TestimonialResturant'>
            <TestimonialResturant />
        </section>
    </>
  )
}
