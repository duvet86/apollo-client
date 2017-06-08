import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter, Switch } from "react-router-dom";

import routes from "lib/routes";
import apolloClient from "lib/apolloClient";
import reducer from "reducers";
import registerServiceWorker from "./registerServiceWorker";

import AuthenticatedApp from "components/App/AuthenticatedApp";
import LoginContainer from "components/login/LoginContainer";
import {
  AuthenticatedRoute,
  CustomRoute
} from "components/routes/CustomRoutes";

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

registerServiceWorker();
