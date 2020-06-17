import React from "react";
import {Link} from "react-router-dom";

export default class Register extends React.Component {
  state = {
    username: '',
    password: '',
    error: null
  }
  register = () => {
    fetch("http://localhost:8080/api/register", {
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      }),
      headers: {
        'content-type': 'application/json'
      },
      method: 'POST',
      credentials: "include"
    }).then(response => response.json())
      .catch(e => {
        this.setState({
          error: 'Unable to register'
        })
      })
      .then(currentUser => {
        if(currentUser) {
          this.props.history.push("/profile")
        }
      })
  }
  render() {
    return(
      <div>
        <h1>Register</h1>
        {
          this.state.error &&
          <div className="alert alert-danger">
            {this.state.error}
          </div>
        }
        <input
          onChange={(e) => this.setState({username: e.target.value})}
          className="form-control"/>
        <input
          onChange={(e) => this.setState({password: e.target.value})}
          className="form-control"/>
        <button
          onClick={this.register}
          className="btn btn-primary">
          Register
        </button>
        <Link to="/login">Sign in</Link>
      </div>
    )
  }
}
