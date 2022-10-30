import {
  Routes,
  Route,
} from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './Styles/app.css'

import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Order from './Pages/Order'
import Payment from './Pages/Payment'
import Cart from "./Pages/Cart";
import Header from './Components/Header';
import Footer from "./Components/Footer";
import { useState } from "react";
import Confirmation from "./Pages/Confirmation";

function App() {
 
  return (
    <>
      <Header />
      <Routes>
        <Route path="katrina-bakeshop" element={<Home/>}/>
        <Route path="katrina-bakeshop/contact" element={<Contact/>}/>
        <Route path="katrina-bakeshop/order" element={<Order/>}/>
        <Route path="katrina-bakeshop/order/payment" element={<Payment/>}/>
        <Route path="katrina-bakeshop/cart" element={<Cart/>}/>
        <Route path="katrina-bakeshop/confirmation" element={<Confirmation/>}/>
      </Routes>
      <Footer/>
      
    </>
  );
}

export default App;
