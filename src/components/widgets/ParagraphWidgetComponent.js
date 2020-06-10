import React from "react";

export default class ParagraphWidgetComponent extends React.Component {
  render() {
    return(
      <div>
        <h3>Paragraph Widget</h3>
        {this.props.widget.name}
      </div>
    )
  }
}
