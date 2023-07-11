import { Route ,BrowserRouter as Router ,Routes} from 'react-router-dom';

import   Home from "../pages/home";
import Cart from '../pages/cart';
import Nopage from '../pages/nopage';
import { useState } from 'react';
 export default function MyContainer (){
    const [cart,setcart]=useState([]);

    return(
        
        <Routes>


        {/* <Route index  element={<Home cart={cart} setcart={setcart}/>}></Route> */}
        
        <Route path="/cart" element={<Cart cart={cart} setcart={setcart}/>}></Route>
        <Route   path='/' element={<Home cart={cart} setcart={setcart}/>}></Route>
        <Route path="*" element={<Nopage/>}></Route>
         
        </Routes>


        

    )
}

