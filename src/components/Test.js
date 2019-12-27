import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';

export default class Test extends Component{
    
componentDidMount() {
    axios
        .get("http://localhost:8000/customer/")
        .then(res => console.log(res))
        .catch(err => console.log(err));
}

render() {
    return(
        <div>
        </div>
    )
}
}
