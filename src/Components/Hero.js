import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Hero extends Component{
    getScreenHeight(){
        var win = window,
            doc = document,
            docElem = doc.documentElement,
            body = doc.getElementsByTagName('body')[0]
        var height = win.innerHeight|| docElem.clientHeight|| body.clientHeight
        return height > 1080 ? 1080 : height
    }
    render(){
        return (
            <div id="carouselExample" className="carousel slide carousel text-center" data-bs-ride="carousel" data-bs-interval="8000" style={{backgroundImage: `url('${require('../assets/images/bread.jpg')}')`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed'}}>
                <div className="carousel-inner row text-center">
                    <div className="carousel-item active col-12">
                        <div className='container d-flex align-items-center justify-content-center' style={{height: `${this.getScreenHeight()}px`}}>
                            <div className='row'>
                                <div className='col-lg-3 col-md-3 col-sm-2 text-center'></div>
                                <div className='col-lg-6 col-md-6 col-sm-8 text-center py-3 px-4 text-center' style={{backgroundColor: '#CFCFC4', boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px'}}>
                                    <h1>Cavite's Best Bakeshop</h1>
                                    <p>
                                        We specialize in homemade cakes perfect for your special occasion. We also offer different bread and pastries that will surely satisfy your sweet cravings.
                                    </p>
                                    <Link className='py-2 px-4' style={{textDecoration: 'none', color: 'white', backgroundColor: 'black'}} to={`order`}>ORDER NOW</Link>
                                </div>
                                <div className='col-lg-3 col-md-3 col-sm-2'></div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className='container d-flex align-items-center justify-content-center' style={{height: `${this.getScreenHeight()}px`}}>
                            <div className='row'>
                                <div className='col-lg-3 col-md-3 col-sm-2'></div>
                                <div className='col-lg-6 col-md-6 col-sm-8 text-center py-3 px-4' style={{backgroundColor: '#CFCFC4', boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px'}}>
                                    <h1>Cavite's Cake Capital</h1>
                                    <p>
                                    According to the food historians, the ancient Egyptians were the first culture to show evidence of advanced baking skills. The Oxford English Dictionary traces the English word cake back to the 13th century. It is a derivation of 'kaka', an Old Norse word. Medieval European bakers often made fruitcakes and gingerbread.
                                    </p>
                                    <Link className='py-2 px-4' style={{textDecoration: 'none', color: 'white', backgroundColor: 'black'}} to={`order`}>ORDER NOW</Link>
                                </div>
                                <div className='col-lg-3 col-md-3 col-sm-2'></div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className='container d-flex align-items-center justify-content-center' style={{height: `${this.getScreenHeight()}px`}}>
                            <div className='row'>
                                <div className='col-lg-3 col-md-3 col-sm-2'></div>
                                <div className='col-lg-6 col-md-6 col-sm-8 text-center py-3 px-4' style={{backgroundColor: '#CFCFC4', boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px'}}>
                                    <h1>Superb Breads and Pastries</h1>
                                    <p>
                                    Originally made by the Egyptians, one of the earliest forms of pastry was made by combining flour and water into a paste which was then wrapped around meat to be baked. Pastries were later developed in the Middle East and would eventually be brought to Europe, gaining popularity in the medieval period.
                                    </p>
                                    <Link className='py-2 px-4' style={{textDecoration: 'none', color: 'white', backgroundColor: 'black'}} to={`order`}>ORDER NOW</Link>
                                </div>
                                <div className='col-lg-3 col-md-3 col-sm-2'></div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
        </div>
        )
    }
}

export default Hero