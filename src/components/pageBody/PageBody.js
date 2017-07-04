import "components/pageBody/css/pageBody.css";

import React from "react";
import PropTypes from "prop-types";
import { Switch, Route } from "react-router-dom";
import { Col } from "react-bootstrap";

import asyncComponent from "lib/asyncComponent";
import * as mapping from "lib/componentMapping";
import withLoading from "lib/withLoading";

import NotFoundRoute from "components/routes/NotFoundRoute";

const PageBody = ({ routes }) => (
  <Col sm={9} smOffset={3} md={10} mdOffset={2} className="main">
    <Switch>
      {routes.map(({ id, location, component }) => (
        <Route
          key={id}
          exact
          path={`/:appKey${location}`}
          component={mapping[component]}
        />
      ))}
      <Route
        exact
        path="/:appKey/settings"
        component={asyncComponent(() =>
          import("components/staticPages/Settings")
        )}
      />
      <Route
        exact
        path="/:appKey/profile"
        component={asyncComponent(() =>
          import("components/staticPages/Profile")
        )}
      />
      <NotFoundRoute />
    </Switch>
  </Col>
);

PageBody.propTypes = {
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      component: PropTypes.string.isRequired
    })
  )
};

export default withLoading(PageBody);
