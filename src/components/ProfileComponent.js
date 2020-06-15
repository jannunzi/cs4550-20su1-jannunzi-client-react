import React from "react";

export default class ProfileComponent extends React.Component {
  state = {
    username: '',
    password: ''
  }

  componentDidMount() {
    fetch("http://localhost:8080/api/profile", {
      method: 'POST',
      credentials: "include"
    })
      .then(response => {
        console.log(response)
        return response.json()
      })
      .catch(e => {
        this.props.history.push("/")
      })
      .then(user => {
        if(user)
          this.setState({
            username: user.username, password: user.password
          })
      })
  }

  update = () => {
    fetch("http://localhost:8080/api/profile", {
      headers: {
        'content-type': 'application/json'
      },
      method: 'PUT',
      credentials: "include"
    })
      .then(response => response.json())
      .then(user => this.setState({
        username: user.username, password: user.password
      }))
  }

  logout = () => {
    fetch("http://localhost:8080/api/logout", {
      method: 'POST',
      credentials: "include"
    })
      .then(response => this.props.history.push("/"))

  }
  render() {
    return(
      <div>
        <h1>Profile</h1>
        <input
          value={this.state.username}
          onChange={(e) => this.setState({username: e.target.value})}
          className="form-control"/>
        <input
          value={this.state.password}
          onChange={(e) => this.setState({password: e.target.value})}
          className="form-control"/>
        <button
          onClick={this.update}
          className="btn btn-primary">
          Update
        </button>
        <button
          className="btn btn-danger"
          onClick={this.logout}>
          Sign out
        </button>
      </div>
    )
  }
}
