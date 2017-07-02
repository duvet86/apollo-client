import "components/navbar/css/dropdownNotificationTitle.css";

import React from "react";
import { Glyphicon } from "react-bootstrap";

const DropdownNotificationTitle = () => (
  <div className="notification-title-container">
    <Glyphicon className="bell-icon animated" glyph="bell" />
    <div><i className="fa fa-caret-down" aria-hidden="true" /></div>
  </div>
);

export default DropdownNotificationTitle;
