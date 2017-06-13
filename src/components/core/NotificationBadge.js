import "components/core/css/badge.css";

import React from "react";
import PropTypes from "prop-types";
import { Badge } from "react-bootstrap";

const NotificationBadge = ({ children, warning, ...props }) => (
  <Badge className={warning ? "badge-warning" : null} {...props}>
    {children}
  </Badge>
);

NotificationBadge.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ])
};

export default NotificationBadge;
