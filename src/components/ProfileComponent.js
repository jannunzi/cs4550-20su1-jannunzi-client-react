import React from "react";

export default class ProfileComponent extends React.Component {
  state = {
    user: {
      username: '',
      password: '',
      sections: []
    }
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
            user: user
          })
      })
  }

  update = () => {
    fetch("http://localhost:8080/api/profile", {
      body: JSON.stringify(this.state.user),
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
          value={this.state.user.username}
          onChange={(e) => this.setState({
            user: {
              username: e.target.value
            }})}
          className="form-control"/>
        <input
          value={this.state.user.password}
          onChange={(e) => this.setState({
            user: {password: e.target.value}})}
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
        {
          this.state.user && this.state.user.sections.length > 0 &&
            <div>
              <h3>Sections</h3>
              <ul className="list-group">
                {this.state.user.sections.map(section =>
                <li key={section.id}
                    className="list-group-item">
                  {section.title}
                </li>
                )}
              </ul>
            </div>
        }
      </div>
    )
  }
}
