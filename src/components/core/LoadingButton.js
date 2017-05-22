import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

const LoadingButton = ({
  children,
  bsStyle,
  bsSize,
  isLoading,
  onClick,
  ...props
}) => (
  <Button
    bsStyle={bsStyle != null ? bsStyle : "default"}
    bsSize={bsSize != null ? bsSize : null}
    disabled={isLoading}
    onClick={!isLoading ? onClick : null}
    {...props}
  >
    {isLoading ? "Loading..." : children}
  </Button>
);

LoadingButton.propTypes = {
  bsStyle: PropTypes.string,
  bsSize: PropTypes.string,
  children: PropTypes.string.isRequired,
  isLoading: PropTypes.bool,
  onClick: PropTypes.func.isRequired
};

export default LoadingButton;
