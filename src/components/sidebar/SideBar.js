import "components/sidebar/css/sideBar.css";

import React from "react";
import PropTypes from "prop-types";
import { Col } from "react-bootstrap";

import SearchBox from "components/sidebar/SearchBox";
import LinkList from "components/sidebar/LinkList";

const SideBar = ({
  currentlyDisplayedLinks,
  searchTerm,
  handleChange,
  handleClick
}) => (
  <Col sm={3} md={2} className="sidebar">
    <SearchBox
      searchTerm={searchTerm}
      handleChange={handleChange}
      handleClick={handleClick}
    />
    <LinkList currentlyDisplayedLinks={currentlyDisplayedLinks} />
  </Col>
);

SideBar.propTypes = {
  currentlyDisplayedLinks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      locationPath: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      componentName: PropTypes.string.isRequired,
      isSideBar: PropTypes.bool
    })
  ),
  searchTerm: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default SideBar;
