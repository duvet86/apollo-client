import React from "react";
import PropTypes from "prop-types";
import { NavDropdown, MenuItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import DropdownTitle from "components/navbar/DropdownTitle";

const DropdownApplicationList = ({ appList }) => (
  <NavDropdown title={<DropdownTitle glyph="th-large" />} id="user-nav" noCaret>
    {appList.map(({ label, key, icon }, index) => (
      <LinkContainer key={index} to={`/${key}`}>
        <MenuItem>
          <i className={`fa fa-${icon}`} aria-hidden="true" />{" "}{label}
        </MenuItem>
      </LinkContainer>
    ))}
  </NavDropdown>
);

DropdownApplicationList.propTypes = {
  appList: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      key: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired
    })
  )
};

export default DropdownApplicationList;
