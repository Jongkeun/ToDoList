import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import DeleteButton from "./DeleteButton";

const Container = styled.div`
  margin: 5px 1px;
  width: 90%;
  border: 1px white solid;
  &:hover {
    button {
      visibility: visible;
    }
  }
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
      <input type="checkbox" checked={isDone} onChange={clickCheckbox} />
      {content}
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
