import React, { Component } from 'react';

class BigScreenDevices extends Component{
    constructor(props){
        super(props)
    }
    getScreenWidth(){
        var win = window,
            doc = document,
            docElem = doc.documentElement,
            body = doc.getElementsByTagName('body')[0]
        return win.innerWidth|| docElem.clientWidth|| body.clientWidth
    }
    render(){
        if(this.getScreenWidth()<=1296 && this.getScreenWidth() >= 990){
            return <div>{this.props.children}</div>
        }
        return <></>
    }
}

export default BigScreenDevices