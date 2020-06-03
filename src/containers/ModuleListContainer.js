import {connect} from "react-redux";
import ModuleListComponent from "../components/ModuleListComponent";
import ModuleService from "../services/ModuleService";
import moduleReducer from "../reducers/moduleReducer";

const stateToPropertyMapper = (state, ownProps) => {
  console.log(ownProps)
  console.log(state)
  return {
    modules: state.moduleReducer.modules,
    newModuleTitle: state.moduleReducer.newModuleTitle,
    params: ownProps.params
    // ownProps: ownProps
  }
}

const dispatchToPropertyMapper = (dispatch) => {
  return {
    findModuleForCourse: (courseId) => {
      ModuleService.findModuleForCourse(courseId)
        .then(modulesForTheCourse => dispatch({
          type: 'FIND_MODULES_FOR_COURSE',
          modules: modulesForTheCourse
        }))
    },
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
    createModule: (courseId, newModule) => {
      ModuleService.createModule(courseId, newModule)
        .then(actualNewModule => dispatch({
          type: "ADD_MODULE",
          newModule: actualNewModule
        }))
    },
    deleteModule  : (moduleId) => {
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
