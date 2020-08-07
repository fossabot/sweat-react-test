import React from "react";
import PropTypes from "prop-types";
import {Typography} from "@material-ui/core";
import {PageLoadingContainer} from "./Styles";

const PageLoading = ({loadingText}) => (
  <PageLoadingContainer>
    <Typography variant="h3">
      {loadingText}
    </Typography>
  </PageLoadingContainer>
);

PageLoading.propTypes = {
  loadingText: PropTypes.string.isRequired
}

export default PageLoading;
