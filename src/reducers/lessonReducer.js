
const initialState = {
  lessons: [
    {_id: '123', title: 'lesson 123'},
    {_id: '234', title: 'lesson 234'},
    {_id: '345', title: 'lesson 345'}
  ]
}

const lessonReducer = (state=initialState, action) => {
  switch(action.type) {
    case "DELETE_LESSON":
      return {
        ...state,
        lessons: state.lessons.filter(lesson => lesson._id !== action.lessonId)
      }
    case "FIND_LESSONS_FOR_MODULE":
      return {
        ...state,
        lessons: action.actualLessons
      }
    case "CREATE_LESSON":
      return {
        ...state,
        lessons: [...state.lessons, action.newLesson]
      }
    default:
      return state
  }
}

export default lessonReducer
