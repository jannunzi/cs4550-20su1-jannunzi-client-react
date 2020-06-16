import React from "react";
import {Link} from "react-router-dom";

export default class LoginComponent extends React.Component {
  state = {
    username: '',
    password: ''
  }
  login = () => {
    fetch("http://localhost:8080/api/login", {
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password}),
      headers: {
        'content-type': 'application/json'
      },
      method: 'POST',
      credentials: "include"
    }).then(response => response.json())
      .catch(e => {
        this.props.history.push("/login")
      })
      .then(currentUser => {
        if(currentUser)
          this.props.history.push("/profile")
      })

  }
  render() {
    return(
      <div>
        <h1>Login</h1>
        <input
          onChange={(e) => this.setState({username: e.target.value})}
          className="form-control"/>
        <input
          onChange={(e) => this.setState({password: e.target.value})}
          className="form-control"/>
        <button
          onClick={this.login}
          className="btn btn-primary">
          Login
        </button>
        <Link to="/register">Sign up</Link>
      </div>
    )
  }
}
