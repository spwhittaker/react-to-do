import React, { Component } from "react";

class ToDoInput extends Component {
  render() {
    const { item, handleChange, handleSubmit, editItem } = this.props;
    return (
      <div className="card card-body my-3">
        <form action="submit" onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-primary text-white">
                <div className="i fas fa-book"></div>
              </div>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Add to do item"
              value={item}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            disabled={item ? false : true}
            className={
              editItem
                ? "btn btn-block btn-success mt-3 text-capitalize"
                : "btn btn-block btn-primary mt-3 text-capitalize"
            }
          >
            {editItem ? "Edit item" : "Add item"}
          </button>
        </form>
      </div>
    );
  }
}

export default ToDoInput;
