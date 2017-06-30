import React from "react";
import PropTypes from "prop-types";
import { Glyphicon } from "react-bootstrap";

import NotificationBadge from "components/core/NotificationBadge";

const UserBar = ({ userName }) => (
  <div style={{ display: "flex", justifyContent: "space-between" }}>
    <div>
      <Glyphicon style={{ marginRight: "10px" }} glyph="user" />
      {userName}
    </div>
    <div><NotificationBadge warning>4</NotificationBadge></div>
  </div>
);

UserBar.propTypes = {
  userName: PropTypes.string.isRequired
};

export default UserBar;
