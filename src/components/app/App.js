import React from "react";
import PropTypes from "prop-types";
import { Grid, Row } from "react-bootstrap";

import withLoading from "lib/withLoading";
import NavBar from "components/navigation/NavBar";
import SideBarContainer from "components/sidebar/SideBarContainer";
import BodyContainer from "components/app/BodyContainer";

const App = ({ isLoading, user, routes, sideBarRoutes }) => (
  <div>
    <NavBar user={user} />
    <Grid fluid>
      <Row>
        <SideBarContainer routes={sideBarRoutes} />
        <BodyContainer routes={routes} />
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
  ),
  sideBarRoutes: PropTypes.arrayOf(
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
