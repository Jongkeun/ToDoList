import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Todo from "./Todo";

const TextInput = styled.input`
  -webkit-font-smoothing: antialiased;
  border-style: none;
  box-shadow: rgba(0, 0, 0, 0.03) 0 -2px 1px inset;
  box-sizing: border-box;
  font-size: 24px;
  line-height: 1.4em;
  padding: 16px 16px 16px 60px;
  width: 100%;
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
