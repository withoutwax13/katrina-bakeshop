import React from 'react';
import '../Styles/confirmation.css'

const Confirmation = () => {
    const getScreenHeight = () => {
        var win = window,
            doc = document,
            docElem = doc.documentElement,
            body = doc.getElementsByTagName('body')[0]
        var height = win.innerHeight|| docElem.clientHeight|| body.clientHeight
        return height > 1080 ? 1080 : height
    }
    return (
        <div className='container my-5'>
            <div className="container my-5" style={{height: `${getScreenHeight()}px`}}>
                <div className="row">
                    <div className="col-lg-2 pt-2 col-0"></div>
                    <div className="col-lg-8 col-12">
                    <div className="flip-card my-4">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                            <div>
                                <h1 style={{paddingTop: '120px', backgroundImage: `url('${require("../assets/images/background.jpg")}')`, width: '100%', fontFamily: 'Sun Valley, san-serif'}}>
                                Katrina's Bakeshop
                                </h1>
                                <p>ⓒ 2022 katrinasbakeshop.com. All rights reserved.</p>
                            </div>
                            </div>
                            <div className="flip-card-back ">
                            <h1><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Eo_circle_green_checkmark.svg/2048px-Eo_circle_green_checkmark.svg.png" style={{width: '50px'}}/>Order Complete!</h1> 
                            <p className="fs-1">Your order is being processed.</p> 
                            <p className="fs-1">We love to see you again.</p>
                            <p className="fs-1">Thank you!</p>
                            </div>
                        </div>
                    </div>
                    </div> 
                    <div className="col-lg-2 pt-2 col-0"></div>
                </div>
            </div>
        </div>
    )
}

export default Confirmation