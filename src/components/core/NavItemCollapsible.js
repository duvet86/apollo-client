import "components/core/css/navItemCollapsible.css";

import React, { Component } from "react";
import PropTypes from "prop-types";
import { Nav, Panel } from "react-bootstrap";
import NavItemLink from "components/core/NavItemLink";

class NavItemCollapsible extends Component {
  constructor(...props) {
    super(...props);
    this.state = {
      open: false
    };
  }

  render() {
    const { label, children } = this.props;
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
            {children.map(({ id, location, label }) => (
              <NavItemLink key={id} exact path={location} label={label} />
            ))}
          </Nav>
        </Panel>
      </li>
    );
  }
}

NavItemCollapsible.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      location: PropTypes.string,
      label: PropTypes.string.isRequired,
      order: PropTypes.number.isRequired
    })
  )
};

export default NavItemCollapsible;
