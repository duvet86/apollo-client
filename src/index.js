import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import "css/index.css";

import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter, Switch } from "react-router-dom";

import reducer from "reducers";
import asyncComponent from "lib/asyncComponent";
import apolloClient from "lib/apolloClient";
import registerServiceWorker from "lib/registerServiceWorker";

import AuthenticatedRoute from "components/routes/AuthenticatedRoute";
import UnauthenticatedRoute from "components/routes/UnauthenticatedRoute";
import RedirectToStartPageWithData
  from "components/routes/RedirectToStartPageWithData";
import NotFoundRoute from "components/routes/NotFoundRoute";
import App from "components/app/App";

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
        <AuthenticatedRoute path="/:appKey" component={App} />
        <RedirectToStartPageWithData from="/" />
        <NotFoundRoute />
      </Switch>
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById("root")
);

registerServiceWorker();
