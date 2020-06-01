// Finite State Machine
// (S1) --e1--> (S2)
// (S1) --e2--> (S3)

const initialState = {
  newModuleTitle: 'Some Module',
  modules: [
    {_id: '000', title: 'Module XYZ'},
    {_id: '123', title: 'Module A'},
    {_id: '234', title: 'Module B'},
    {_id: '345', title: 'Module C'}
  ]
}

const moduleReducer = (state=initialState, event) => {
  switch (event.type) {
    case "ADD_MODULE":
      return {
        modules: [
          ...state.modules,
          event.newModule
        ]
      }
      break;
    case "DELETE_MODULE":
      return {
        modules: state.modules.filter(module => module._id !== event.moduleId)
      }
      break;
    default:
      return state;
  }
}

export default moduleReducer
