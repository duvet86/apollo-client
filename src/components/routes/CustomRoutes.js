import React from "react";
import { Route, Redirect } from "react-router-dom";

import { isUserAuthenticated } from "lib/authApi";

const AuthenticatedRoute = ({ component, ...props }) => (
  <Route
    {...props}
    render={props =>
      (isUserAuthenticated()
        ? React.createElement(component, props)
        : <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />)}
  />
);

const UnauthenticatedRoute = ({ component, ...props }) => (
  <Route
    {...props}
    render={props =>
      (!isUserAuthenticated()
        ? React.createElement(component, props)
        : <Redirect
            to={{
              pathname: "/",
              state: { from: props.location }
            }}
          />)}
  />
);

export { AuthenticatedRoute, UnauthenticatedRoute };
