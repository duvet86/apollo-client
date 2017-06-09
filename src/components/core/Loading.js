import React from "react";
import PropTypes from "prop-types";
import { Well } from "react-bootstrap";

const Loading = ({ isLoading, children, error, pastDelay = true }) => {
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
  if (children) {
    return <div className="animate-bottom">{children}</div>;
  }
  return null;
};

Loading.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  pastDelay: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ]),
  error: PropTypes.shape({
    message: PropTypes.string
  })
};

export default Loading;
