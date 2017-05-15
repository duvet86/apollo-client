import "css/app.css";

import { Col, Grid, Row } from "react-bootstrap";

import Loading from "components/core/Loading";
import NavBar from "components/navigation/NavBar";
import PropTypes from "prop-types";
import React from "react";
import SideBar from "components/navigation/SideBar";

const App = ({ children, isLoading }) => (
  <Loading loading={isLoading}>
    <div>
      <NavBar />
      <Grid fluid>
        <Row>
          <SideBar />
          <Col sm={9} smOffset={3} md={10} mdOffset={2} className="main">
            {children}
          </Col>
        </Row>
      </Grid>
    </div>
  </Loading>
);

App.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default App;
