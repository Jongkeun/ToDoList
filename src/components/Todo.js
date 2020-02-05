import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import DeleteButton from "./DeleteButton";

const Container = styled.div`
  display: flex;
  margin: 5px 1px;
  width: 90%;
  border: 1px white solid;
  &:hover {
    button {
      visibility: visible;
    }
  }
`;

const Toggle = styled.input`
  height: 40px;
  margin: auto 2px;
  text-align: center;
  width: 40px;
`;

const Label = styled.label`
  line-height: 1.2;
  padding: 15px 15px 15px 15px;
  transition: color 0.4s;
  flex: none;
  word-break: break-all;
`;
const Todo = ({ todo, checkBoxChanged, deleteTodo }) => {
  const clickCheckbox = () => {
    checkBoxChanged(todo);
  };

  const clickDeleteButton = () => {
    deleteTodo(todo.id);
  };

  const { content, isDone } = todo;

  return (
    <Container>
      <Toggle type="checkbox" checked={isDone} onChange={clickCheckbox} />
      <Label>{content}</Label>
      <DeleteButton onClick={clickDeleteButton} />
    </Container>
  );
};

Todo.defaultProps = {};

Todo.propTypes = {
  todo: PropTypes.object,
  checkBoxChanged: PropTypes.func,
  deleteTodo: PropTypes.func,
};
export default Todo;
