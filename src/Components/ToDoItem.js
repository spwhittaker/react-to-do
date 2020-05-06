import React, { Component } from "react";

class ToDoItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h4>{this.props.title}</h4>
      </div>
    );
  }
}

export default ToDoItem;
