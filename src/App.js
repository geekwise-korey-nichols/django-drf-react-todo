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
<<<<<<< HEAD
          .get("https://bank-backend-korey.herokuapp.com/branch/")
=======
          .get(`${this.state.url}/branch/`)
>>>>>>> debug.react
          .then(res => this.setState({branches: res.data }))
          .catch(err => console.log(err));
  }

<<<<<<< HEAD
  handleSubmit(item) {
    axios
          .post("https://bank-backend-korey.herokuapp.com/branch/", item)
          .catch(err => console.log(err))
          .then(res => this.componentDidMount())
  }

  handleDelete(item) {
    axios
          .delete(`https://bank-backend-korey.herokuapp.com/branch/${item.id}`)
=======
  handleDelete(item) {
    axios
          .delete(`${this.state.url}/branch/${item.id}`)
>>>>>>> debug.react
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

<<<<<<< HEAD
  
  onSave(item) {
    axios
          .post("https://bank-backend-korey.herokuapp.com/branch/", item)
          .catch(err => console.log(err))
          .then(res => this.componentDidMount())
  }

=======
>>>>>>> debug.react
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
<<<<<<< HEAD
            .put(`https://bank-backend-korey.herokuapp.com/branch/${item.id}/`, item)
=======
            .put(`${this.state.url}/branch/${item.id}/`, item)
>>>>>>> debug.react
            .catch(err => console.log(err))
            .then(res => this.componentDidMount());
          return;
        }
        
        axios
<<<<<<< HEAD
          .post("https://bank-backend-korey.herokuapp.com/branch/", item)
=======
          .post(`${this.state.url}/branch/`, item)
>>>>>>> debug.react
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
