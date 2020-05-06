import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import ToDoInput from "./Components/ToDoInput";
import ToDoList from "./Components/ToDoList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { id: 1, title: "wake up" },
        { id: 2, title: "brush teeth" },
        { id: 3, title: "eat eggs" },
        { id: 4, title: "another thing" },
      ],
      id: uuidv4(),
      item: "",
      editItem: false,
    };
  }
  handleChange = (e) => {
    this.setState({ item: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item,
    };
    const updatedItems = [...this.state.items, newItem];
    this.setState(
      {
        items: updatedItems,
        item: "",
        id: uuidv4(),
        editItem: false,
      },
      () => console.log(this.state.items)
    );
  };
  handleClearList = () => {
    console.log("clear everything");
  };
  handleDelete = (id) => {
    console.log(`Delete the thing with id ${id}`);
  };
  handleEdit = (id) => {
    console.log(`Edit the thing with id ${id}`);
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-capitalize text-center">To Do Input</h3>
            <ToDoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <ToDoList
              items={this.state.items}
              handleClearList={this.handleClearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
