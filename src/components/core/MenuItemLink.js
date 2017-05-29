import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { MenuItem } from "react-bootstrap";

const MenuItemLink = ({ path, label, ...props }) => (
  <LinkContainer {...props} to={path}>
    <MenuItem>{label}</MenuItem>
  </LinkContainer>
);

export default MenuItemLink;
