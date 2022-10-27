import React, { Component } from 'react';

class Customers extends Component{
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
        <div className='container text-center my-5 d-flex align-items-center justify-content-center' style={{height: `${this.getScreenHeight()}px`}}>
            <div className="row social-proof-component my-5 py-5">
                <div className="subheading row mt-2 mb-4 text-center">
                <h1 style={{color: 'black'}}>Our Customers</h1>
                </div>
                <div id="carouselExampleControls" className="carousel slide text-center carousel-dark" data-mdb-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active py-4" style={{backgroundColor: 'white', boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset'}}>
                    <img className="rounded-circle shadow-1-strong mb-4 soc-avatar"
                        src={require("../assets/images/ai-gen-image-1.jpg")} alt="avatar" style={{width: '150px'}}/>
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-8">
                        <h5 className="mb-3">Juan Dela Cruz</h5>
                        <p>CEO</p>
                        <p className="text-muted">
                            <i className="fas fa-quote-left pe-2"></i>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et deleniti
                            nesciunt sint eligendi reprehenderit reiciendis, quibusdam illo, beatae quia
                            fugit consequatur laudantium velit magnam error. Consectetur distinctio fugit
                            doloremque.
                        </p>
                        </div>
                    </div>
                    <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                        <li><i className="fas fa-star fa-sm"></i></li>
                        <li><i className="fas fa-star fa-sm"></i></li>
                        <li><i className="fas fa-star fa-sm"></i></li>
                        <li><i className="fas fa-star fa-sm"></i></li>
                        <li><i className="far fa-star fa-sm"></i></li>
                    </ul>
                    </div>
                    <div className="carousel-item py-4" style={{backgroundColor: 'white', boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset'}}>
                    <img className="rounded-circle shadow-1-strong mb-4 soc-avatar"
                        src={require("../assets/images/ai-gen-image-2.jpg")} alt="avatar" style={{width: '150px'}}/>
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-8">
                        <h5 className="mb-3">John Smith</h5>
                        <p>Fitness Coach</p>
                        <p className="text-muted">
                            <i className="fas fa-quote-left pe-2"></i>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et deleniti
                            nesciunt sint eligendi reprehenderit reiciendis, quibusdam illo, beatae quia
                            fugit consequatur laudantium velit magnam error. Consectetur distinctio fugit
                            doloremque.
                        </p>
                        </div>
                    </div>
                    <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                        <li><i className="fas fa-star fa-sm"></i></li>
                        <li><i className="fas fa-star fa-sm"></i></li>
                        <li><i className="fas fa-star fa-sm"></i></li>
                        <li><i className="fas fa-star fa-sm"></i></li>
                        <li><i className="far fa-star fa-sm"></i></li>
                    </ul>
                    </div>
                    <div className="carousel-item py-4" style={{backgroundColor: 'white', boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset'}}>
                    <img className="rounded-circle shadow-1-strong mb-4 soc-avatar"
                        src={require("../assets/images/ai-gen-image-3.jpg")} alt="avatar" style={{width: '150px'}} />
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-8">
                        <h5 className="mb-3">Shiela De Mesa</h5>
                        <p>Athlete</p>
                        <p className="text-muted">
                            <i className="fas fa-quote-left pe-2"></i>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et deleniti
                            nesciunt sint eligendi reprehenderit reiciendis, quibusdam illo, beatae quia
                            fugit consequatur laudantium velit magnam error. Consectetur distinctio fugit
                            doloremque.
                        </p>
                        </div>
                    </div>
                    <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                        <li><i className="fas fa-star fa-sm"></i></li>
                        <li><i className="fas fa-star fa-sm"></i></li>
                        <li><i className="fas fa-star fa-sm"></i></li>
                        <li><i className="fas fa-star fa-sm"></i></li>
                        <li><i className="far fa-star fa-sm"></i></li>
                    </ul>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div>
            </div>
        </div>
        )
    }
}

export default Customers