import React from "react";

const TodoList = (props) => {
  return (
    <div className="todo" key={props.el.id}>
      {" "}
      <h3
        style={{ textDecoration: props.el.condition ? "line-through" : "none" }}
      >
        {props.el.task}
      </h3>
      <button className="btnc" onClick={() => props.completeItem(props.el.id)}>
        {props.el.condition ? "undo" : "complete"}
      </button>
      <button className="btnd" onClick={() => props.deleteItems(props.el.id)}>
        {" "}
        delete{" "}
      </button>
    </div>
  );
};
export default TodoList;
