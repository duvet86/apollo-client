import "css/app.css";

import React from "react";
import { graphql } from "react-apollo";
import { Redirect } from "react-router-dom";

import App from "components/App";
import { loggedUserQuery } from "components/graphqlQueries";
import { isUserAuthenticated } from "lib/authAPI";

const AppContainer = props =>
  (isUserAuthenticated()
    ? <App {...props} />
    : <Redirect
        to={{
          pathname: "/login",
          state: { from: props.location }
        }}
      />);

export default graphql(loggedUserQuery, {
  props: ({ ownProps, data: { loading, loggedUser, error } }) => ({
    isLoading: loading,
    user: loggedUser,
    error
  })
})(AppContainer);
