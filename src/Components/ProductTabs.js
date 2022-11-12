import * as React from 'react';
import Typography from '@mui/material/Typography';
// import Tab from 'react-bootstrap/Tab';
// import Tabs from 'react-bootstrap/Tabs'
import BreadPastriesTab from './BreadPastriesTab';
import CakeTab from './CakeTab';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Tab, Tabs, Box } from '@mui/material';

const ProductTabs = (props) => {
    var [cart, setCart] = useState([])
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const addToCart = (newItem) => {
        if(cart.filter(item=>item.data.id === newItem.data.id).length !== 0){
            let items = [...cart]
            let index = items.findIndex(v=>v.data.id === newItem.data.id)
            let item = {
                ...items[index],
                count: newItem.count + items[index]['count']
            }
            items[index] = item
            setCart(items)
        }else{
            setCart(prev=>[...prev, newItem])
        }
      }
    const removeToCart = (toRemove) => {
        setCart(prev=>{
          return prev.filter((item)=>item.data.id !== toRemove.id)
        })
    }
    const populate = () => {
        if(cart.length !== 0){
            return cart.map((item, itemID)=>{
                if(item.count !== 0){
                return (
                    <div className="row my-2 mx-1" key={itemID}>
                        <div className="col-4">
                            <h5>{item.data.name}</h5>
                        </div>
                        <div className="col-2"><h5>{item.data.price.no_bundle ? item.data.price.no_bundle : item.data.price.with_bundle[item.selectedPrice]}</h5></div>
                        <div className="col-3"><h5>{item.count}</h5></div>
                        <div className="col-3"><button className='btn btn-danger' onClick={()=>removeToCart(item.data)}>Remove</button></div>
                    </div>
                )
                }
            })
        }
    }
    const calculatePrice = () => {
        let total = 0
        if(cart.length !== 0)
        {
            cart.forEach((a)=>{
                let aTotal = a.data.price.no_bundle ? (a.data.price.no_bundle * a.count): (a.data.price.with_bundle[a.selectedPrice] * a.count)
                total += aTotal
            })
        }
        return total
    }

    function TabPanel(props) {
        const { children, value, index, ...other } = props;
      
        return (
          <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
          >
            {value === index && (
              <Box sx={{ p: 3 }}>
                <Typography>{children}</Typography>
              </Box>
            )}
          </div>
        );
      }
      
      function a11yProps(index) {
        return {
          id: `simple-tab-${index}`,
          'aria-controls': `simple-tabpanel-${index}`,
        };
      }
    return (
        <>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="product tabs">
                <Tab label="Cakes" {...a11yProps(0)} />
                <Tab label="Bread & Pastries" {...a11yProps(1)} />
            </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <CakeTab addToCart={addToCart}/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <BreadPastriesTab addToCart={addToCart}/>
            </TabPanel>
            
            <section className="h-100 gradient-custom" id='cart'>
                <div className="container py-5">
                    <div className="row d-flex justify-content-center my-4">
                    <div className="col-md-8">
                        <div className="card mb-4">
                        <div className="card-header py-3">
                            <h3 className="mb-0 text-center fs-1">My Cart</h3>
                        </div>
                        <div className="container">
                            <div className="row my-4 mx-2">
                                <div className="col-4">
                                    <h5>ITEM</h5>
                                </div>
                                <div className="col-2"><h5>PRICE</h5></div>
                                <div className="col-3"><h5>QUANTITY</h5></div>
                                <div className="col-3"></div>
                            </div>
                            {populate()}
                        </div>

                        </div>
                        <div className="card mb-4 mb-lg-0">
                        <div className="card-body text-center">
                            <p><strong>We accept</strong></p>
                            <img className="me-2" width="45px"
                            src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                            alt="Visa" />
                            <img className="me-2" width="45px"
                            src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                            alt="American Express" />
                            <img className="me-2" width="45px"
                            src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                            alt="Mastercard" />
                            <img className="me-2" width="70px"
                            src={require("../assets/logos/paypal.png")}
                            alt="PayPal acceptance mark" />
                        </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card mb-4">
                        <div className="card-header py-3">
                            <h2 className="mb-0">Summary</h2>
                        </div>
                        <div className="card-body">
                            <ul className="list-group list-group-flush">
                            <li
                                className="container list-group-item d-flex justify-content-between align-items-left border-0 px-0 mb-3">
                                <div className="cart-total row">
                                <div className='col-6'><strong className="cart-total-title">Total</strong></div>
                                <div className="cart-total-price col-6"><strong>PHP </strong>{calculatePrice()}</div>
                                </div>
                            </li>
                            </ul>
                            <button className="btn shop-item-button float-end btn-purchase" style={{backgroundColor: 'hsl(210, 14%, 53%, 0.5)', marginRight: '20px'}}  type="submit"><Link style={{color: 'black', textDecoration: 'none'}} to={`payment`} state={cart}>Confirm Payment</Link></button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
        </>
    )
}

export default ProductTabs