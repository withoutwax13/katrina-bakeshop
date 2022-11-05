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
      <Routes>
        <Route path="katrina-bakeshop" element={
          <>
            <Header/>
            <Home/>
            <Footer/>
          </>
        }/>
        <Route path="katrina-bakeshop/contact" element={
          <>
            <Header/>
            <Contact/>
            <Footer/>
          </>
        }/>
        <Route path="katrina-bakeshop/order" element={
          <>
            <Header/>
            <Order/>
            <Footer/>
          </>
        }/>
        <Route path="katrina-bakeshop/order/payment" element={<Payment/>}/>
        <Route path="katrina-bakeshop/cart" element={
          <>
            <Header/>
            <Cart/>
            <Footer/>
          </>
        }/>
        <Route path="katrina-bakeshop/confirmation" element={
          <>
            <Header/>
            <Confirmation/>
            <Footer/>
          </>
        }/>
      </Routes>
      
    </>
  );
}

export default App;
