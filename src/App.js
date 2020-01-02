import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import Modal from "./components/Modal";

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      activeItem: {
        location: "",
        location_name: ""
      },
      branches: [],
      url: "https://bank-backend-korey.herokuapp.com"
    };
  }
  componentDidMount() {
    axios
          .get(`${this.state.url}/branch/`)
          .then(res => this.setState({branches: res.data }))
          .catch(err => console.log(err));
  }

  handleDelete(item) {
    axios
          .delete(`${this.state.url}/branch/${item.id}`)
          .then(res => this.componentDidMount())
  }

  renderBranches() {
    let newItems = []
    newItems = this.state.branches
    return newItems.map(item => (
      <div key={item.id}>
        <li>
          Name: {item.location_name} - Location: {item.location}
        </li>
        <button
                onClick={() => this.editItem(item)}
                className="btn btn-secondary mr-2"
              >
                {" "}
                Edit{" "}
              </button>
        <button
        onClick={() => this.handleDelete(item)}
        className="btn btn-danger"
      >
        Delete{" "}
      </button>
    </div>
    ))
  }

  handleChange = e => {
    let { name, value } = e.target;
    if (e.target.type === "checkbox") {
        value = e.target.checked;
    }
    const activeItem = { ...this.state.activeItem, [name]: value};
    this.setState({ activeItem });
  };

  createItem = () => {
    const item = { location: "", location_name: ""};
    this.setState({ activeItem: item, modal: !this.state.modal, createCustomer: !this.state.createCustomer });
  };

  editItem = item => {
    this.setState({ activeItem: item, modal: !this.state.modal });
  };

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  handleSubmit = item => {
    this.toggle();
    if(item.location !== "" && item.location_name !== ""){
        if (item.id) {
          axios
            .put(`${this.state.url}/branch/${item.id}/`, item)
            .catch(err => console.log(err))
            .then(res => this.componentDidMount());
          return;
        }
        
        axios
          .post(`${this.state.url}/branch/`, item)
          .catch(err => console.log(err))
          .then(res => this.componentDidMount());
        }
      };
  

  render() {
    return (
      <div>
        <ul>{this.renderBranches()}</ul>
        <button onClick={this.createItem} className="btn btn-primary">
                      New Branch
                    </button>
        {this.state.modal ? (
              <Modal
                activeItem={this.state.activeItem}
                toggle={this.toggle}
                onSave={this.handleSubmit}
              />
            ) : null}
      </div>
    )
  }
}
export default App;
