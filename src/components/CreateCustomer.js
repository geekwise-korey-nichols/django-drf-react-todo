import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    Input,
    Label
  } from "reactstrap";

export default class CreateCustomer extends Component{
    constructor(props) {
        super(props);
        this.state = {
            activeItem: {
                customer_name: "",
                customer_email: "",
                branch: "",
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
    const { toggle, onSave } = this.props;
    return(
        <Modal isOpen={true} toggle={toggle}>
        <ModalHeader toggle={toggle}> Todo Item </ModalHeader>
        <ModalBody>
        <Form>
                <FormGroup>
                  <Label for="location_name">Location Name</Label>
                  <Input
                    type="text"
                    name="location_name"
                    value={this.state.activeItem.location_name}
                    onChange={this.handleChange}
                    placeholder="Enter branch name"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="location">Location</Label>
                  <Input
                    type="text"
                    name="location"
                    value={this.state.activeItem.location}
                    onChange={this.handleChange}
                    placeholder="Enter branch location"
                  />
                </FormGroup>
              </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={() => onSave(this.state.activeItem)}>
            Save
          </Button>
        </ModalFooter>
      </Modal>
    )
}
}