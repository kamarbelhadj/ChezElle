import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navBar";
import Home from "./pages/home";
import Collection from "./pages/collection";
import About from "./pages/about";
import Contact from "./pages/contact";
import Product from "./pages/product";
import Cart from "./pages/cart";
import Login from "./pages/login";
import PlaceOrder from "./pages/placeorder";
import Order from "./pages/Order";

import Fouter from "./components/Fouter";
import SearchBar from "./components/SearchBar";
const App = () => {
  return (
    <div className="px-4 sm:px-[7vw] lg:px-[9vw]">
      <NavBar/>
      <SearchBar/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/collection" element={<Collection />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/aroduct/:productId" element={<Product />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/place-order" element={<PlaceOrder />}></Route>
        <Route path="/orders" element={<Order />}></Route>

      </Routes>
      <Fouter/>
    </div>
  );
};

export default App;
