import React from "react";
import {Link} from "react-router-dom";

class ModuleListComponent extends React.Component {
  state = {
    newModuleTitle: 'some other module',
    editingModule: {}
  }
  componentDidMount() {
    // this.props.findAllModules()
    console.log(this.props)
    this.props.findModuleForCourse(this.props.match.params.courseId)
  }

  render() {
    return(
      <div>
        <h1>Modules ({this.props.modules.length})</h1>
        ({this.props.match.params.courseId})
        <ul>
          {
            this.props.modules.map(module =>
              <li key={module._id}>
                {
                  this.state.editingModule._id === module._id &&
                    <span>
                    <button onClick={() => this.props.deleteModule(module._id)}>
                      Delete
                    </button>
                    <button onClick={() => {
                      this.props.updateModule(this.state.editingModule._id, this.state.editingModule)
                      this.setState({editingModule: {}})
                    }}>
                      Save
                    </button>
                    <input onChange={(e) => {
                      const newTitle = e.target.value
                      this.setState(prevState => ({
                        editingModule: {
                          ...prevState.editingModule,
                          title: newTitle
                        }
                      }))
                    }}
                           value={this.state.editingModule.title}/>
                    </span>
                }
                {
                  this.state.editingModule._id !== module._id &&
                  <span>
                    <button onClick={() => this.setState({editingModule: module})}>
                      Edit
                    </button>
                    <Link to={`/editor/${this.props.match.params.courseId}/modules/${module._id}`}>
                      {module.title}
                    </Link>
                  </span>
                }
              </li>
            )
          }
        </ul>
        <input onChange={(event) =>
          this.setState({
            newModuleTitle: event.target.value
          })}
               value={this.state.newModuleTitle}/>
        <button onClick={() => this.props.createModule(
          this.props.params.courseId,
          {
          title: this.state.newModuleTitle
        })}>
          Add
        </button>
      </div>
    )
  }
}

export default ModuleListComponent
