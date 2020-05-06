import React, { Component } from "react";
import ToDoItem from "./ToDoItem";
class ToDoList extends Component {
  render() {
    const { items, handleClearList, handleDelete, handleEdit } = this.props;
    return (
      <ul className="list-group my-5">
        <h3 className="text-capitalize text-center">To Do List</h3>
        {items.map((item) => (
          <ToDoItem
            key={item.id}
            title={item.title}
            handleEdit={() => handleEdit(item.id)}
            handleDelete={() => handleDelete(item.id)}
          />
        ))}
        <button
          type="button"
          className="btn btn-danger btn-block text-uppercase mt-5"
          onClick={handleClearList}
        >
          Clear list
        </button>
      </ul>
    );
  }
}

export default ToDoList;
