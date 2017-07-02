import "components/navbar/css/dropownNotification.css";

import React from "react";
import { NavDropdown, MenuItem, Badge } from "react-bootstrap";

import DropdownNotificationTitle
  from "components/navbar/DropdownNotificationTitle";

const DropdownNotification = () => (
  <NavDropdown
    title={<DropdownNotificationTitle />}
    id="notification-nav"
    noCaret
  >
    <MenuItem>
      Notifications<Badge className="badge-pulse pull-right">4</Badge>
    </MenuItem>
  </NavDropdown>
);

export default DropdownNotification;
