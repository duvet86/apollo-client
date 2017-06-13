import "components/core/css/animateBottom.css";

import React from "react";
import PropTypes from "prop-types";

const AnimateContent = ({ children }) => {
  return <div className="animate-bottom">{children}</div>;
};

AnimateContent.propTypes = {
  children: PropTypes.element.isRequired
};

export default AnimateContent;
