import "components/sidebar/css/searchBox.css";

import React, { Component } from "react";
import PropTypes from "prop-types";

import withLoading from "lib/withLoading";
import SideBar from "components/sidebar/SideBar";

class SideBarContainer extends Component {
  static propTypes = {
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

  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      currentlyDisplayedLinks: props.menu
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.currentlyDisplayedLinks !== nextProps.menu) {
      this.setState({
        currentlyDisplayedLinks: nextProps.menu
      });
    }
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

  _handleChange = e => {
    const { menu } = this.props;
    this.setState({
      searchTerm: e.target.value,
      currentlyDisplayedLinks: menu.filter(route =>
        route.label.toLowerCase().includes(e.target.value)
      )
    });
  };

  _handleClick = () => {
    const { menu } = this.props;
    this.setState({
      searchTerm: "",
      currentlyDisplayedLinks: menu
    });
    this.searchInput.focus();
  };
}

export default withLoading(SideBarContainer);
