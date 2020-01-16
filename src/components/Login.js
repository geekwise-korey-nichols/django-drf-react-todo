import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import {
    Button,
    Form,
    FormGroup,
    Input,
    Label
  } from 'reactstrap'


export default class Login extends Component{
    constructor(props) {
        super(props);
        this.state = {
            activeItem: {
                username: "",
                password: ""
            },
        }
    };


    handleChange = e => {
        let { name, value } = e.target;
        const activeItem = { ...this.state.activeItem, [name]: value };
        this.setState({ activeItem });
      };
      
componentDidMount() {
    
}

onSubmit() {
    console.log(this.state.activeItem)
    axios
        .post("http://localhost:8000/users/api/auth/login", this.state.activeItem)
        .then(res => console.log(res.data))
        .catch(err => console.log(err));
}

render() {
    return(
        <div>
            <Form>
                  <FormGroup>
                    <Label for="username">User Name</Label>
                    <Input
                      type="text"
                      name="username"
                      value={this.state.activeItem.username}
                      onChange={this.handleChange}
                      placeholder="Enter user name"
                      maxLength="256"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="password">Password</Label>
                    <Input
                      type="password"
                      name="password"
                      value={this.state.activeItem.password}
                      onChange={this.handleChange}
                      placeholder="Enter password"
                      maxLength="256"
                    />
                  </FormGroup>
                    <Button color="success" onClick={() => this.onSubmit()}>
                        Submit
                    </Button>
                </Form>
        </div>
    )
}
}
