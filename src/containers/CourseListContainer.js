import React from "react";
import CourseTableComponent from "../components/CourseTableComponent";
import CourseGridComponent from "../components/CourseGridComponent";
class CourseListContainer
  extends React.Component
{
  state = {
    layout: this.props.match.params.layout,
    courses: [
      {_id: '123', title: 'cs4550', owner: 'me', modified: '1/1/2020'},
      {_id: '234', title: 'cs5610', owner: 'myself', modified: '1/2/2020'},
      {_id: '345', title: 'cs5200', owner: 'I', modified: '1/3/2020'},
      {_id: '456', title: 'cs1800', owner: 'you', modified: '1/4/2020'},
      {_id: '567', title: 'cs3200', owner: 'them', modified: '1/5/2020'},
    ],
    newCourseTitle: 'New Title ABC'
  }

  setLayout = (layout) => {
    // this.setState({
    //   layout: layout
    // })
    this.props.history.push(`/${layout}/courses`)
  }

  deleteCourse = (courseToDelete) => {
    this.setState(prevState => ({
        courses: prevState
          .courses.filter(course => course !== courseToDelete)
      }))
  }

  addCourse = (title) => {
    // debugger
    const newCourse = {
      _id: (new Date()).getMilliseconds() + '',
      title: title,
      owner: 'me',
      modified: (new Date()).toDateString()
    }

    console.log(newCourse)

    this.setState((prevState) => {
      return {
        courses: [
          ...prevState.courses,
          newCourse
        ]
      }
    })
  }

  render() {

    console.log(this.props)

    return(
      <div>
        <h2>Course List {this.state.courses.length}</h2>
        <input
          onChange={(event) => this.setState({
            newCourseTitle: event.target.value
          })}
          value={this.state.newCourseTitle}
          placeholder="Course Title"/>
        <button onClick={
          () => this.addCourse(this.state.newCourseTitle)}>
          Add Course
        </button>
        <br/>
        {
          this.state.layout === 'table' &&
          <div>
            <button
              onClick={() =>
                this.setLayout('grid')}>
              Grid
            </button>
            <CourseTableComponent
              deleteCourse={this.deleteCourse}
              courses={this.state.courses}/>
          </div>
        }
        {
          this.state.layout === 'grid' &&
          <div>
            <button
              onClick={() =>
                this.setLayout('table')}>
              Table
            </button>
            <CourseGridComponent courses={this.state.courses}/>
          </div>
        }
      </div>
    )
  }
}

export default CourseListContainer
