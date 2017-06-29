import React from "react";
import { Grid, Row, Col, Jumbotron, Button } from "react-bootstrap";

const NotFound = () => (
  <Grid style={{ maxWidth: "730px" }}>
    <Row>
      <Col md={12}>
        <Jumbotron style={{ textAlign: "center" }}>
          <h1>404 Not Found</h1>
          <p>Sorry, an error has occured: requested page not found.</p>
          <p style={{ display: "flex", justifyContent: "space-around" }}>
            <Button bsStyle="primary" bsSize="large">
              <i className="fa fa-home" aria-hidden="true" />
              {" "}
              Take me Home
            </Button>
            <Button bsSize="large">
              <i className="fa fa-life-ring" aria-hidden="true" />
              {" "}
              Contact Support
            </Button>
          </p>
        </Jumbotron>
      </Col>
    </Row>
  </Grid>
);

export default NotFound;
