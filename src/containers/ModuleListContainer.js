import {connect} from "react-redux";
import ModuleListComponent from "../components/ModuleListComponent";
import ModuleService from "../services/ModuleService";

const stateToPropertyMapper = (state) => {
  return {
    modules: state.modules,
    newModuleTitle: state.newModuleTitle
  }
}

const dispatchToPropertyMapper = (dispatch) => {
  return {
    findAllModules: () => {
      ModuleService.findAllModules()
        .then(actualModules => dispatch({
          type: 'FIND_ALL_MODULES',
          modules: actualModules
        }))
    },
    updateModule: (moduleId, newModuleData) => {
      ModuleService.updateModule(moduleId, newModuleData)
        .then(status => dispatch({
          type: 'UPDATE_MODULE',
          updatedModule: newModuleData
        }))
    },
    createModule: (newModule) => {
      ModuleService.createModule(newModule)
        .then(actualNewModule => dispatch({
          type: "ADD_MODULE",
          newModule: actualNewModule
        }))
    },
    deleteModule: (moduleId) => {
      ModuleService.deleteModule(moduleId)
        .then(status => dispatch({
          type: "DELETE_MODULE",
          moduleId: moduleId
        }))
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
