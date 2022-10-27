import React, { Component } from 'react';

class Staff extends Component{
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
            <div className='container d-flex align-items-center justify-content-center' style={{height: `${this.getScreenHeight()}px`}}>
                <div className="container">
                    <div className="row">
                    <div className="col-lg-12">
                        <h1 className="text-center pt-3 pb-3">Our Staff</h1>
                        <div className='row'>
                            <div className='col-1'></div>
                            <div className='col-10 px-5 py-4' style={{backgroundColor: 'white', boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px'}}>
                                <p className='text-center'>Our bakeshop staffs are friendly, hospitable and very well trained for their own specific tasks. We can asure you that our products are professionally and freshly made with the use of high quality ingredients. We are happy to serve you.</p>
                                <div className="container" style={{backgroundColor: 'hsl(0, 0%, 83%, 0.2)'}}>
                                    <div className="row">
                                    <div className="col-lg-6">
                                    <img src={require("../assets/images/bakerystaff.jpg")} style={{width: '100%'}} alt="1"/>
                                    </div>
                                    <div className="col-lg-6">
                                        <img src={require("../assets/images/bakerystaff2.jpeg")} style={{width: '100%'}} alt="2"/>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-1'></div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Staff