//import {useState} from "react";
//import {BrowserRouter, Route, Router, Routes} from "react-router-dom";

//import Navbar from "./components/navbar";
//import Home from "./pages/home";
//import Cart from "./pages/cart";

//import "./App.css"
//function App() {
  //const [cart, setCart] = useState([]);
  //const addToCart = product => {
    //setCart([...cart, product]);
    //const clearCart= () => {
      //setCart([]);
      //alert("Thanks for the purchase")
    //};
    //return (
        //<Router>
          //<Navbar cartCount={cart.length}/>
          //<Routes>
            //<Route path="/" element={<Home addToCart={addToCart}/>}/>
            //<Route path="/cart" element={<Cart cart={cart} clearCart={clearCart}/>}/>
          //</Routes>
        //</Router>
    //)
  //};

//};
//export default App;

import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import Home from "./pages/home";
import Cart from "./pages/cart";

import "./App.css";

function App() {
    const [cart, setCart] = useState([]);

    // Add product to cart
    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    // Clear cart
    const clearCart = () => {
        setCart([]);
        alert("Thanks for the purchase");
    };

    return (
        <BrowserRouter>
            <Navbar cart={cart} />
            <Routes>
                <Route path="/" element={<Home addToCart={addToCart} />} />
                <Route path="/cart" element={<Cart cart={cart} clearCart={clearCart} />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
