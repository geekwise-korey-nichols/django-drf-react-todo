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
          .get("http://127.0.0.1:8000/branch/")
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
