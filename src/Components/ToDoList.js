import React, { Component } from "react";
import ToDoItem from "./ToDoItem";
class ToDoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { items } = this.props;
    return (
      <section>
        <h2>Hi from List</h2>
        {items.map((item) => (
          <ToDoItem title={item.title} />
        ))}
      </section>
    );
  }
}

export default ToDoList;
