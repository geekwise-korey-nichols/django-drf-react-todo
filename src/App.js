import React, { Component } from 'react';
import './App.css';
import Login from "./components/Login";
import Register from "./components/Register";
import Branch from "./components/Branch";
import Customer from "./components/Customer";
import AllCustomers from "./components/AllCustomers";
import DynamicNavbar from "./components/DynamicNavbar";
import Header from "./components/Header"
import {BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from "react-redux";
import store from './Store'
import PrivateRoute from './components/PrivateRoute'



class App extends Component{
  render() {
    return (
      <Provider store = {store}>
      <Router>
        <div >
          <Header/>
            {/* <DynamicNavbar/> */}
            {/* <Route path="/" component={Branch} /> */}
            <PrivateRoute path="/branch" component={Branch}/>
            <PrivateRoute path ="/account"  component={Branch}/>
            <PrivateRoute path ="/customer" component={Branch}/>
            <PrivateRoute path ="/product"  component={Branch}/>
            <Route exact path ="/login" component={Login}/>
            <Route path ="/Register" component={Register}/>
        </div>    
      </Router>
      </Provider>
      

    )
  }
}
export default App;
