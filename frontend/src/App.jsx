import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navBar";


const App = () => {
  return (
    <div className="px-4 sm:px-[7vw] lg:px-[9vw]">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Collection" element={<Collection />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/Product/:productId" element={<Product />}></Route>
        <Route path="/Cart" element={<Cart />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Place-order" element={<PlaceOrder />}></Route>
        <Route path="/Orders" element={<Orders />}></Route>
      </Routes>
    </div>
  );
};

export default App;
