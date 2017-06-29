import React from "react";
import PropTypes from "prop-types";
import {
  Nav,
  Navbar,
  NavDropdown,
  MenuItem,
  Glyphicon,
  Label
} from "react-bootstrap";

import withLoading from "lib/withLoading";

import LogoutContainer from "components/logout/LogoutContainer";
import LogoLink from "components/navigation/LogoLink";
import NotificationBadge from "components/core/NotificationBadge";

const NavBar = ({ user: { name }, appLabel }) => (
  <Navbar fluid fixedTop>
    <Navbar.Header>
      <Navbar.Brand>
        <LogoLink appName={appLabel} />
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <LogoutContainer />
      <Nav pullRight>
        <NavDropdown
          style={{ width: "171px" }}
          eventKey={3}
          title={
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <Glyphicon style={{ marginRight: "10px" }} glyph="user" />
                {name}
              </div>
              <div><NotificationBadge warning>4</NotificationBadge></div>
            </div>
          }
          id="user-nav"
          noCaret
        >
          <MenuItem eventKey={3.1}>
            Notifications
            <Label style={{ float: "right", backgroundColor: "#f7be1e" }}>
              !
            </Label>
          </MenuItem>
          <MenuItem eventKey={3.2}>Another action</MenuItem>
          <MenuItem eventKey={3.3}>Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.4}>Separated link</MenuItem>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

NavBar.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired,
  appLabel: PropTypes.string.isRequired
};

export default withLoading(NavBar);
