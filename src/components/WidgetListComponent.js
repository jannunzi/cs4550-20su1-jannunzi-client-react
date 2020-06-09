import React from "react";
import {connect} from "react-redux";
import {findWidgetsForTopic} from '../services/WidgetService'

class WidgetListComponent extends React.Component {

  componentDidMount() {
    this.props.findWidgetsForTopic('t3')
  }

  render() {
    return(
      <div>
        <h2>Widget List</h2>
        <ul>
          {
            this.props.widgets.map(widget =>
              <li key={widget.id}>{widget.name}</li>)
          }
        </ul>
      </div>
    )
  }
}

const stateToPropertyMapper = (state) => ({
  widgets: state.widgetReducer.widgets
})

const dispatchToPropertyMapper = (dispatcher) => ({
  findWidgetsForTopic: (tid) =>
    findWidgetsForTopic(tid)
      .then(actualWidgetsFromServer =>
        dispatcher({
          type: "FIND_WIDGETS_FOR_TOPIC",
          widgetsFromServer: actualWidgetsFromServer
        }))
})

export default connect(
  stateToPropertyMapper,
  dispatchToPropertyMapper)
(WidgetListComponent)
