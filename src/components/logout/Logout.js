import React from "react";
import PropTypes from "prop-types";
import { MenuItem } from "react-bootstrap";

const Logout = ({ handleClick }) => (
  <MenuItem onClick={handleClick}>
    <i className="fa fa-sign-out" aria-hidden="true" />{" "}Logout
  </MenuItem>
);

Logout.propTypes = {
  handleClick: PropTypes.func.isRequired
};

export default Logout;
