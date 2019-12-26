import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';

export default class Customer extends Component{
    constructor(props) {
        super(props);
        this.state = {
            activeItem: {
                customer_name: "",
                customer_email: ""
            },
            customers: []
        }
    };
    
componentDidMount() {
    axios
        .get("http://localhost:8000/customer/")
        .then(res => this.setState({customers: res.data.results}))
        .catch(err => console.log(err));
}

render() {
    let customers = []
    customers = this.state.customers
    return customers.map(customer => (
        <div>
            {this.props.bankId === customer.branch_id &&
            <li key={customers.id}>
            {customer.customer_name}
        </li>}
            
        </div>
    ))
}
}
