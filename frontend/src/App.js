import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      viewCompleted: false,
      activeItem: {
        title: "",
        description: "",
        completed: false
      },
      todoList: []
    };
  }
  componentDidMount() {
    axios
          .get("https://bank-backend-korey.herokuapp.com/branch/")
          .then(res => console.log(res))
          .catch(err => console.log(err));
  }


render() {
  return (
    <h1>It works</h1>
  )
}
}
export default App;
