import logo from "logo.svg";

import React from "react";
import { Link } from "react-router-dom";
import {
  Nav,
  Navbar,
  NavDropdown,
  MenuItem,
  FormGroup,
  FormControl,
  Image,
  Badge,
  Glyphicon,
  Label
} from "react-bootstrap";
import { topBarRoutes } from "lib/routes";
import NavItemLink from "components/core/NavItemLink";
import LogoutContainer from "components/logout/LogoutContainer";

const NavBar = ({ user: { name } }) => (
  <Navbar fluid fixedTop>
    <Navbar.Header>
      <Navbar.Brand>
        <Link className="navbar-brand" to="/">
          <Image src={logo} className="app-logo" responsive />
        </Link>
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
              <div><Badge className="badge-warning">4</Badge></div>
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
        {topBarRoutes.map(({ id, path, label }) => (
          <NavItemLink key={id} exact path={path} label={label} />
        ))}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavBar;
