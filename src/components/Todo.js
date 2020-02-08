import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import DeleteButton from "./DeleteButton";
import Checkbox from "react-simple-checkbox";

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

const Toggle = styled.div`
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
  text-decoration: ${props => (props.isDone ? "line-through" : "none")};
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
      <Toggle>
        <Checkbox
          checked={isDone}
          size={3}
          color={"#153243"}
          tickAnimationDuration={100}
          onChange={clickCheckbox}
        />
      </Toggle>
      <Label isDone={isDone}>{content}</Label>
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
