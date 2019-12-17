import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      viewCompleted: false,
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
  displayCompleted = status => {
    if (status) {
      return this.setState({ viewCompleted: true });
    }
    return this.setState({ viewCompleted: false });
  };

  renderBranches() {
    const { viewCompleted } = this.state;
    const newItems = this.state.branches.results
    console.log(newItems);
    return (
      <li>
        {newItems[0].location_name} - {newItems[0].location}
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
