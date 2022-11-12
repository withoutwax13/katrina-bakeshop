import { Card, CardContent, CardMedia, Grid, CardActions, Button, Typography, Modal, Box } from '@mui/material';
import MobileDevices from "./MobileDevices"
import TabletDevices from "./TabletDevices"
import BigScreenDevices from "./BigScreenDevices"
import BiggerScreenDevices from "./BiggerScreenDevices"
import { useState } from "react"
import VARS from "../Utility/VARS"

const BreadPastriesTab = (props) => {
    const [selectedOption, setSelectedOption] = useState("with_6")
    const [show, setShow] = useState(false);
    const [activeObj, setActiveObj] = useState(null)
    const [counterValue, setCounterValue] = useState(0)
    const [stockLimit, setStockLimit] = useState(100)
    const handleDecrement = () => setCounterValue(counterValue > 0 ? counterValue-1 : 0)
    const handleIncrement = () => setCounterValue(counterValue === stockLimit ? counterValue : counterValue+1)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const onValueChange = (e) => {
        setSelectedOption(e.target.value)
    }
    const store = VARS.store

    return (
        <>
        <Grid container spacing={2}>
                {store.filter(product=>product.type === "bread&pastries").map((product, productID)=>{
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
                                        <strong>{`${product.defaultCurrency} ${product.price.with_bundle.box_with_6} - Box of 6`}</strong>
                                    </Typography>
                                    <Typography>
                                        <strong>{`${product.defaultCurrency} ${product.price.with_bundle.box_with_12} - Box of 12`}</strong>
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button 
                                        size="small" 
                                        data-bs-toggle="modal" data-bs-target="#staticBackdrop2"
                                        onClick={()=>{
                                            handleShow()
                                            setActiveObj(product)}}>
                                                ADD TO CART
                                    </Button>
                                    <div className="modal fade" id="staticBackdrop2" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdrop2Label" aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5" id="staticBackdrop2Label">{activeObj ? activeObj.name : ""}</h1>
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
                                                            <div className='row form-check'>
                                                                <input
                                                                    className="form-check-input"
                                                                    type="radio"
                                                                    value="box_with_6"
                                                                    checked={selectedOption === "box_with_6"}
                                                                    onChange={onValueChange}
                                                                    id="flexRadioDefault1"
                                                                />
                                                                <label for="flexRadioDefault1" className="form-check-label">{activeObj ? activeObj.defaultCurrency : ""} {activeObj ? activeObj.price.with_bundle.box_with_6 + " for BOX-OF-6" : ""}</label>
                                                            </div>
                                                            <div className='row form-check'>
                                                                <input
                                                                        className="form-check-input"
                                                                        type="radio"
                                                                        value="box_with_12"
                                                                        checked={selectedOption === "box_with_12"}
                                                                        onChange={onValueChange}
                                                                        id="flexRadioDefault2"
                                                                    />
                                                                <label for="flexRadioDefault2" className="form-check-label">{activeObj ? activeObj.defaultCurrency : ""} {activeObj ? activeObj.price.with_bundle.box_with_12 + " for BOX-OF-12" : ""}</label>
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
                                                props.addToCart({data: activeObj, count: counterValue, selectedPrice: selectedOption})
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

export default BreadPastriesTab