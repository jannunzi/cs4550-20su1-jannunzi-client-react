const initialState = {
  widgets: [
    {id: 123, name: 'Widget AAA'},
    {id: 234, name: 'Widget BBB'},
    {id: 345, name: 'Widget CCC'}
  ]
}

const widgetReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FIND_WIDGETS_FOR_TOPIC":
      return {
        ...state,
        widgets: action.widgetsFromServer
      }
    default:
      return state
  }
}

export default widgetReducer
