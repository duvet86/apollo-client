import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { setLoading } from "actions/loading";
import { deleteLocalStorageToken } from "lib/localStorageAPI";

import Logout from "components/logout/Logout";

class LogoutContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasLoggedOut: false
    };
  }

  render() {
    return this.state.hasLoggedOut
      ? <Redirect
          to={{
            pathname: "/login",
            state: { from: this.props.location }
          }}
        />
      : <Logout handleClick={this._handleLogout} />;
  }

  _handleLogout = () => {
    const { dispatch } = this.props;

    dispatch(setLoading());
    deleteLocalStorageToken();
    this.setState({ hasLoggedOut: true });
  };
}

export default connect()(LogoutContainer);
