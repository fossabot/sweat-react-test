import React from "react";
import PropTypes from "prop-types";
import { Container } from "./Styles";

const PageContainer = ({ children }) => <Container>{children}</Container>;

PageContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageContainer;
