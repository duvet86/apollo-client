import React from "react";
import { Redirect } from "react-router-dom";

import App from "components/app/App";
import { isUserAuthenticated } from "lib/authApi";

const AuthenticatedApp = props =>
  (isUserAuthenticated()
    ? <App {...props} />
    : <Redirect
        to={{
          pathname: "/login",
          state: { from: props.location }
        }}
      />);

export default AuthenticatedApp;
