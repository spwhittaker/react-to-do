import React, { Component } from "react";
import ToDoItem from "./ToDoItem";
class ToDoList extends Component {
  render() {
    return (
      <section>
        <h2>Hi from List</h2>
        <ToDoItem />
        <ToDoItem />
        <ToDoItem />
        <ToDoItem />
      </section>
    );
  }
}

export default ToDoList;
