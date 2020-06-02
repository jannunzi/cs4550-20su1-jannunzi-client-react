import React from "react";

class ModuleListComponent extends React.Component {
  state = {
    newModuleTitle: 'some other module',
    editingModule: {}
  }
  componentDidMount() {
    this.props.findAllModules()
  }

  render() {
    return(
      <div>
        <h1>Modules ({this.props.modules.length})</h1>
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
                    {module.title}
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
        <button onClick={() => this.props.createModule({
          title: this.state.newModuleTitle
        })}>
          Add
        </button>
      </div>
    )
  }
}

export default ModuleListComponent
