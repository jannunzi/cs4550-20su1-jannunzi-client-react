import React from "react";
import ModuleList from "./ModuleList";
import LessonTabs from "./LessonTabs";
import {Link} from "react-router-dom";
import ModuleListContainer from "../containers/ModuleListContainer";
import WidgetListComponent from "./WidgetListComponent";

// stateless component
const CourseEditor = ({match, history}) => {
  return(
    <div>
      {match.params.courseId}
      <Link to="/courses">
        Back
      </Link>
      <h2>Course Editor</h2>

      <div className="row">
        <div className="col-4">
          <ModuleListContainer match={match} history={history}/>
        </div>
        <div className="col-8">
          <LessonTabs {...match}/>
          <h3>Topic Pills</h3>
          <WidgetListComponent/>
        </div>
      </div>
    </div>
  )
}

export default CourseEditor
