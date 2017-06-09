import "css/app.css";

import React from "react";
import PropTypes from "prop-types";
import { Col, Grid, Row } from "react-bootstrap";

import Loading from "components/core/Loading";
import NavBar from "components/navigation/NavBar";
import SideBar from "components/navigation/SideBar";

const App = ({ children, isLoading, user }) => (
  <Loading isLoading={isLoading}>
    <NavBar user={user} />
    <Grid fluid>
      <Row>
        <SideBar />
        <Col sm={9} smOffset={3} md={10} mdOffset={2} className="main">
          {children}
        </Col>
      </Row>
    </Grid>
  </Loading>
);

App.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default App;
