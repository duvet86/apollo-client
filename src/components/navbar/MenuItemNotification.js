import "components/navbar/css/menuItemNotification.css";

import React from "react";
import { MenuItem } from "react-bootstrap";

const MenuItemNotification = () => (
  <MenuItem className="menu-item-notification">
    <i className="fa fa-bell notification-icon-shake" aria-hidden="true" />
    {" "}
    Notifications
  </MenuItem>
);

export default MenuItemNotification;
