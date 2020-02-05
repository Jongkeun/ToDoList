import React, { Component } from "react";
import Title from "../components/Title";
import Todo from "../components/Todo";
import AddButton from "../components/AddButton";

const generateID = () => {
  return (
    "_" +
    Math.random()
      .toString(36)
      .substr(2, 9)
  );
};

class TodoListContainer extends Component {
  state = {
    todos: [
      { id: generateID(), isDone: false, content: "내용1" },
      { id: generateID(), isDone: false, content: "내용2" },
      { id: generateID(), isDone: false, content: "내용3" },
      { id: generateID(), isDone: false, content: "내용4" },
      { id: generateID(), isDone: false, content: "내용5" },
      { id: generateID(), isDone: false, content: "내용6" },
      { id: generateID(), isDone: false, content: "내용7" },
    ],
  };

  toggleCheckbox = todo => {
    let updated = this.state.todos.map(element => {
      if (element.id === todo.id) {
        element.isDone = !element.isDone;
      }
      return element;
    });

    this.setState({ todos: updated });
  };

  render() {
    const list = this.state.todos;
    return (
      <div className="app-container">
        <section className="app-section">
          <Title title={"todo list"} />
          {list.map(todo => (
            <Todo key={todo.id} todo={todo} onChange={this.toggleCheckbox} />
          ))}
          <AddButton></AddButton>
        </section>
      </div>
    );
  }
}

export default TodoListContainer;
