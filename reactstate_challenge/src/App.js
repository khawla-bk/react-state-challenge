import React from "react";
import Item from "./components/Item";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      newtext: "",
      todos: [
        {
          id: 1,
          task: "Learn react state",
          condition: false
        },
        {
          id: 2,
          task: "Feed the cat",
          condition: true
        },
        {
          id: 3,
          task: "Bake cookies",
          condition: false
        }
      ]
    };
  }

  handleChange = (e) => {
    this.setState({ newtext: e.target.value });
  };
  handleAdd = () => {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: this.state.todos.length + 1,
          task: this.state.newtext,
          condition: false
        }
      ]
    });
  };
  deleteItems = (key) => {
    this.setState({
      todos: this.state.todos.filter((el, i) => el.id !== key)
    });
  };
  completeItem = (key) => {
    this.setState({
      todos: this.state.todos.map((el, i) =>
        el.id === key ? { ...el, condition: !el.condition } : el
      )
    });
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="content">
            <h1>★ To Do List ★</h1>
            <p> Add New Task: </p>
            <input
              type="text"
              className="input"
              placeholder="Enter new task"
              value={this.state.newtext}
              onChange={this.handleChange}
            />
            <button
              type="button"
              id="add-button"
              className="btn"
              onClick={this.handleAdd}
            >
              Add
            </button>
          </div>

          {this.state.TodoList}
        </div>
        <Item
          todos={this.state.todos}
          completeItem={this.completeItem}
          deleteItems={this.deleteItems}
        />
      </div>
    );
  }
}
export default App;

