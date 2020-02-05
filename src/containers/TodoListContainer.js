import React, { Component } from "react";
import Title from "../components/Title";
import Todo from "../components/Todo";
import TodoInput from "../components/TodoInput";

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
    todos: [],
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

  addTodo = content => {
    const { todos } = this.state;
    this.setState({
      todos: todos.concat({
        id: generateID(),
        isDone: false,
        content: content,
      }),
    });
  };

  deleteTodo = id => {
    let updated = this.state.todos.filter(element => element.id !== id);
    this.setState({ todos: updated });
  };

  render() {
    const list = this.state.todos;
    return (
      <div className="app-container">
        <section className="app-section">
          <Title title={"todo list"} />
          <TodoInput addTodo={this.addTodo} />
          {list.map(todo => (
            <Todo
              key={todo.id}
              todo={todo}
              checkBoxChanged={this.toggleCheckbox}
              deleteTodo={this.deleteTodo}
            />
          ))}
        </section>
      </div>
    );
  }
}

export default TodoListContainer;
