import { Card, CardContent, CardMedia, Grid, CardActions, Button, Typography, Modal, Box } from '@mui/material';
import React, { useState } from 'react';
import VARS from '../Utility/VARS';

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
    
    return (
        <>
            <Grid container spacing={2}>
                {store.filter(product=>product.type === "cake").map((product, productID)=>{
                    return (
                        <Grid item key={productID} xs={12} sm={6} md={4}>
                            <Card style={{minHeight: '500px', height: '100%'}}>
                                <CardMedia component="img" sx={{ pt: '56.25%' }} image={require(`../assets/images/${product.imageSource}`)} alt={`cake product ID: ${productID}`}/>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {product.name}
                                    </Typography>
                                    <Typography>
                                        {product.productDescription}
                                    </Typography>
                                    <Typography>
                                        <strong>{`${product.defaultCurrency} ${product.price.no_bundle}`}</strong>
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button 
                                        size="small" 
                                        data-bs-toggle="modal" data-bs-target="#staticBackdrop"
                                        onClick={()=>{
                                            handleShow()
                                            setActiveObj(product)}}>
                                                ADD TO CART
                                    </Button>
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
                                </CardActions>
                            </Card>
                        </Grid>
                    )
                })}
            </Grid>
        </>
        
    )
}

export default CakeTab