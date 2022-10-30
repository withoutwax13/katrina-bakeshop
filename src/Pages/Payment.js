import React, { Component } from 'react';
import VARS from '../Utility/VARS';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

class Payment extends Component{
    render(){
        return(
            <div className='container'>
                 <div className="container my-5" style={{backgroundColor: 'white'}}>
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="card-body p-md-5 text-black">
                                <div className="row">
                                <h1>Billing Address</h1>
                                    <div className="col-md-6 mb-4">
                                    <div className="form-outline">
                                        <label for="name" style={{color: 'black'}}>First Name:</label>
                                        <input type="text" className="form-control" id="name" placeholder="Ex. Kriss"/>
                                    </div>
                                    </div>
                                    <div className="col-md-6 mb-4">
                                    <div className="form-outline">
                                        <label for="name" style={{color: 'black'}}>Last Name:</label>
                                        <input type="text" className="form-control" id="name" placeholder="Ex. Santos"/>
                                    </div>
                                    </div>
                                </div>
                    
                                <div className="form-outline mb-4">
                                    <label for="name" style={{color: 'black'}}>Address:</label>
                                        <input type="address" className="form-control" id="address" placeholder="Ex. Block 1 Lot 30 Brgy. Sampaloc 2. Dasmarinas city, Cavite"/>
                                </div>
                                <div className="col-md-4">
                                <div className="form-outline mb-4">
                                    <label className="form-label" for="form3Example3">Zip:</label>
                                    <input type="text" id="form3Example3" className="form-control" placeholder="Ex. 4114" />
                                </div>
                                </div>
                    
                                <div className="form-outline mb-4">
                                    <label for="name" style={{color: "black"}}>Mobile Number:</label>
                                    <input type="number" className="form-control" id="number" placeholder="Ex. 0916-XXXX-XXX"/>
                                </div>
                                <div className="form-outline mb-4">
                                    <label for="name" style={{color: "black"}}>Email:</label>
                                    <input type="email" className="form-control" id="email" placeholder="Ex. kriss.santos@yahoo.com"/>
                                </div>
                                </div>
                            </div>
                            <div className="col-xl-6">
                            <div className="card-body p-md-5 text-black">
                                <div className="row">
                                <div className="col-md-6 mb-4">
                                    <div className="form-outline">
                                    <h1>Payment</h1>
                                    <br/>
                                    <h4>Bank Transfer</h4>
                                    <p>Bank: BDO Peso Account</p>
                                    <p>Account Name: katrinasbakeshop</p>
                                    <p>Account Number: 0019 0037 0881</p>
                                    </div>
                                </div>
                                <div className="form-outline mb-4">
                                    <h4>Credit Card Payment</h4>
                                    <label for="name" style={{color: 'black'}}>Accepted Cards:</label>
                                    <div className="icon-container">
                                    <img src={require("../assets/logos/american-express-logo.png")} width="40px"/>
                                    <img src={require("../assets/logos/paypal.png")} width="50px"/>
                                    <img src={require("../assets/logos/visa_logo.png")} width="30px"/>
                                    <img src={require("../assets/logos/mastercard.png")} width="30px"/>
                                    </div>
                                </div>
                                <div className="form-outline mb-4">
                                <label for="name" style={{color: 'black'}}>Cardholder Name:</label>
                                <input type="text" className="form-control" id="name" placeholder="Ex. Kriss D. Santos"/>
                                </div>
                                <div className="col-md-4">
                                <div className="form-outline mb-4">
                                <label className="form-label" for="form3Example3">Credit card Number:</label>
                                <input type="number" id="form3Example3" className="form-control" placeholder="Ex. 1111-222-3333" />
                                </div>
                                </div>
                                <div>
                                <label for="start">Expiration Date:</label>
                                <input type="date" min="2000-08-15" max="2030-08-26"/>
                                </div>
                                </div>
                                    <button type="submit" className="btn" style={{backgroundColor:'lightslategray', width: '100px', marginTop: '10px'}}>Send</button>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                        <div className="col-lg-4"></div>
                        <div className="col-lg-4">
                            <div className="bt-btn pt-5 pb-3">
                            <button type="submit" className="btn" style={{fontSize: 'xx-large', backgroundColor: 'hsl(210, 14%, 53%, 0.5)', border: 'none', width: '100%', textAlign: 'center'}}><Link to={`../katrina-bakeshop/confirmation`} style={{color: 'black', textDecoration: 'none'}}>CHECK OUT</Link></button>
                            </div>
                        </div>
                        </div>
                    </div>
            </div>
        )
    }
}

export default Payment