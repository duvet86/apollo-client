import "components/core/css/notificationBadge.css";

import React from "react";
import PropTypes from "prop-types";
import { Badge } from "react-bootstrap";

const NotificationBadge = ({ children, warning, ...props }) => {
  let className = "badge-pulse";
  if (warning) {
    className += " badge-warning";
  }

  return (
    <Badge className={className} {...props}>
      {children}
    </Badge>
  );
};

NotificationBadge.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ])
};

export default NotificationBadge;
