import React from 'react'
import './BreakFast.css'
import { BreakFastData } from './BreakFastData';

let BreakFast= ()=> {
  return (
    <>
      <div className="row">
        {BreakFastData.map((item, index)=>(
          <div className="col-md-6 col-12 pb-4" key={index}>
            <div className="meal">
              <div className="row">
                <div className="col-2">
                  <div className="foodImage">
                    <img src={item.image} alt="" />
                  </div>
                </div>
                <div className="col-10">
                  <div className="foodName">
                    <div className="foodName_price">
                      <h5>{item.foodName}</h5>
                      <h6>INR {item.price} /-</h6>
                    </div>
                    <hr />
                    <div className="foodName_price">
                      <div className="row">
                        <div className="col-lg-8 col-12">
                          <p className='pr-2'>{item.description} </p>
                        </div>
                        <div className="col-lg-4 col-12">
                          <button className="btn1 text-black">Order Now</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> 
          </div>
        ))}
      </div>
    </>
  )
}
export default BreakFast;
