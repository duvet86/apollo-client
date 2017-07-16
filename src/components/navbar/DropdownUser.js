import React from "react";
import PropTypes from "prop-types";
import { NavDropdown, MenuItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import LogoutContainer from "components/logout/LogoutContainer";
import DropdownTitle from "components/navbar/DropdownTitle";

const DropdownUser = ({ userName, appKey }) => (
  <NavDropdown
    title={<DropdownTitle className="user-icon" glyph="user" />}
    id="user-nav"
    noCaret
  >
    <LinkContainer to={`/${appKey}/profile`}>
      <MenuItem>
        <i className="fa fa-user-o" aria-hidden="true" />{" "}{userName}
      </MenuItem>
    </LinkContainer>
    <LinkContainer to={`/${appKey}/settings`}>
      <MenuItem>
        <i className="fa fa-cog" aria-hidden="true" />{" "}Settings
      </MenuItem>
    </LinkContainer>
    <MenuItem divider />
    <LogoutContainer />
  </NavDropdown>
);

DropdownUser.propTypes = {
  userName: PropTypes.string.isRequired,
  appKey: PropTypes.string.isRequired
};

export default DropdownUser;
