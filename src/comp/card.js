import React, { useState } from "react";
import './card.css'
import Star from "./star";

function Card({details={}, addToCart={},butdisabled={},remdisabled={},remFromCart={}}){

let rate =details.rating
 

    return(
      
        <div className="col mb-5 cards" id="card">
          <div className="card h-100">
            {/* Product image*/}
            <img
              
              className="img-fluid "
              src={details.courseimg}
              alt="..."
            />
            {/* Product details*/}
            <div className="card-body p-4 cardsbody">
              <div className="text-center">
                {/* Product name*/}
                <h5 className="fw-bolder">{details.courseName}</h5>
                {/* Product price*/}
                {  `₹ ${details.fees} `  }
                
                
                
                
               
              
                
               
              </div>
              
              <div id="star-con">
                
                 {
                  rate &&
                  rate.length > 0 &&
                  rate.map((data,i)=>(<Star key={i}/>))
                 }
               
                
               
                
              </div>
             
            
            </div>
            {/* Product actions*/}
            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
              <div className="text-center but-con">
                <button className="btn btn-outline-dark mt-auto" onClick={()=>addToCart({details})} 
                disabled={butdisabled}
                >
                  Add to Cart
                </button>
                <button className="btn btn-outline-dark mt-auto  " onClick={()=>remFromCart({details})}
                 disabled={remdisabled}>Remove</button>
              </div>
             
            </div>
          </div>
        </div>
    )
};
export default Card;