import React from "react";
import PropTypes from "prop-types";
import { Title } from "./Styles";

const PageTitle = ({ title }) => <Title variant="h2">{title}</Title>;

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageTitle;
