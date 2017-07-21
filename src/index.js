import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "css/index.css";

import React from "react";
import { render } from "react-dom";
import { ApolloProvider } from "react-apollo";
import { createStore, applyMiddleware, compose } from "redux";
import { BrowserRouter, Switch } from "react-router-dom";

import asyncComponent from "lib/asyncComponent";
import apolloClient from "lib/apolloClient";
import registerServiceWorker from "lib/registerServiceWorker";

import reducers from "reducers";

import AuthenticatedRoute from "components/routes/AuthenticatedRoute";
import UnauthenticatedRoute from "components/routes/UnauthenticatedRoute";
import RedirectToStartPageWithData from "components/routes/RedirectToStartPageWithData";
import AppWithData from "components/app/AppWithData";

const store = createStore(
  reducers,
  {}, // initial state
  compose(
    applyMiddleware(apolloClient.middleware()),
    // If you are using the devToolsExtension, you can add it here also
    typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined"
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f
  )
);

render(
  <ApolloProvider store={store} client={apolloClient}>
    <BrowserRouter>
      <Switch>
        <UnauthenticatedRoute
          exact
          path="/login"
          component={asyncComponent(() =>
            import("components/login/LoginContainer")
          )}
        />
        <AuthenticatedRoute path="/:appKey" component={AppWithData} />
        <AuthenticatedRoute component={RedirectToStartPageWithData} />
      </Switch>
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById("root")
);

registerServiceWorker();
