import React from 'react'
import CourseListContainer from "../containers/CourseListContainer";
import CourseEditor from "./CourseEditor";
import {BrowserRouter, Route} from "react-router-dom";

class WhiteBoard extends React.Component {
  render() {
    return(
      <BrowserRouter>
        <div>
          <h1>WhiteBoard !!!!</h1>

          <Route
            path='/courses'
            component={CourseListContainer}/>

          <Route
            path='/:layout/courses'
            component={CourseListContainer}/>

          <Route
            path='/editor'
            component={CourseEditor}/>

        </div>
      </BrowserRouter>
    )
  }
}

export default WhiteBoard
