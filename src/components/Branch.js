import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import Modal from "./Modal";
import Customer from "./Customer";

export default class Branch extends Component{
    constructor(props) {
        super(props);
        this.state = {
          activeBranch: {
            location: "",
            location_name: ""
          },
          branches: [],
          heroku_url: "https://bank-backend-korey.herokuapp.com",
          local_url: "http://localhost:8000"
        };
    }
    
    componentDidMount() {
        this.refreshBranchList();
    }

    refreshBranchList() {
        axios
              .get(`${this.state.local_url}/branch/`)
              .then(res => this.setState({branches: res.data }))
              .catch(err => console.log(err));
    }

    createBranch = () => {
        const branch = { location: "", location_name: ""};
        this.setState({ activeItem: branch, modal: !this.state.modal });
    };

    editBranch = branch => {
        this.setState({ activeItem: branch, modal: !this.state.modal });
    };

    handleDelete(branch) {
      console.log(branch)
        axios
              .delete(`${this.state.local_url}/branch/${branch.id}`)
              .then(res => this.refreshBranchList())
              .catch(err => console.log(err));
    }

    toggle = () => {
      this.setState({ modal: !this.state.modal });
    };

    renderBranches() {
        console.log(this.state.branches)
        let newItems = this.state.branches
        return newItems.map(branch => (
          <div key={branch.id}>
            <li>
              Name: {branch.location_name} - Location: {branch.location}
            </li>
            <button
                    onClick={() => this.editBranch(branch)}
                    className="btn btn-secondary mr-2"
                  >
                    {" "}
                    Edit{" "}
                  </button>
            <button
            onClick={() => this.handleDelete(branch)}
            className="btn btn-danger"
          >
            Delete{" "}
          </button>
          <ul>
            <Customer bankId={branch.id}></Customer>
          </ul>
        </div>
        ))
    }

    handleSubmit = branch => {
        console.log("hello")
        this.toggle();
        if(branch.location !== "" && branch.location_name !== ""){
            if (branch.id) {
              axios
                .put(`${this.state.local_url}/branch/${branch.id}/`, branch)
                .then(res => this.refreshBranchList())
                .catch(err => console.log(err));
              return;
            }
            
            axios
              .post(`${this.state.local_url}/branch/`, branch)
              .then(res => this.refreshBranchList())
              .catch(err => console.log(err));
            }
    };

render() {
    return (
        <div>
            <ul>{this.renderBranches()}</ul>
        <button onClick={this.createBranch} className="btn btn-primary">
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