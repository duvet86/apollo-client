import "bootstrap/dist/css/bootstrap.css";
import "css/index.css";

import {
  AuthenticatedRoute,
  CustomRoute,
} from "components/routes/CustomRoutes";

import { ApolloProvider } from "react-apollo";
import AppContainer from "components/AppContainer";
import LoginContainer from "components/login/LoginContainer";
import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router";
import { Switch } from "react-router-dom";
import apolloClient from "lib/apolloClient";
import browserHistory from "lib/browserHistory";
import { createStore } from "redux";
import reducer from "reducers";
import routes from "components/routes";

const store = createStore(reducer);

ReactDOM.render(
  <ApolloProvider client={apolloClient} store={store}>
    <Router history={browserHistory}>
      <Switch>
        <CustomRoute exact path="/login" component={LoginContainer} />
        <AppContainer>
          {routes.map(({ id, path, component }) => (
            <AuthenticatedRoute
              key={id}
              exact
              path={path}
              component={component}
            />
          ))}
        </AppContainer>
      </Switch>
    </Router>
  </ApolloProvider>,
  document.getElementById("root")
);
