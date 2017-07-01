import "components/navbar/css/navBar.css";

import React from "react";
import PropTypes from "prop-types";
import { Nav, Navbar, NavDropdown, MenuItem } from "react-bootstrap";

import withLoading from "lib/withLoading";

import LogoutContainer from "components/logout/LogoutContainer";
import LogoLink from "components/navigation/LogoLink";
import UserBar from "components/navbar/UserBar";
import MenuItemNotification from "components/navbar/MenuItemNotification";
import MenuItemApp from "components/navbar/MenuItemApp";

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
          title={<UserBar userName={name} />}
          id="user-nav"
          noCaret
        >
          <MenuItemNotification />
          <MenuItem divider />
          {appList.map(({ label, key, icon }, index) => (
            <MenuItemApp key={index} appKey={key} label={label} icon={icon} />
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
  appLabel: PropTypes.string.isRequired,
  appList: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      key: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired
    })
  )
};

export default withLoading(NavBar);
