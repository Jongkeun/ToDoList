import React, { Component } from "react";
import Title from "../components/Title";
import Todo from "../components/Todo";
import AddButton from "../components/AddButton";

class TodoListContainer extends Component {
  state = {
    todos: [
      { isDone: false, content: "내용1" },
      { isDone: false, content: "내용2" },
      { isDone: false, content: "내용3" },
      { isDone: false, content: "내용4" },
      { isDone: false, content: "내용5" },
      { isDone: false, content: "내용6" },
      { isDone: false, content: "내용7" },
    ],
  };

  toggleCheckbox = todo => {};

  render() {
    const list = this.state.todos;
    return (
      <div className="app-container">
        <section className="app-section">
          <Title title={"todo list"} />
          {list.map((todo, index) => (
            <Todo key={index} isDone={todo.isDone} content={todo.content} />
          ))}
          <AddButton></AddButton>
        </section>
      </div>
    );
  }
}

export default TodoListContainer;
