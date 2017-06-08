import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { gql, graphql } from "react-apollo";
import { Redirect } from "react-router-dom";

import { setLoading } from "actions/loading";
import {
  getLocalStorageToken,
  deleteLocalStorageToken
} from "lib/localStorageAPI";

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
    const { mutate, dispatch } = this.props;
    const { token } = getLocalStorageToken();

    dispatch(setLoading());

    mutate({
      variables: { jwtToken: token }
    })
      .then(res => {
        deleteLocalStorageToken();
        this.setState({ hasLoggedOut: true });
      })
      .catch(err => console.error(err));
  };
}

LogoutContainer.propTypes = {
  mutate: PropTypes.func.isRequired
};

export default connect()(
  graphql(
    gql`
    mutation logout($jwtToken: String!) {
      logout(jwtToken: $jwtToken) {
        status
        message
      }
    }
  `
  )(LogoutContainer)
);
