import React from "react";
import PropTypes from "prop-types";
import { Well } from "react-bootstrap";

const Loading = ({ children, loading, error }) => {
  if (error) {
    return <Well>{error.message}</Well>;
  }
  if (loading) {
    return <div id="loader" />;
  }
  return <div className="animate-bottom">{children}</div>;
};

Loading.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ]).isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.shape({
    message: PropTypes.string
  })
};

export default Loading;
