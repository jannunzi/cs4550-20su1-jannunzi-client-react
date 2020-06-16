import React from "react";
import {connect} from "react-redux";
import {findWidgetsForTopic, deleteWidget, createWidget} from '../services/WidgetService'
import HeadingWidgetComponent from "./widgets/HeadingWidgetComponent";
import ParagraphWidgetComponent from "./widgets/ParagraphWidgetComponent";
import YouTubeWidgetComponent from "./widgets/YouTubeWidgetComponent";

const topicId = '2'

class WidgetListComponent extends React.Component {

  componentDidMount() {
    // TODO: read topicId from match.params.topicId, i.e., from the Route
    this.props.findWidgetsForTopic(topicId)
  }

  updateWidget = (e, oldWidget) => {
    oldWidget.type = e.target.value;
    // this fetch really should be implemented in a service and then called from the dispatch / property mapper
    fetch(`http://localhost:8080/api/widgets/${oldWidget.id}`, {
      method: 'PUT',
      body: JSON.stringify(oldWidget),
      headers: {
        'content-type': 'application/json'
      },
      // credentials: "include"
    }).then(response => response.json())
      .then(newWidget => this.props.updateWidget(oldWidget.id, newWidget))
  }

  render() {
    return(
      <div>
        <h2>Widget List</h2>
        <ul>
          {
            this.props.widgets.map(widget =>
              <li key={widget.id}>
                {
                  widget.type === 'HEADING' &&
                  <HeadingWidgetComponent widget={widget}/>
                }
                {
                  widget.type === 'PARAGRAPH' &&
                  <ParagraphWidgetComponent widget={widget}/>
                }
                {
                  widget.type === 'YOUTUBE' &&
                  <YouTubeWidgetComponent widget={widget}/>
                }
                <div>
                  <button>Edit</button>
                  <button>Save</button>
                  <button onClick={() => this.props.deleteWidget(widget.id)}>
                    Delete
                  </button>
                  <button>Move Up</button>
                  <button>Move Down</button>
                  <select onChange={(e) => this.updateWidget(e, widget)} value={widget.type}>
                    <option value="HEADING">HEADING</option>
                    <option value="YOUTUBE">YOUTUBE</option>
                    <option value="PARAGRAPH">PARAGRAPH</option>
                  </select>
                </div>
              </li>)
          }
        </ul>
        <button onClick={() => this.props.createWidget(topicId, {
          type: 'HEADING', name: 'New Widget'
        })}>
          Create Widget
        </button>
      </div>
    )
  }
}

const stateToPropertyMapper = (state) => ({
  widgets: state.widgetReducer.widgets
})

const dispatchToPropertyMapper = (dispatcher) => ({
  updateWidget: (wid, widget) => {
    dispatcher({
      type: "UPDATE_WIDGET",
      wid: wid,
      widget: widget
    })
  },
  createWidget: (tid, widget) =>
    createWidget(tid, widget)
      .then(actualNewWidgetFromServer =>
        dispatcher({
          type: "CREATE_WIDGET",
          widget: actualNewWidgetFromServer
        })
      ),
  deleteWidget: (wid) =>
    deleteWidget(wid)
      .then(status =>
        dispatcher({
          type: "DELETE_WIDGET",
          widgetId: wid
      })),
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
