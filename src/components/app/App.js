import React from "react";
import PropTypes from "prop-types";
import { Grid, Row } from "react-bootstrap";

import NavBarWithData from "components/navbar/NavBarWithData";
import SideBarWithData from "components/sidebar/SideBarWithData";
import PageBodyWithData from "components/pageBody/PageBodyWithData";

const App = ({ match: { params: { appKey } } }) => (
  <div>
    <NavBarWithData appKey={appKey} />
    <Grid fluid>
      <Row>
        <SideBarWithData appKey={appKey} />
        <PageBodyWithData appKey={appKey} />
      </Row>
    </Grid>
  </div>
);

App.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      appKey: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default App;
