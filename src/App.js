import React from "react";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import ToDoInput from "./Components/ToDoInput";
import ToDoList from "./Components/ToDoList";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <ToDoInput />
        </div>
        <div className="row">
          <ToDoList />
        </div>
      </div>
    </div>
  );
}

export default App;
