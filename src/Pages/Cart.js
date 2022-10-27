import { useEffect, useState } from "react"
import VARS from "../Utility/VARS";

const Cart = (props) => {
        var [cart, changeCart] = useState([])
        useEffect(()=>{
            fetch(`${VARS.api_url}api/cart`)
                .then((response) => response.json())
                .then((data) => changeCart(data)).catch(e=>console.log(e))
        })
        console.log(cart)
        const populate = () => {
            if(cart.length !== 0){
                cart.map((item, itemID)=>{
                    return (
                        <div className="row" key={itemID}>
                            <div className="col-4 mx-1">
                                <h5>{item.data.name}</h5>
                            </div>
                            <div className="col-2"><h5>{item.data.price.no_bundle ? item.data.price.no_bundle : item.data.price.with_bundle[item.selectedPrice]}</h5></div>
                            <div className="col-3"><h5>{item.count}</h5></div>
                            <div className="col-3"></div>
                        </div>
                    )
                })
            }
        }
        return(
            <section className="h-100 gradient-custom">
                <div className="container py-5">
                    <div className="row d-flex justify-content-center my-4">
                    <div className="col-md-8">
                        <div className="card mb-4">
                        <div className="card-header py-3">
                            <h5 className="mb-0 text-center fs-1">My Cart</h5>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-4 mx-1">
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
                        <div className="card-body">
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
                            <h5 className="mb-0">Summary</h5>
                        </div>
                        <div className="card-body">
                            <ul className="list-group list-group-flush">
                            <li
                                className="list-group-item d-flex justify-content-between align-items-left border-0 px-0 mb-3">
                                <div className="cart-total">
                                <strong className="cart-total-title">Total</strong>
                                <span className="cart-total-price" style={{marginLeft: '210px'}}>0</span>
                                </div>
                            </li>
                            </ul>
                            <button className="btn shop-item-button float-end btn-purchase" style={{backgroundColor: 'hsl(210, 14%, 53%, 0.5)', marginRight: '20px'}}  type="submit"><a href={`${VARS.app_url}payment`} style={{color: 'black', textDecoration: 'none'}}>Proceed to Payment</a></button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
        )
}

export default Cart