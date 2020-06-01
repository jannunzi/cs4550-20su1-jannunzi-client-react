import {connect} from "react-redux";
import ModuleListComponent from "../components/ModuleListComponent";

const stateToPropertyMapper = (state) => {
  return {
    modules: state.modules,
    newModuleTitle: state.newModuleTitle
  }
}

const dispatchToPropertyMapper = (dispatch) => {
  return {
    updateModuleTitle: (newModuleTitle) => {
      dispatch({
        type: 'MODULE_TITLE_CHANGED',
        newModuleTitle: newModuleTitle
      })
      },
    createModule: (newModule) => {
      dispatch({
        type: "ADD_MODULE",
        newModule: newModule
      })
    },
    deleteModule: (moduleId) => {
      dispatch({
        type: "DELETE_MODULE",
        moduleId: moduleId
      })
    }
  }
}

const ModuleListContainer = connect
(stateToPropertyMapper, dispatchToPropertyMapper)
(ModuleListComponent)

export default ModuleListContainer
export const ewq = 1
export const rew = 2
export const tre = 3
