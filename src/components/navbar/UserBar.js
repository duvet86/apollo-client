import "components/navbar/css/userBar.css";

import React from "react";
import PropTypes from "prop-types";
import { Glyphicon } from "react-bootstrap";

import NotificationBadge from "components/core/NotificationBadge";

const UserBar = ({ userName }) => (
  <div className="user-bar-contaner">
    <div>
      <Glyphicon className="user-icon" glyph="user" />
      {userName}
    </div>
    <NotificationBadge warning>4</NotificationBadge>
  </div>
);

UserBar.propTypes = {
  userName: PropTypes.string.isRequired
};

export default UserBar;
