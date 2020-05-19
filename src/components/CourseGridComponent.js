import React from "react";

export default class CourseGridComponent
  extends React.Component
{
  render() {
    return(
      <h3>Course Grid {this.props.courses.length}</h3>
    )
  }
}
