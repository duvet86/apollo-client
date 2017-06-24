import "components/sidebar/css/linkList.css";

import React from "react";
import PropTypes from "prop-types";
import { Nav } from "react-bootstrap";

import NavItemLink from "components/core/NavItemLink";
import NavItemCollapsible from "components/core/NavItemCollapsible";

const LinkList = ({ currentlyDisplayedLinks }) => {
  function createMenu(links) {
    return links.map(({ id, location, label, children }) => {
      if (location) {
        return <NavItemLink key={id} exact path={location} label={label} />;
      }
      return children.children
        ? createMenu(children.children)
        : <NavItemCollapsible key={id} label={label} children={children} />;
    });
  }

  return (
    <Nav className="nav-sidebar">
      {createMenu(currentlyDisplayedLinks)}
    </Nav>
  );
};

LinkList.propTypes = {
  currentlyDisplayedLinks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      location: PropTypes.string,
      label: PropTypes.string.isRequired,
      order: PropTypes.number.isRequired
    })
  )
};

export default LinkList;
