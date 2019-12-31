import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import CreateCustomer from "./CreateCustomer";

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
        .then(res => this.setState({customers: res.data}))
        .catch(err => console.log(err));
}

handleDelete(item) {
    axios
          .delete(`http://localhost:8000/customer/${item.id}`)
          .then(res => this.componentDidMount())
  }

renderCustomers() {
    let customers = []
    customers = this.state.customers
    return customers.map(customer => (
        <div key={customer.id}>
            {this.props.bankId === customer.branch_id &&
                <li key={customers.id}>
                    {customer.customer_name}
                    <button
                        onClick={() => this.handleDelete(customer)}
                        className="btn btn-danger"
                    >
                        Delete{" "}
                    </button>
                </li>
            }
        </div>
    ))
}

toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  handleSubmit = () => {
    this.toggle();
    console.log('love heroku')
    console.log(`http://localhost:8000/branch/${this.props.bankId}/`)
      };

render() {
    return (
        <div>
            {this.renderCustomers()}
            <button onClick={this.toggle} className="">
                      New Customer
                    </button>
            {this.state.modal ? (
              <CreateCustomer
                bankId={this.props.bankId}
                activeItem={this.state.activeItem}
                toggle={this.toggle}
                onSave={this.handleSubmit}
              />
            ) : null}      
        </div>  
    )  
}
}
