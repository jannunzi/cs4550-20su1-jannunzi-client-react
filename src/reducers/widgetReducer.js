const initialState = {
  widgets: [
    {id: 123, name: 'Widget AAA'},
    {id: 234, name: 'Widget BBB'},
    {id: 345, name: 'Widget CCC'}
  ]
}

const widgetReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_WIDGET":
      return {
        ...state,
        widgets: [...state.widgets, action.widget]
      }
    case "FIND_WIDGETS_FOR_TOPIC":
      return {
        ...state,
        widgets: action.widgetsFromServer
      }
    case "DELETE_WIDGET":
      return {
        ...state,
        widgets: state.widgets.filter(widget => widget.id !== action.widgetId)
      }
    default:
      return state
  }
}

export default widgetReducer
