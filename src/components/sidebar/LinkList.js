import "components/sidebar/css/linkList.css";

import React from "react";
import PropTypes from "prop-types";
import { Nav } from "react-bootstrap";

import NavItemLink from "components/core/NavItemLink";
import NavItemCollapsible from "components/core/NavItemCollapsible";

function createMenu(links, appKey) {
  return links.map(({ id, location, label, children }) => {
    if (location) {
      return (
        <NavItemLink
          key={id}
          exact
          path={`/${appKey}${location}`}
          label={label}
        />
      );
    }
    return children.children
      ? createMenu(children.children, appKey)
      : <NavItemCollapsible
          key={id}
          appKey={appKey}
          label={label}
          children={children}
        />;
  });
}

const LinkList = ({ appKey, currentlyDisplayedLinks }) => {
  return (
    <Nav className="nav-sidebar">
      {createMenu(currentlyDisplayedLinks, appKey)}
    </Nav>
  );
};

LinkList.propTypes = {
  appKey: PropTypes.string.isRequired,
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
