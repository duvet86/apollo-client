import React from "react";
import PropTypes from "prop-types";
import { Well } from "react-bootstrap";

const Loading = ({ isLoading, error, pastDelay }) => {
  if (error) {
    return (
      <Well>
        {error.message ? error.message : "Error! Component failed to load."}
      </Well>
    );
  }
  if (isLoading) {
    return pastDelay ? <div id="loader" /> : null;
  }
  return null;
};

Loading.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  pastDelay: PropTypes.bool,
  error: PropTypes.shape({
    message: PropTypes.string
  })
};

export default Loading;
