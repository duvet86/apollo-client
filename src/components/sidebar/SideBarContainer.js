import "components/sidebar/css/searchBox.css";

import React, { Component } from "react";
import PropTypes from "prop-types";
import withLoading from "lib/withLoading";
import SideBar from "components/sidebar/SideBar";

class SideBarContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      currentlyDisplayedLinks: props.routes
    };

    this._handleChange = this._handleChange.bind(this);
    this._handleClick = this._handleClick.bind(this);
  }

  render() {
    return (
      <SideBar
        currentlyDisplayedLinks={this.state.currentlyDisplayedLinks}
        searchTerm={this.state.searchTerm}
        handleChange={this._handleChange}
        handleClick={this._handleClick}
        {...this.props}
      />
    );
  }

  _handleChange(e) {
    const { routes } = this.props;
    this.setState({
      searchTerm: e.target.value,
      currentlyDisplayedLinks: routes.filter(route => {
        return route.label.includes(e.target.value);
      })
    });
  }

  _handleClick() {
    const { routes } = this.props;
    this.setState({
      searchTerm: "",
      currentlyDisplayedLinks: routes
    });
  }
}

SideBarContainer.propTypes = {
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      locationPath: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      componentName: PropTypes.string.isRequired,
      isSideBar: PropTypes.bool
    })
  )
};

export default withLoading(SideBarContainer);
