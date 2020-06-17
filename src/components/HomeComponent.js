import React from "react";
import {Link} from "react-router-dom";
import {fetchProfile} from "../services/UserService";

export default class HomeComponent extends React.Component {
  state = {
    currentUser: {
      username: ''
    }
  }
  componentDidMount() {
    fetchProfile()
      .catch(e => {})
      .then(currentUser => {
        if(currentUser) {
          this.setState({currentUser: currentUser})
        }
      })
  }

  render() {
    return(
      <div>
        <h2>Home</h2>
        {
          this.state.currentUser.username &&
          <h3>Welcome {this.state.currentUser.username}</h3>
        }
        <div className="list-group">
          <Link className="list-group-item" to='/editor'>
            Course Editor
          </Link>
          <Link className="list-group-item" to='/table/courses'>
            Course List
          </Link>
          {
            !this.state.currentUser.username &&
            <Link className="list-group-item" to='/login'>
              Login
            </Link>
          }
          {
            !this.state.currentUser.username &&
            <Link className="list-group-item" to='/register'>
              Registration
            </Link>
          }
          {
            this.state.currentUser.username &&
            <Link className="list-group-item" to='/profile'>
              Profile
            </Link>
          }
        </div>
      </div>
    )
  }
}
