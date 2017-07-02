import React from "react";
import PropTypes from "prop-types";
import { Grid, Row } from "react-bootstrap";

import NavBarWithData from "components/navbar/NavBarWithData";
import PageBodyWithData from "components/pageBody/PageBodyWithData";

const App = ({ appList, currentAppLabel, currentAppKey }) => (
  <div>
    <NavBarWithData
      appList={appList}
      appLabel={currentAppLabel}
      appKey={currentAppKey}
    />
    <Grid fluid>
      <Row>
        <PageBodyWithData appKey={currentAppKey} />
      </Row>
    </Grid>
  </div>
);

App.propTypes = {
  appList: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      key: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  currentAppLabel: PropTypes.string.isRequired,
  currentAppKey: PropTypes.string.isRequired
};

export default App;
