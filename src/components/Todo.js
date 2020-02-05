import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  margin: 5px 1px;
  width: 90%;
  border: 1px white solid;
`;
const Todo = ({ todo, onChange }) => {
  const clickCheckbox = () => {
    onChange(todo);
  };
  const { content, isDone } = todo;
  return (
    <Container>
      <input type="checkbox" checked={isDone} onChange={clickCheckbox} />
      {content}
    </Container>
  );
};

Todo.defaultProps = {};

Todo.propTypes = {
  todo: PropTypes.object,
  onChange: PropTypes.func,
};
export default Todo;
