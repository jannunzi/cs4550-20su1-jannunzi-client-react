import React from "react";

class ModuleListComponent extends React.Component {
  state = {
    newModuleTitle: 'some other module'
  }
  render() {
    return(
      <div>
        <h1>Modules ({this.props.modules.length})</h1>
        <ul>
          {
            this.props.modules.map(module =>
              <li key={module._id}>
                {module.title}
                <button onClick={() => this.props.deleteModule(module._id)}>
                  Delete
                </button>
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
          title: this.state.newModuleTitle,
          _id: (new Date()).getMilliseconds() + ""
        })}>
          Add
        </button>
      </div>
    )
  }
}

export default ModuleListComponent
