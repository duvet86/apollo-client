import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { gql, graphql } from "react-apollo";

import Logout from "components/logout/Logout";
import browserHistory from "lib/browserHistory";
import {
  getLocalStorageToken,
  deleteLocalStorageToken
} from "lib/localStorageAPI";
import { setLoading } from "actions/loading";

const LogoutContainer = ({ mutate, dispatch }) => {
  const handleLogout = () => {
    dispatch(setLoading());
    const { token } = getLocalStorageToken();
    mutate({
      variables: { jwtToken: token }
    })
      .then(res => {
        deleteLocalStorageToken();
        browserHistory.push("/login");
      })
      .catch(err => console.error(err));
  };

  return <Logout handleClick={handleLogout} />;
};

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
