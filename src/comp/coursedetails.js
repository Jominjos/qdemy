import React from "react";
import { useEffect, useState } from 'react';
import Card from "./card";


function Coursedetail({cart={},setcart={}}){


    const [course,setcourse]=useState([]);
    //const [cart,setcart]=useState([]);
console.log(course);
    function addToCart(data) {
        console.log(data.details);
        let data1 =data.details;
        let cartCopy=[...cart]
        cartCopy.push(data1)
        setcart(cartCopy)
        
     
       
  
        
    }
    function remFromCart(data){
        console.log(data.details);
        let cartCopy=[...cart]
        let idToRemove = data.details.courseId;
        
         cartCopy = cartCopy.filter((item) => item.courseId !== idToRemove );
        setcart(cartCopy)
    }
   
  

    
useEffect(()=>{
  fetch("courses.json")
  .then((response)=>response.json())
  .then((data)=>setcourse(data.courseDetails))
},[])

function butdisfunc(data) {
    //console.log(data)
    let disb=false
   cart.map((c)=>{
    if((c.courseId) === data) disb= true
    
    
   })
   return disb
 
    
    
}

function remdisabled(data) {
    let remdisb= true
    cart.map((c)=>{
        if((c.courseId) === data) remdisb= false
        
        
       })
       return remdisb
     
    
}


console.log(cart);
return(
    <>





    
{
    course &&
    course.length > 0 &&
course.map((data)=>(
    
    
<Card details={data} 
    key={data.courseId} 
    addToCart={addToCart}
    remFromCart={remFromCart}
    butdisabled={
            butdisfunc(data.courseId)
   
     }
     remdisabled={remdisabled(data.courseId)}
     />
     

))
    
            

}
      
 
        
</> 


);
 
    

}

export default Coursedetail;