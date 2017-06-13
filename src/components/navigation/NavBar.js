import React from "react";
import {
  Nav,
  Navbar,
  NavDropdown,
  MenuItem,
  FormGroup,
  FormControl,
  Glyphicon,
  Label
} from "react-bootstrap";

import LogoutContainer from "components/logout/LogoutContainer";
import LogoLink from "components/navigation/LogoLink";
import NotificationBadge from "components/core/NotificationBadge";

const NavBar = ({ user: { name } }) => (
  <Navbar fluid fixedTop>
    <Navbar.Header>
      <Navbar.Brand>
        <LogoLink />
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Navbar.Form pullLeft>
        <FormGroup>
          <FormControl type="text" placeholder="Search" />
        </FormGroup>
      </Navbar.Form>
      <LogoutContainer />
      <Nav pullRight>
        <NavDropdown
          style={{ width: "171px" }}
          eventKey={3}
          title={
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <Glyphicon style={{ marginRight: "10px" }} glyph="user" />{name}
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

export default NavBar;
