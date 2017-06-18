import "components/sidebar/css/linkList.css";

import React from "react";
import PropTypes from "prop-types";
import { Nav } from "react-bootstrap";

import NavItemLink from "components/core/NavItemLink";
import NavItemCollapsible from "components/core/NavItemCollapsible";

const LinkList = ({ currentlyDisplayedLinks }) => (
  <Nav className="nav-sidebar">
    {currentlyDisplayedLinks.map(({ id, locationPath, label }) => (
      <NavItemLink key={id} exact path={locationPath} label={label} />
    ))}
    <NavItemCollapsible label="Advanced" />
  </Nav>
);

LinkList.propTypes = {
  currentlyDisplayedLinks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      locationPath: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      componentName: PropTypes.string.isRequired,
      isSideBar: PropTypes.bool
    })
  )
};

export default LinkList;
