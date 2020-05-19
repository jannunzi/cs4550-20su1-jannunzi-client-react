import React from "react";

export default class CourseRowComponent extends React.Component {
  render() {
    return(
      <tr key={this.props.course._id}>
        <td>{this.props.course.title}</td>
        <td>{this.props.course.owner}</td>
        <td>{this.props.course.modified}</td>
        <td>
          <button>Edit</button>
          <button
            onClick={
              () => this.props.deleteCourse(this.props.course)}>Delete</button>
        </td>
      </tr>
    )
  }
}
