import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

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
          .get("https://bank-backend-korey.herokuapp.com/branch/")
          .then(res => this.setState({branches: res.data }))
          .catch(err => console.log(err));
  }

  renderBranches() {
    console.log(this.state)
    let newItems = []
    newItems = this.state.branches
    console.log(newItems);
    return (
      <li>
        testing...
      </li>
    )
  }

  render() {
    return (
      <ul>{this.renderBranches()}</ul>
    )
  }
}
export default App;
