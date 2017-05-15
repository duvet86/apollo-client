import { gql, graphql } from "react-apollo";

import Logout from "components/logout/Logout";
import PropTypes from "prop-types";
import React from "react";
import browserHistory from "lib/browserHistory";
import { connect } from "react-redux";
import { deleteLocalStorageToken } from "lib/localStorageAPI";
import { setLoading } from "actions/loading";

const LogoutContainer = ({ mutate, dispatch }) => {
  const handleLogout = () => {
    dispatch(setLoading());
    const jwtToken = localStorage.getItem("jwt_token");
    mutate({
      variables: { jwtToken }
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
