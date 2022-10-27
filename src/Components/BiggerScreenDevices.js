import React, { Component } from 'react';

class BiggerScreenDevices extends Component{
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
        if(this.getScreenWidth() >= 1296){
            return <div>{this.props.children}</div>
        }
        return <></>
    }
}

export default BiggerScreenDevices