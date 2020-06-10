import React from "react";

export default class HeadingWidgetComponent extends React.Component {
  render() {
    return(
      <div>
        <h3>Heading Widget</h3>
        {this.props.widget.name}
        <select>
          <option>Heading 1</option>
          <option>Heading 2</option>
          <option>Heading 3</option>
          <option>Heading 4</option>
          <option>Heading 5</option>
        </select>
      </div>
    )
  }
}
