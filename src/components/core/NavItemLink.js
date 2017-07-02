import React from "react";
import PropTypes from "prop-types";
import { LinkContainer } from "react-router-bootstrap";
import { NavItem } from "react-bootstrap";

const NavItemLink = ({ path, label, ...props }) => (
  <LinkContainer className="sidebar-item-link" {...props} to={path}>
    <NavItem>
      <i className="fa fa-link" aria-hidden="true" />{" "}{label}
    </NavItem>
  </LinkContainer>
);

NavItemLink.propTypes = {
  path: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

export default NavItemLink;
