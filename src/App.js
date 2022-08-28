import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Pages/Home";
import Cart from "./Components/Pages/Cart"
import Navbar from "./Components/Pages/navbar";
import {CartProvider} from "react-use-cart"


const App=()=> {
  return (
    <React.Fragment>
    
     <Navbar/> 
      <CartProvider>
       <Home/>
      <Cart/>
       </CartProvider>
    
    </React.Fragment>
  );
}

export default App;
