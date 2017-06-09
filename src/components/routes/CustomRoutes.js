import React from "react";
import { Route, Redirect } from "react-router-dom";

import { isUserAuthenticated } from "lib/authApi";

import LoginContainer from "components/login/LoginContainer";

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

const LoginRoute = () => (
  <UnauthenticatedRoute exact path="/login" component={LoginContainer} />
);

export { AuthenticatedRoute, UnauthenticatedRoute, LoginRoute };
