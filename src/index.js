import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import "css/index.css";

import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter, Switch } from "react-router-dom";

import asyncComponent from "lib/asyncComponent";
import apolloClient from "lib/apolloClient";
import registerServiceWorker from "lib/registerServiceWorker";
import reducer from "reducers";

import AuthenticatedApp from "components/app/AuthenticatedApp";
import { UnauthenticatedRoute } from "components/routes/CustomRoutes";

const store = createStore(reducer);

render(
  <ApolloProvider client={apolloClient} store={store}>
    <BrowserRouter>
      <Switch>
        <UnauthenticatedRoute
          exact
          path="/login"
          component={asyncComponent(() =>
            import("components/login/LoginContainer")
          )}
        />
        <AuthenticatedApp />
      </Switch>
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById("root")
);

registerServiceWorker();
