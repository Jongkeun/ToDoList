import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  display: block;
  float: left;
  font-size: 100px;
  font-weight: 100;
  text-align: center;
  text-rendering: optimizelegibility;
  width: 100%;
`;
const Title = ({ title }) => {
  return <Container>{title}</Container>;
};

Title.propTypes = {
  title: PropTypes.string,
};
export default Title;
