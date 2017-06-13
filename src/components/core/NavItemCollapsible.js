import "components/core/css/navItemCollapsible.css";

import React, { Component } from "react";
import { Nav, Panel } from "react-bootstrap";
import { topBarRoutes } from "lib/routes";
import NavItemLink from "components/core/NavItemLink";

class NavItemCollapsible extends Component {
  constructor(...props) {
    super(...props);
    this.state = {
      open: false
    };
  }

  render() {
    const { label } = this.props;
    let iconClassName = "fa fa-folder-o fa-lg";
    if (this.state.open) {
      iconClassName = "fa fa-folder-open-o fa-lg";
    }

    return (
      <li className="nav-item-collapsible">
        <a onClick={() => this.setState({ open: !this.state.open })}>
          <i className={iconClassName} aria-hidden="true" />
          {" "}
          {label}
        </a>
        <Panel collapsible expanded={this.state.open}>
          <Nav className="nav-sidebar">
            {topBarRoutes.map(({ id, locationPath, label }) => (
              <NavItemLink key={id} exact path={locationPath} label={label} />
            ))}
          </Nav>
        </Panel>
      </li>
    );
  }
}

export default NavItemCollapsible;