import React from "react";
import {connect} from "react-redux";
import {findWidgetsForTopic, deleteWidget, createWidget} from '../services/WidgetService'
import HeadingWidgetComponent from "./widgets/HeadingWidgetComponent";
import ParagraphWidgetComponent from "./widgets/ParagraphWidgetComponent";
import YouTubeWidgetComponent from "./widgets/YouTubeWidgetComponent";

const topicId = 't1'

class WidgetListComponent extends React.Component {

  componentDidMount() {
    // TODO: read topicId from match.params.topicId, i.e., from the Route
    this.props.findWidgetsForTopic(topicId)
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
