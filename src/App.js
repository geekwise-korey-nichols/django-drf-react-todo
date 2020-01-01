import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

import Modal from "./components/Modal";
import Customer from "./components/Customer";

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
<<<<<<< HEAD
          .get("https://bank-backend-korey.herokuapp.com/branch/")
          .then(res => this.setState({branches: res.data.results }))
=======
          .get("http://localhost:8000/branch/")
          .then(res => this.setState({branches: res.data }))
>>>>>>> staging.frontend
          .catch(err => console.log(err));
  }

  handleSubmit(item) {
    axios
<<<<<<< HEAD
          .post("https://bank-backend-korey.herokuapp.com/branch/", item)
=======
          .post("http://localhost:8000/branch/", item)
          .catch(err => console.log(err))
>>>>>>> staging.frontend
          .then(res => this.componentDidMount())
  }

  handleDelete(item) {
    axios
          .delete(`https://bank-backend-korey.herokuapp.com/branch/${item.id}`)
          .then(res => this.componentDidMount())
  }

  renderBranches() {
    let newItems = []
    newItems = this.state.branches
    return newItems.map(item => (
      <div key={item.id}>
        <li>
          {item.location_name}
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
      <ul>
        <Customer bankId={item.id}></Customer>
      </ul>
    </div>
    ))
  }

  
  onSave(item) {
    axios
<<<<<<< HEAD
          .post("https://bank-backend-korey.herokuapp.com/branch/", item)
=======
          .post("http://localhost:8000/branch/", item)
          .catch(err => console.log(err))
>>>>>>> staging.frontend
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
        if (item.id) {
          axios
<<<<<<< HEAD
            .put(`https://bank-backend-korey.herokuapp.com/branch/${item.id}/`, item)
=======
            .put(`http://localhost:8000/branch/${item.id}/`, item)
            .catch(err => console.log(err))
>>>>>>> staging.frontend
            .then(res => this.componentDidMount());
          return;
        }
        if(item.location !== "" && item.location_name !== ""){
        axios
<<<<<<< HEAD
          .post("https://bank-backend-korey.herokuapp.com/branch/", item)
=======
          .post("http://localhost:8000/branch/", item)
          .catch(err => console.log(err))
>>>>>>> staging.frontend
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
