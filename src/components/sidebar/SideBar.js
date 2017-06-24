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
  handleClick,
  inputRef
}) => (
  <Col sm={3} md={2} className="sidebar">
    <SearchBox
      searchTerm={searchTerm}
      handleChange={handleChange}
      handleClick={handleClick}
      inputRef={inputRef}
    />
    <LinkList currentlyDisplayedLinks={currentlyDisplayedLinks} />
  </Col>
);

SideBar.propTypes = {
  currentlyDisplayedLinks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      location: PropTypes.string,
      label: PropTypes.string.isRequired,
      order: PropTypes.number.isRequired
    })
  ),
  searchTerm: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default SideBar;
