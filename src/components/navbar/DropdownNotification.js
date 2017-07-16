import "components/navbar/css/dropownNotification.css";

import React from "react";
import { NavDropdown, MenuItem, Badge } from "react-bootstrap";

import DropdownTitle from "components/navbar/DropdownTitle";

const DropdownNotification = () => (
  <NavDropdown
    title={<DropdownTitle className="bell-icon animated" glyph="bell" />}
    id="notification-nav"
    noCaret
  >
    <MenuItem>
      Notifications<Badge className="badge-pulse pull-right">4</Badge>
    </MenuItem>
  </NavDropdown>
);

export default DropdownNotification;
