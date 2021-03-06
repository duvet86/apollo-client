import "components/navbar/css/navbar.css";

import React from "react";
import PropTypes from "prop-types";
import { Nav, Navbar } from "react-bootstrap";

import withLoading from "lib/withLoading";

import SideBarWithData from "components/sidebar/SideBarWithData";
import LogoLink from "components/navigation/LogoLink";
import DropdownUser from "components/navbar/DropdownUser";
import DropdownNotification from "components/navbar/DropdownNotification";
import DropdownApplicationList from "components/navbar/DropdownApplicationList";

const NavBar = ({ user: { name, role: { appList } }, appLabel, appKey }) => (
  <Navbar fluid fixedTop collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <LogoLink appKey={appKey} appName={appLabel} />
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <DropdownNotification />
        <DropdownUser userName={name} appKey={appKey} />
        <DropdownApplicationList appList={appList} />
        <SideBarWithData appKey={appKey} />
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

NavBar.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired,
  appLabel: PropTypes.string.isRequired,
  appKey: PropTypes.string.isRequired,
  appList: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      key: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired
    })
  )
};

export default withLoading(NavBar);
