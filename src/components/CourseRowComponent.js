import React from "react";
import {Link} from "react-router-dom";

export default class CourseRowComponent extends React.Component {
  state = {
    editing: false,
    course: this.props.course
  }
  setEditing = (editing) =>
    this.setState({editing: editing})
  updateCourseTitle = (newTitle) =>
    this.setState(prevState => ({
      course: {
        ...prevState.course,
        title: newTitle
      }
    }))

  render() {
    return(
      <tr>
        <td>
          {
            !this.state.editing &&
              <Link to={`/editor/${this.state.course._id}`}>
                {this.state.course.title}
              </Link>
          }
          {
            this.state.editing &&
            <input
              className="form-control"
              onChange={(event) => this.updateCourseTitle(event.target.value)}
              value={this.state.course.title}/>
          }
        </td>
        <td>{this.state.course.owner}</td>
        <td>{this.state.course.modified}</td>
        <td>
          {
            !this.state.editing &&
            <button
              className="btn btn-primary"
              onClick={() => this.setEditing(true)}>
              Edit
            </button>
          }
          {
            this.state.editing &&
            <span>
              <button onClick={() => this.setEditing(false)}>
                Ok</button>
              <button
                className="btn btn-danger"
                onClick={
                  () => this.props.deleteCourse(this.props.course)}>
                Delete</button>
            </span>
          }
        </td>
      </tr>
    )
  }
}