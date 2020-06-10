import React from "react";

export default class YouTubeWidgetComponent extends React.Component {
  render() {
    return(
      <div>
        <h3>YouTube Widget</h3>
        {this.props.widget.name}
      </div>
    )
  }
}
