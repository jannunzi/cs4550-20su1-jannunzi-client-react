import React from "react";
import {connect} from "react-redux";
import {findLessonsForModule, createLesson} from "../services/LessonService";

class LessonTabs extends React.Component {
  componentDidMount() {
    this.props.findLessonsForModule(this.props.params.moduleId)
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if(prevProps.params.moduleId !== this.props.params.moduleId) {
      this.props.findLessonsForModule(this.props.params.moduleId)
    }
  }

  render() {
    return(
      <div>
        <h3>Lesson Tabs {this.props.params.moduleId}</h3>
        <ul>
          {
            this.props.lessons.map(lesson =>
              <li key={lesson._id}>
                <button
                  onClick={() => this.props.deleteLesson(lesson._id)}>
                  Delete
                </button>
                {lesson.title}
              </li>
            )
          }
        </ul>
        <button onClick={() => this.props.createLesson(
          this.props.params.moduleId,
          {
            title: 'New Lesson'
          })}>
          Add
        </button>
      </div>
    )
  }
}

// export default LessonTabs

// TODO: move mappers, connectors to separate container file like we did for module

const stateToPropertyMapper = (state) => ({
  lessons: state.lessonReducer.lessons
})

const dispatchToPropertyMapper = (dispatch) => ({
  createLesson: (moduleId, newLesson) => {
    createLesson(moduleId, newLesson)
      .then(actualLesson => dispatch({
        type: 'CREATE_LESSON',
        newLesson
      }))
  },
  findLessonsForModule: (moduleId) => {
    findLessonsForModule(moduleId)
      .then(actualLessons => dispatch({
        type: "FIND_LESSONS_FOR_MODULE",
        actualLessons
      }))
  },
  deleteLesson: (lessonId) => {
    dispatch({
      type: "DELETE_LESSON",
      lessonId
    })
  }
})

export default connect
(stateToPropertyMapper,
  dispatchToPropertyMapper)
(LessonTabs)
