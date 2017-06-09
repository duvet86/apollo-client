import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter, Switch } from "react-router-dom";

import asyncComponent from "lib/asyncComponent";
import routes from "lib/routes";
import apolloClient from "lib/apolloClient";
import registerServiceWorker from "lib/registerServiceWorker";
import reducer from "reducers";

import AuthenticatedApp from "components/app/AuthenticatedApp";
import {
  AuthenticatedRoute,
  UnauthenticatedRoute
} from "components/routes/CustomRoutes";

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
        <AuthenticatedApp>
          {routes.map(({ id, path, component }) => (
            <AuthenticatedRoute
              key={id}
              exact
              path={path}
              component={component}
            />
          ))}
        </AuthenticatedApp>
      </Switch>
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById("root")
);

registerServiceWorker();
