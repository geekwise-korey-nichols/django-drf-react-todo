import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
  } from 'reactstrap';
import { Link } from 'react-router-dom'



export default class DynamicNavbar extends Component{
    constructor(props) {
        super(props);
        this.state = {
            models: []
        }
    };

    componentDidMount() {
        axios
            .get("http://localhost:8000/")
            .then(res => this.setState({models: Object.keys(res.data)}))
            .catch(err => console.log(err));
    }

    renderNavBar() {
        console.log(this.state.models)
        return this.state.models.map(model => (
            <NavItem>
              <NavLink key={model.id} tag={Link} to={`/${model}`}>{model}</NavLink>
            </NavItem>
        ))
    }

    render() {
        return(
                <Navbar color="light" light expand="md">
                  <NavbarToggler />
                  <Collapse navbar>
                    <Nav className="mr-auto" navbar>
                      {this.renderNavBar()}
                    </Nav>
                    <Nav>
                      <NavItem>
                        <NavLink tag={Link} to={'/Login'}>Login</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink tag={Link} to={'/Register'}>Register</NavLink>
                      </NavItem>
                      </Nav>
                  </Collapse>
                </Navbar>
        )
    }
}
