import React from 'react'
import CourseListContainer from "../containers/CourseListContainer";
import CourseEditor from "./CourseEditor";
import {BrowserRouter, Route} from "react-router-dom";
import HomeComponent from "./HomeComponent";
import LoginComponent from "./LoginComponent";
import Register from "./Register";
import ProfileComponent from "./ProfileComponent";

class WhiteBoard extends React.Component {
  render() {
    return(
      <BrowserRouter>
        <div>
          <h1>WhiteBoard !!!!</h1>

          <Route path="/register" exact={true} component={Register}/>
          <Route path="/login" exact={true} component={LoginComponent}/>
          <Route path="/profile" exact={true} component={ProfileComponent}/>

          {/*TODO: port over registraion, profile components*/}

          <Route
            path='/'
            exact={true}
            component={HomeComponent}
          />

          <Route
            path='/courses'
            exact={true}
            component={CourseListContainer}/>

          <Route
            path='/:layout/courses'
            exact={true}
            component={CourseListContainer}/>

          <Route
            path='/editor'
            exact={true}
            component={CourseEditor}/>

          <Route
            path={['/editor/:courseId', '/editor/:courseId/modules/:moduleId']}
            exact={true}
            component={CourseEditor}/>

          {/*<Route*/}
          {/*  path='/editor/:courseId/modules/:moduleId'*/}
          {/*  exact={true}*/}
          {/*  component={CourseEditor}/>*/}

        </div>
      </BrowserRouter>
    )
  }
}

export default WhiteBoard
