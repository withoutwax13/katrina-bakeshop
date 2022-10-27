import React, { Component } from 'react';
import VARS from '../Utility/VARS';

class Footer extends Component{ 
    render(){
        return (
            <footer className="footer-distributed pt-5 pb-2 container-fluid" style={{marginTop: '40px', backgroundColor: 'white'}}>
                <div className="containter">
                    <div className="row">
                        <div className="col-lg-3 text-center">
                            <h3 style={{fontFamily: 'Sun Valley, san-serif'}}>KB LOGO</h3>
                        </div>
                        <div className="col-lg-3">
                            <h4>PAGES</h4>
                            <p><a href={`${VARS.app_url}`} style={{textDecoration: 'none', color: 'black'}}>Home</a></p> 
                            <p><a href={`${VARS.app_url}order`} style={{textDecoration: 'none', color: 'black'}}>Order</a></p>
                            <p><a href={`${VARS.app_url}cart`} style={{textDecoration: 'none', color: 'black'}}>Cart</a></p>
                            <p><a href={`${VARS.app_url}contact`} style={{textDecoration: 'none', color: 'black'}}>Contact</a></p>
                        </div>
                        <div className="col-lg-3">
                            <h4>CONTACT INFO</h4>
                            <img src={require("../assets/logos/location.png")} style={{width: '40px', height: '40px'}}/>
                            <p  className="pb-1">
                                Molino RD, Greenfield District <br/>
                                Bacoor City, Cavite
                            </p>
                            <img src={require("../assets/logos/telephone.png")} style={{width: '25px'}}/>
                            <p>
                            Contact Number<br/>
                            (212)456-7890<br/>
                            Globe 0916-7006035<br/>
                            Smart 0906-9028632</p>
                        </div>
                        <div className="col-lg-3 text-center">
                            <div style={{marginTop: '5px'}}>
                            <h4>ABOUT THE COMPANY</h4>
                            <p className="footer-company-about">
                            We are dedicated to serve you with our freshly baked Cakes, Breads and pastries.
                            </p>
                            <div className="footer-icons">
                            <h1 className="fs-5">Follow Our Socials</h1>
                                <a href="https://www.facebook.com/kriss.santos.5">
                                    <img src={require("../assets/logos/facebook-logo.png")} style={{width: '12%', marginRight: '7px'}}/>
                                </a>
                                <a href="https://twitter.com/">
                                    <img src={require("../assets/logos/twitter.png")} style={{width: '7%', marginRight: '13px'}}/>
                                </a>
                                <a href="https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2F%3F__coig_login%3D1">
                                    <img src={require("../assets/logos/IG.png")} style={{width: '7%'}}/>
                                </a>
                                <a href="https://www.youtube.com/">
                                    <img src={require("../assets/logos/yt.png")} style={{width: '15%'}}/>
                                </a>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container text-center'>
                    <p>ⓒ 2022 katrinasbakeshop.com. All rights reserved.</p>
                </div>
            </footer>
        )
    }
}

export default Footer