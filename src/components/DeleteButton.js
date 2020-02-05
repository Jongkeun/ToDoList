import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Button = styled.button`
  float: right;
  visibility: hidden;
  background-color: transparent;
  border-width: 0;
  color: white;
  font-size: 30px;
  height: 40px;
  margin: auto 0 11px;
  margin-left: auto;
  width: 40px;
`;
const DeleteButton = ({ onClick }) => {
  return <Button onClick={onClick}>X</Button>;
};

DeleteButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default DeleteButton;
