import "css/app.css";

import React from "react";
import PropTypes from "prop-types";
import { Col, Grid, Row } from "react-bootstrap";

import withLoading from "lib/withLoading";
import * as mapping from "lib/componentMapping";

import { AuthenticatedRoute } from "components/routes/CustomRoutes";
import NavBar from "components/navigation/NavBar";
import SideBar from "components/navigation/SideBar";

const App = ({ isLoading, user, routes }) => (
  <div>
    <NavBar user={user} />
    <Grid fluid>
      <Row>
        <SideBar />
        <Col sm={9} smOffset={3} md={10} mdOffset={2} className="main">
          {routes.map(({ id, locationPath, componentName }) => (
            <AuthenticatedRoute
              key={id}
              exact
              path={locationPath}
              component={mapping[componentName]}
            />
          ))}
        </Col>
      </Row>
    </Grid>
  </div>
);

App.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    jwtToken: PropTypes.shape({
      token: PropTypes.string.isRequired,
      created: PropTypes.number.isRequired
    })
  }),
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      locationPath: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      componentName: PropTypes.string.isRequired,
      isSideBar: PropTypes.bool
    })
  )
};

export default withLoading(App);
