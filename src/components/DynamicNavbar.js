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
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import PropTypes from "prop-types";


export default class DynamicNavbar extends Component{
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         models: []
    //     }
    // };
    static propTypes = {
      auth: PropTypes.object.isRequired,
      logout: PropTypes.func.isRequired
    }

    componentDidMount() {
        axios
            .get("http://localhost:8000")
            .then(res => this.setState({models: Object.keys(res.data)}))
            .catch(err => console.log(err));
    }

    renderNavBar() {
        console.log(this.state.models)
        return this.state.models.map(model => (
            <NavItem key={model.id}>
              <NavLink tag={Link} to={`/${model}`}>{model}</NavLink>
            </NavItem>
        ))
    }

    render() {
      const { isAuthenticated, user } = this.props.auth;
      
      const authLinks = (
        <div style={{float:'right',paddingRight:'10px'}}>
            <span style={{color:'white'}}className= "navbar-text mr-3">
                <strong>
                    {user ? `Welcome "${user.username}"` : ''}
                </strong>
                
            </span>
            <button className="btn btn-warning"onClick={this.props.logout}> Logout</button>

        </div>
    )

    const guestLinks = (
        <div style={{float:'right'}}>
            <Link className="nax-link" to="/register"> Register</Link> {' '}
            <button className="btn btn-primary"><Link to="/login"> Login</Link></button>
         </div>
    )
    return (  
        <div>
            <div>
              <h1 style= {{color: '#fff',textAlign:'center'}}> MRM BANK</h1>
              {/* <Link style={linkStyle} to="/">Home</Link> {' '} */}
              <button className='btn btn-info'>
                <Link to="/branches">Branches</Link> {' '}
              </button>
              {/* <Link style={linkStyle} to="/accounts">Accounts</Link> {' '}
              <Link style={linkStyle} to="/customers">Customers</Link> {' '}
              <Link style={linkStyle} to="/products"> Products</Link>  */}
              {isAuthenticated ? authLinks : guestLinks} 
            </div> 
                 
        </div>
    )
        // return(
        //         <Navbar color="light" light expand="md">
        //           <NavbarToggler />
        //           <Collapse navbar>
        //             <Nav className="mr-auto" navbar>
        //               {this.renderNavBar()}
        //             </Nav>
        //             <Nav>
        //               <NavItem>
        //                 <NavLink tag={Link} to={'/Login'}>Login</NavLink>
        //               </NavItem>
        //               <NavItem>
        //                 <NavLink tag={Link} to={'/Register'}>Register</NavLink>
        //               </NavItem>
        //               </Nav>
        //           </Collapse>
        //         </Navbar>
        // )
    }
}
