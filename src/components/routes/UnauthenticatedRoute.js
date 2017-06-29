import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

import { isUserAuthenticated } from "lib/authApi";

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

UnauthenticatedRoute.propTypes = {
  component: PropTypes.func.isRequired
};

export default UnauthenticatedRoute;
