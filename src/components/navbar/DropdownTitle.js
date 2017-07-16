import "components/navbar/css/dropdownTitle.css";

import React from "react";
import PropTypes from "prop-types";
import { Glyphicon } from "react-bootstrap";

const DropdownTitle = ({ className, glyph }) => (
  <div className="dropdown-title-container">
    <Glyphicon className={className} glyph={glyph} />
    <div><i className="fa fa-caret-down" aria-hidden="true" /></div>
  </div>
);

DropdownTitle.propTypes = {
  glyph: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default DropdownTitle;
