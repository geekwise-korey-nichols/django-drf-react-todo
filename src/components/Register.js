// import React, { Component } from 'react';
// import '../App.css';
// import axios from 'axios';
// import {
//     Button,
//     Form,
//     FormGroup,
//     Input,
//     Label,
//     Dropdown,
//     DropdownItem,
//     DropdownMenu,
//     DropdownToggle
//   } from 'reactstrap'


// export default class Register extends Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//             activeItem: {
//                 username: "",
//                 email: "",
//                 password: "",
//                 groups: [1]
//             },
//             Groups: [],
//             // url: "https://bank-backend-korey.herokuapp.com",
//             url: "http://localhost:8000"
//         }
//     };


//     handleChange = e => {
//         let { name, value } = e.target;
//         const activeItem = { ...this.state.activeItem, [name]: value };
//         this.setState({ activeItem });
//       };
    
//     componentDidMount() {
//       this.getGroups();
//     }

//     getGroups() {
//       axios
//         .get(`${this.state.url}/users/api/auth/groups`)
//         .then(res => this.setState({Groups: res.data.Groups}))
//         .catch(err => console.log(err))
//     }

//     renderGroupOptions() {
//       return this.state.Groups.map(group => (
//         <option value={`${group.id}`}>{group.name}</option>
//       ))
//   }

//     onSubmit() {
//         console.log(parseInt(this.state.activeItem.groups))
//         this.state.activeItem.groups = [parseInt(this.state.activeItem.groups)];
//         console.log(this.state.activeItem.groups)
//         axios
//             .post(`${this.state.url}/users/api/auth/register`, this.state.activeItem)
//             .then(res => console.log(res.data))
//             .catch(err => console.log(err));
//     }


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
//                     <Label for="email">Email</Label>
//                     <Input
//                       type="text"
//                       name="email"
//                       value={this.state.activeItem.email}
//                       onChange={this.handleChange}
//                       placeholder="Enter email"
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
//                   <FormGroup>
//                   <select
//                   name="groups"
//                   value={this.state.activeItem.groups}
//                   onChange={this.handleChange}>
//                     {this.renderGroupOptions()}
//                   </select> 
//                   </FormGroup>
//                     <Button color="success" onClick={() => this.onSubmit()}>
//                         Submit
//                     </Button>
//                 </Form>

//         </div>
//     )
// }
// }

import React, { Component } from 'react'
import { Link , Redirect} from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { register} from './actions/auth'
import { createMessage }from './actions/messages'

import axios  from 'axios'

export class Register extends Component {

  state = {
    username: '',
    email: '',
    password: '',
    password2: '',
    groups: [1],
    groupList: []
  }

  componentDidMount(){
    this.getGroups()
  }
  static propTypes = {
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool

  }
  getGroups(){
    axios.get('http://localhost:8000/users/api/auth/groups')
      .then(res => this.setState({groupList: res.data.Groups}))
      .catch(err => console.log(err))
  }
  static propTypes = {
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool

  }
  onSubmit = e => {
    e.preventDefault();

    const { username, email, password, password2,groups} = this.state;


    if (password !== password2){
      console.log('message does not match')
      this.props.createMessage ({
        passwordNotMatch : 'Password do not match'
      })
    }else {
      const newUser = {
        username,
        password,
        email,
        groups
      }
      this.props.register(newUser)
    }
  }


  onChange = e => this.setState({ [e.target.name] : e.target.value})

  onChangeGroup = e => {
    e.preventDefault()
    const { value } = e.target;
    // console.log(typeof(value))
    this.setState({groups: [parseInt(value)]})
  }
  renderGroupOptions(){
    return this.state.groupList.map(groups => (
      <option key={groups.id} value={groups.id}>{groups.name}</option>
    ))
  }


  render() {
    if(this.props.isAuthenticated){
      return <Redirect to='/branches'/>
    }
    const {username, email, password, password2 } = this.state
    return (
      <div className="col-md-6 m-auto">
        <div className="card card-body mt-5">
          <h2 className="text-center">Register</h2>
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
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                onChange={this.onChange}
                value={email}
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
              <label>Confirm Password</label>
              <input
                type="password"
                className="form-control"
                name="password2"
                onChange={this.onChange}
                value={password2}
              />
            </div>
            <div className="form-group">
              <label>Group</label>
              <select
                className="form-control"
                name="groups"
                onChange={this.onChangeGroup}>
                  {this.renderGroupOptions()}
              </select>
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>
            <p>
              Already have an account? <Link to="/login">Login</Link>
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

export default connect(mapStateToProps, {register, createMessage})(Register);