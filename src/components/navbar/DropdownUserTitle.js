import "components/navbar/css/dropdownUserTitle.css";

import React from "react";
import PropTypes from "prop-types";
import { Glyphicon } from "react-bootstrap";

const DropdownUserTitle = ({ userName }) => (
  <div className="user-title-container">
    <Glyphicon className="user-icon" glyph="user" />
    <div><i className="fa fa-caret-down" aria-hidden="true"></i></div>
  </div>
);

DropdownUserTitle.propTypes = {
  userName: PropTypes.string.isRequired
};

export default DropdownUserTitle;
