import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  margin: 5px 1px;
  padding: 2px;
  width: 90%;
  border: 1px white solid;
`;
const Todo = ({ isDone, content }) => {
  const clickCheckbox = event => {
    console.log(event.target.checked);
  };
  return (
    <Container>
      <input type="checkbox" checked={isDone} onChange={clickCheckbox} />
      {content}
    </Container>
  );
};

Todo.defaultProps = {
  isDone: false,
};

Todo.propTypes = {
  isDone: PropTypes.bool,
  content: PropTypes.string,
};
export default Todo;
