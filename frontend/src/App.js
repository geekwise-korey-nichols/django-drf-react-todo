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

  onSave(item) {
    axios
          .post("http://localhost:8000/branch/", item)
          .then(res => this.componentDidMount())
  }

  handleDelete(item) {
    axios
          .delete(`http://localhost:8000/branch/${item.id}`)
          .then(res => this.componentDidMount())
  }

  renderBranches() {
    //console.log(this.state)
    let newItems = []
    newItems = this.state.branches
    //console.log(newItems);
    return newItems.map(item => (
      <li key={item.id}>
        {item.location_name}
        <button
                onClick={() => this.handleDelete(item)}
                className="btn btn-danger"
              >
                Delete{" "}
              </button>
      </li>
    ))
  }

  
  onSave(item) {
    axios
          .post("http://localhost:8000/branch/", item)
          .then(res => this.componentDidMount())
  }

  handleChange = e => {
    let { name, value } = e.target;
    if (e.target.type === "checkbox") {
        value = e.target.checked;
    }
    const activeItem = { ...this.state.activeItem, [name]: value};
    this.setState({ activeItem });
  };
  createForm() {
    return (
      <div>
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
        <Button color="success" onClick={() => this.onSave(this.state.activeItem)}>
          Save
        </Button>
      </div>
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
