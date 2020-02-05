import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Todo from "./Todo";

const TextInput = styled.input`
  width: 90%;
  margin: 0;
  font-size: 1.2em;
  border: 1px white solid;
  &::placeholder {
    opacity: 0.5;
  }
`;

const TodoInput = ({ addTodo }) => {
  const handleKyeDown = event => {
    if (event.key === "Enter") {
      addTodo(event.target.value);
      event.target.value = "";
    }
  };
  return (
    <TextInput
      type="text"
      onKeyDown={handleKyeDown}
      placeholder={"What needs to be done?"}
    />
  );
};

Todo.propTypes = {
  addTodo: PropTypes.func,
};
export default TodoInput;
