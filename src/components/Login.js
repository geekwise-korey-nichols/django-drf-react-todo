// import React, { Component } from 'react';
// import '../App.css';
// import axios from 'axios';
// import {
//     Button,
//     Form,
//     FormGroup,
//     Input,
//     Label
//   } from 'reactstrap'


// export default class Login extends Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//             activeItem: {
//                 username: "",
//                 password: ""
//             },
//         }
//     };


//     handleChange = e => {
//         let { name, value } = e.target;
//         const activeItem = { ...this.state.activeItem, [name]: value };
//         this.setState({ activeItem });
//       };
      
// componentDidMount() {
    
// }

// onSubmit() {
//     console.log(this.state.activeItem)
//     axios
//         .post("http://localhost:8000/users/api/auth/login", this.state.activeItem)
//         .then(res => console.log(res.data))
//         .catch(err => console.log(err));
// }

// render() {
//     return(
//         <div>
//             <Form>
//                   <FormGroup>
//                     <Label for="username">User Name</Label>
//                     <Input
//                       type="text"
//                       name="username"
//                       value={this.state.activeItem.username}
//                       onChange={this.handleChange}
//                       placeholder="Enter user name"
//                       maxLength="256"
//                     />
//                   </FormGroup>
//                   <FormGroup>
//                     <Label for="password">Password</Label>
//                     <Input
//                       type="password"
//                       name="password"
//                       value={this.state.activeItem.password}
//                       onChange={this.handleChange}
//                       placeholder="Enter password"
//                       maxLength="256"
//                     />
//                   </FormGroup>
//                     <Button color="success" onClick={() => this.onSubmit()}>
//                         Submit
//                     </Button>
//                     <p className="forgot-password text-right">
//                     Forgot <a href="#">password?</a>
//                 </p>
//                 </Form>
//         </div>
//     )
// }
// }


import React, { Component } from 'react'
import { Link , Redirect} from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { login } from './actions/auth'


export class Login extends Component {

  state = {
    username: '',
    password: ''
  }
  static propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool

  }
  onSubmit = e => {
    e.preventDefault();
    this.props.login(this.state.username, this.state.password)
  }


  onChange = e => this.setState({ [e.target.name] : e.target.value})


  render() {
    if(this.props.isAuthenticated){
      return <Redirect to='/branch'/>
    }
    const {username, password } = this.state
    return (
      <div className="col-md-6 m-auto">
        <div className="card card-body mt-5">
          <h2 className="text-center">Login</h2>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                name="username"
                onChange={this.onChange}
                value={username}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                onChange={this.onChange}
                value={password}
              />
            </div>
            
            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
            <p>
              Don't have an account? <Link to="/register">Login</Link>
            </p>
          </form>
        </div>
      </div>
    )
  }
} 

const mapStateToProps = state => ({
  isAuthenticated : state.auth.isAuthenticated
})

export default connect(mapStateToProps, {login})(Login);