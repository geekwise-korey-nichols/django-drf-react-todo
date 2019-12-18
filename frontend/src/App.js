import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
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

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      activeItem: {
        location: "",
        location_name: ""
      },
      branches: []
    };
  }
  componentDidMount() {
    axios
          .get("http://localhost:8000/branch/")
          .then(res => this.setState({branches: res.data.results }))
          .catch(err => console.log(err));
  }

  renderBranches() {
    console.log(this.state)
    let newItems = []
    newItems = this.state.branches
    console.log(newItems);
    return newItems.map(item => (
      <li key={item.id}>
        {item.location_name}
      </li>
    ))
  }

  createForm() {
    return (
      <Form>
                <FormGroup>
                  <Label for="title">Title</Label>
                  <Input
                    type="text"
                    name="title"
                    value={this.state.activeItem.title}
                    onChange={this.handleChange}
                    placeholder="Enter Todo Title"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="description">Description</Label>
                  <Input
                    type="text"
                    name="description"
                    value={this.state.activeItem.description}
                    onChange={this.handleChange}
                    placeholder="Enter Todo description"
                  />
                </FormGroup>
                <FormGroup check>
                  <Label for="completed">
                    <Input
                      type="checkbox"
                      name="completed"
                      checked={this.state.activeItem.completed}
                      onChange={this.handleChange}
                    />
                    Completed
                  </Label>
                </FormGroup>
              </Form>
    )
  }

  render() {
    return (
      <div>
        <ul>{this.renderBranches()}</ul>
        <div>{this.createForm()}</div>
      </div>
    )
  }
}
export default App;
