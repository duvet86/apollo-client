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
      currentlyDisplayedLinks: props.menu
    };

    this._handleChange = this._handleChange.bind(this);
    this._handleClick = this._handleClick.bind(this);
  }

  render() {
    return (
      <SideBar
        appKey={this.props.appKey}
        currentlyDisplayedLinks={this.state.currentlyDisplayedLinks}
        searchTerm={this.state.searchTerm}
        handleChange={this._handleChange}
        handleClick={this._handleClick}
        inputRef={input => this.searchInput = input}
      />
    );
  }

  _handleChange(e) {
    const { menu } = this.props;
    this.setState({
      searchTerm: e.target.value,
      currentlyDisplayedLinks: menu.filter(route =>
        route.label.toLowerCase().includes(e.target.value)
      )
    });
  }

  _handleClick() {
    const { menu } = this.props;
    this.setState({
      searchTerm: "",
      currentlyDisplayedLinks: menu
    });
    this.searchInput.focus();
  }
}

SideBarContainer.propTypes = {
  appKey: PropTypes.string.isRequired,
  menu: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      location: PropTypes.string,
      label: PropTypes.string.isRequired,
      order: PropTypes.number.isRequired
    })
  )
};

export default withLoading(SideBarContainer);
