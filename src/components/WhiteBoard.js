import React from 'react'
import CourseListContainer from "../containers/CourseListContainer";
import CourseEditor from "./CourseEditor";
import {BrowserRouter, Route} from "react-router-dom";
import HomeComponent from "./HomeComponent";
import LoginComponent from "./LogicComponent";

class WhiteBoard extends React.Component {
  render() {
    return(
      <BrowserRouter>
        <div>
          <h1>WhiteBoard !!!!</h1>

          <Route path="/login" exact={true} component={LoginComponent}/>

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

        </div>
      </BrowserRouter>
    )
  }
}

export default WhiteBoard
