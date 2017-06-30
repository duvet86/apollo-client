import "components/navbar/css/navBar.css";

import React from "react";
import PropTypes from "prop-types";
import { Nav, Navbar, NavDropdown, MenuItem, Label } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import withLoading from "lib/withLoading";

import LogoutContainer from "components/logout/LogoutContainer";
import LogoLink from "components/navigation/LogoLink";
import UserBar from "components/navbar/UserBar";

const NavBar = ({ user: { name, role: { appList } }, appLabel }) => (
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
          className="user-nav-dropdown"
          eventKey={3}
          title={<UserBar userName={name} />}
          id="user-nav"
          noCaret
        >
          <MenuItem eventKey={3.1}>
            Notifications
            <Label style={{ float: "right", backgroundColor: "#f7be1e" }}>
              !
            </Label>
          </MenuItem>
          <MenuItem divider />
          {appList.map(({ label, key }, index) => (
            <LinkContainer key={index} to={`/${key}`}>
              <MenuItem>{label}</MenuItem>
            </LinkContainer>
          ))}
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
