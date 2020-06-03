// Finite State Machine
// (S1) --e1--> (S2)
// (S1) --e2--> (S3)

const initialState = {
  newModuleTitle: 'Some Module',
  modules: []
}

const moduleReducer = (state=initialState, event) => {
  switch (event.type) {
    case "UPDATE_MODULE":
      return {
        ...state,
        modules: state.modules.map(
          module => module._id === event.updatedModule._id ?
            event.updatedModule : module )
      }
    case "FIND_MODULES_FOR_COURSE":
      return {
        ...state,
        modules: event.modules
      }
    case "FIND_ALL_MODULES":
      console.log(event.modules)
      return {
        ...state,
        modules: event.modules
      }
      break
    case "ADD_MODULE":
      return {
        modules: [
          ...state.modules,
          event.newModule
        ]
      }
      break
    case "DELETE_MODULE":
      return {
        modules: state.modules.filter(module => module._id !== event.moduleId)
      }
      break
    default:
      return state
  }
}

export default moduleReducer
