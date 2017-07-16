import React from "react";
import PropTypes from "prop-types";
import { LinkContainer } from "react-router-bootstrap";
import { MenuItem } from "react-bootstrap";

const MenuItemApp = ({ appKey, label, icon }) => (
  <LinkContainer to={`/${appKey}`}>
    <MenuItem>
      <i className={`fa fa-${icon}`} aria-hidden="true" />{" "}{label}
    </MenuItem>
  </LinkContainer>
);

MenuItemApp.propTypes = {
  label: PropTypes.string.isRequired,
  appKey: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default MenuItemApp;
