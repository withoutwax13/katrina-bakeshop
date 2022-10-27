import React, { useState } from 'react';
import VARS from '../Utility/VARS';

import BiggerScreenDevices from './BiggerScreenDevices'
import BigScreenDevices from './BigScreenDevices'
import MobileDevices from './MobileDevices'
import TabletDevices from './TabletDevices'

const CakeTab = (props) => {

    const [show, setShow] = useState(false);
    const [activeObj, setActiveObj] = useState(null)
    const [counterValue, setCounterValue] = useState(0)
    const [stockLimit, setStockLimit] = useState(100)
    const handleDecrement = () => setCounterValue(counterValue > 0 ? counterValue-1 : 0)
    const handleIncrement = () => setCounterValue(counterValue === stockLimit ? counterValue : counterValue+1)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const store = VARS.store
    const forMobileScreen = () => {
        return (
            <div className="row row-cols-1">
                {store.filter(product=>product.type === "cake").map((product, productID)=>{
                    return (
                        <div key={productID}>
                                <div className="col text-center">
                                    <div className="card px-3 py-3">
                                    <div className="card-bg">
                                        <img className="img-fluid rounded-start" src={require(`../assets/images/${product.imageSource}`)} style={{height: '400px'}}/>
                                    </div>
                                    <div className="card-context text">
                                        <div className="dark-bg"></div>
                                        <h2><span>{product.name}</span></h2>
                                        <p>{product.productDescription}</p>
                                    </div>
                                    <p style={{fontSize: '25px'}}>{`${product.defaultCurrency} ${product.price.no_bundle}`}</p>
                                    <button
                                    style={{backgroundColor: 'lightslategray'}}
                                    type="button"
                                    className="btn btn-primary"
                                    data-bs-toggle="modal" data-bs-target="#staticBackdrop"
                                    onClick={()=>{
                                        handleShow()
                                        setActiveObj(product)
                                        }}>
                                    Add to Cart
                                    </button>
                                    </div>
                                    
                                    
                                </div>
                                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5" id="staticBackdropLabel">{activeObj ? activeObj.name : ""}</h1>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={()=>setCounterValue(0)}></button>
                                        </div>
                                        <div className="modal-body">
                                            <div className='container'>
                                                <div className='row'>
                                                    <div className='col-5'>
                                                        {activeObj ? <img className='img-fluid rounded-start' src={require(`../assets/images/${activeObj.imageSource}`)} style={{height: '200px'}}/> : ""}
                                                    </div>
                                                    <div className='col-7'>
                                                        <div className='container'>
                                                            
                                                            <div className='row'>
                                                                <h3 className='my-4'>{activeObj ? activeObj.defaultCurrency : ""} {activeObj ? activeObj.price.no_bundle : ""}</h3>
                                                            </div>
                                                            <div className='row'>
                                                                <div className='col-4 mt-5'>
                                                                    <h5>Quantity: </h5>
                                                                </div>
                                                                <div className="input-group">
                                                                    <span className="input-group-btn">
                                                                        <button type="button" className="btn btn-default btn-number" data-type="minus" data-field="quant[1]" onClick={handleDecrement}>
                                                                            <h2 className="glyphicon glyphicon-minus">-</h2>
                                                                        </button>
                                                                    </span>
                                                                    <input type="text" name="quant[1]" className="form-control input-number" value={counterValue} min="1" max="10" onChange={(event)=>{
                                                                        var val = Number(event.target.value)
                                                                        if(val > stockLimit && val < 0){
                                                                            setCounterValue(0)
                                                                        }else{
                                                                            setCounterValue(val)
                                                                        }
                                                                    }}/>
                                                                    <span className="input-group-btn">
                                                                        <button type="button" className="btn btn-default btn-number" data-type="plus" data-field="quant[1]" onClick={handleIncrement}>
                                                                            <h2 className="glyphicon glyphicon-plus">+</h2>
                                                                        </button>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={()=>setCounterValue(0)}>Back</button>
                                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={()=>{
                                                props.addToCart({data: activeObj, count: counterValue})
                                                setCounterValue(0)
                                            }}>Add To Cart</button>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                                
                    )
                })}
            </div>
        )
    }
    const forTabletScreen = () => {
        return (
            <div className="row row-cols-2">
               {store.filter(product=>product.type === "cake").map((product, productID)=>{
                    return (
                        <div key={productID}>
                                <div className="col text-center">
                                    <div className="card px-3 py-3">
                                    <div className="card-bg">
                                        <img className="img-fluid rounded-start" src={require(`../assets/images/${product.imageSource}`)} style={{height: '400px'}}/>
                                    </div>
                                    <div className="card-context text">
                                        <div className="dark-bg"></div>
                                        <h2><span>{product.name}</span></h2>
                                        <p>{product.productDescription}</p>
                                    </div>
                                    <p style={{fontSize: '25px'}}>{`${product.defaultCurrency} ${product.price.no_bundle}`}</p>
                                    <button
                                    style={{backgroundColor: 'lightslategray'}}
                                    type="button"
                                    className="btn btn-primary"
                                    data-bs-toggle="modal" data-bs-target="#staticBackdrop"
                                    onClick={()=>{
                                        handleShow()
                                        setActiveObj(product)
                                        }}>
                                    Add to Cart
                                    </button>
                                    </div>
                                    
                                    
                                </div>
                                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5" id="staticBackdropLabel">{activeObj ? activeObj.name : ""}</h1>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={()=>setCounterValue(0)}></button>
                                        </div>
                                        <div className="modal-body">
                                            <div className='container'>
                                                <div className='row'>
                                                    <div className='col-5'>
                                                        {activeObj ? <img className='img-fluid rounded-start' src={require(`../assets/images/${activeObj.imageSource}`)} style={{height: '200px'}}/> : ""}
                                                    </div>
                                                    <div className='col-7'>
                                                        <div className='container'>
                                                            
                                                            <div className='row'>
                                                                <h3>{activeObj ? activeObj.defaultCurrency : ""} {activeObj ? activeObj.price.no_bundle : ""}</h3>
                                                            </div>
                                                            <div className='row'>
                                                                <div className='col-4'>
                                                                    <h5>Quantity: </h5>
                                                                </div>
                                                                <div className="input-group">
                                                                    <span className="input-group-btn">
                                                                        <button type="button" className="btn btn-default btn-number" data-type="minus" data-field="quant[1]" onClick={handleDecrement}>
                                                                            <h2 className="glyphicon glyphicon-minus">-</h2>
                                                                        </button>
                                                                    </span>
                                                                    <input type="text" name="quant[1]" className="form-control input-number" value={counterValue} min="1" max="10" onChange={(event)=>{
                                                                        var val = Number(event.target.value)
                                                                        if(val > stockLimit && val < 0){
                                                                            setCounterValue(0)
                                                                        }else{
                                                                            setCounterValue(val)
                                                                        }
                                                                    }}/>
                                                                    <span className="input-group-btn">
                                                                        <button type="button" className="btn btn-default btn-number" data-type="plus" data-field="quant[1]" onClick={handleIncrement}>
                                                                            <h2 className="glyphicon glyphicon-plus">+</h2>
                                                                        </button>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={()=>setCounterValue(0)}>Back</button>
                                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={()=>{
                                                props.addToCart({data: activeObj, count: counterValue})
                                                setCounterValue(0)
                                            }}>Add To Cart</button>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                                
                    )
                })}
            </div>
        )
    }
    const forBigScreen = () => {
        return (
            <div className="row row-cols-3">
                {store.filter(product=>product.type === "cake").map((product, productID)=>{
                    return (
                        <div key={productID}>
                                <div className="col text-center">
                                    <div className="card px-3 py-3">
                                    <div className="card-bg">
                                        <img className="img-fluid rounded-start" src={require(`../assets/images/${product.imageSource}`)} style={{height: '400px'}}/>
                                    </div>
                                    <div className="card-context text">
                                        <div className="dark-bg"></div>
                                        <h2><span>{product.name}</span></h2>
                                        <p>{product.productDescription}</p>
                                    </div>
                                    <p style={{fontSize: '25px'}}>{`${product.defaultCurrency} ${product.price.no_bundle}`}</p>
                                    <button
                                    style={{backgroundColor: 'lightslategray'}}
                                    type="button"
                                    className="btn btn-primary"
                                    data-bs-toggle="modal" data-bs-target="#staticBackdrop"
                                    onClick={()=>{
                                        handleShow()
                                        setActiveObj(product)
                                        }}>
                                    Add to Cart
                                    </button>
                                    </div>
                                    
                                    
                                </div>
                                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5" id="staticBackdropLabel">{activeObj ? activeObj.name : ""}</h1>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={()=>setCounterValue(0)}></button>
                                        </div>
                                        <div className="modal-body">
                                            <div className='container'>
                                                <div className='row'>
                                                    <div className='col-5'>
                                                        {activeObj ? <img className='img-fluid rounded-start' src={require(`../assets/images/${activeObj.imageSource}`)} style={{height: '200px'}}/> : ""}
                                                    </div>
                                                    <div className='col-7'>
                                                        <div className='container'>
                                                            
                                                            <div className='row'>
                                                                <h3>{activeObj ? activeObj.defaultCurrency : ""} {activeObj ? activeObj.price.no_bundle : ""}</h3>
                                                            </div>
                                                            <div className='row'>
                                                                <div className='col-4'>
                                                                    <h5>Quantity: </h5>
                                                                </div>
                                                                <div className="input-group">
                                                                    <span className="input-group-btn">
                                                                        <button type="button" className="btn btn-default btn-number" data-type="minus" data-field="quant[1]" onClick={handleDecrement}>
                                                                            <h2 className="glyphicon glyphicon-minus">-</h2>
                                                                        </button>
                                                                    </span>
                                                                    <input type="text" name="quant[1]" className="form-control input-number" value={counterValue} min="1" max="10" onChange={(event)=>{
                                                                        var val = Number(event.target.value)
                                                                        if(val > stockLimit && val < 0){
                                                                            setCounterValue(0)
                                                                        }else{
                                                                            setCounterValue(val)
                                                                        }
                                                                    }}/>
                                                                    <span className="input-group-btn">
                                                                        <button type="button" className="btn btn-default btn-number" data-type="plus" data-field="quant[1]" onClick={handleIncrement}>
                                                                            <h2 className="glyphicon glyphicon-plus">+</h2>
                                                                        </button>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={()=>setCounterValue(0)}>Back</button>
                                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={()=>{
                                                props.addToCart({data: activeObj, count: counterValue})
                                                setCounterValue(0)
                                            }}>Add To Cart</button>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                                
                    )
                })}
            </div>
        )
    }
    return (
        <>
            <BiggerScreenDevices>{forBigScreen()}</BiggerScreenDevices>
            <BigScreenDevices>{forBigScreen()}</BigScreenDevices>
            <TabletDevices>{forTabletScreen()}</TabletDevices>
            <MobileDevices>{forMobileScreen()}</MobileDevices>
        </>
        
    )
}

export default CakeTab