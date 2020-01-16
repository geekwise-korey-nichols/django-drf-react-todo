import React, { Component } from 'react';
import './App.css';
import Login from "./components/Login";
import Register from "./components/Register";
import Branch from "./components/Branch";
import Customer from "./components/Customer";
import DynamicNavbar from "./components/DynamicNavbar";
import {BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component{

  render() {
    return (
      <Router>
        <div >
            <DynamicNavbar/>
            <Route exact path="/" component={Branch} />
            <Route path="/branch" component={Branch}/>
            <Route path ="/account"  component={Branch}/>
            <Route path ="/customer" component={Branch}/>
            <Route path ="/product"  component={Branch}/>
            <Route path ="/login" component={Login}/>
            <Route path ="/Register" component={Register}/>
        </div>    
      </Router>

    )
  }
}
export default App;
