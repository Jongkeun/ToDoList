import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Button = styled.button`
  float: right;
  visibility: hidden;
`;
const DeleteButton = ({ onClick }) => {
  return <Button onClick={onClick}>Delete</Button>;
};

DeleteButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default DeleteButton;
