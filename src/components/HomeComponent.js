import React from "react";
import {Link} from "react-router-dom";

const HomeComponent = () =>
  <div>
    <h2>Home</h2>
    <div className="list-group">
      <Link className="list-group-item" to='/editor'>
        Course Editor
      </Link>
      <Link className="list-group-item" to='/table/courses'>
        Course List
      </Link>
      <Link className="list-group-item" to='/login'>
        Login
      </Link>
      <Link className="list-group-item" to='/register'>
        Registration
      </Link>
      <Link className="list-group-item" to='/profile'>
        Profile
      </Link>
    </div>
  </div>

export default HomeComponent
