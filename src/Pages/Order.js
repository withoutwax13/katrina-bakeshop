import React, { Component } from 'react';
import ProductTabs from '../Components/ProductTabs';

class Order extends Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        document.title = "Order | Katrina's Bakeshop"
    }
    render(){
        return(
            <div className='py-5 container' style={{marginTop: '64px', marginBottom: '64px'}}>
                <h2>Try our best selling cakes and pastries!</h2>
                <ProductTabs id="#products" {...this.props}/>
                <div id='#cart'></div>
            </div>
        )
    }
}

export default Order