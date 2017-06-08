import "bootstrap/dist/css/bootstrap.css";
import "css/index.css";

import {
  AuthenticatedRoute,
  CustomRoute
} from "components/routes/CustomRoutes";

import { ApolloProvider } from "react-apollo";
import AuthenticatedApp from "components/App/AuthenticatedApp";
import LoginContainer from "components/login/LoginContainer";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch } from "react-router-dom";
import apolloClient from "lib/apolloClient";
import { createStore } from "redux";
import reducer from "reducers";
import routes from "lib/routes";

const store = createStore(reducer);

ReactDOM.render(
  <ApolloProvider client={apolloClient} store={store}>
    <BrowserRouter>
      <Switch>
        <CustomRoute exact path="/login" component={LoginContainer} />
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
