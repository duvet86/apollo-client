import React from "react";
import { Redirect } from "react-router-dom";

import AppWithData from "components/app/AppWithData";
import { isUserAuthenticated } from "lib/authApi";

const AuthenticatedApp = (props) =>
  (isUserAuthenticated()
    ? <AppWithData {...props} />
    : <Redirect
        to={{
          pathname: "/login",
          state: { from: props.location }
        }}
      />);

export default AuthenticatedApp;
