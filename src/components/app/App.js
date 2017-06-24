import React from "react";
import { Grid, Row } from "react-bootstrap";

import NavBarWithData from "components/navbar/NavBarWithData";
import SideBarWithData from "components/sidebar/SideBarWithData";
import PageBodyWithData from "components/pageBody/PageBodyWithData";

const App = () => (
  <div>
    <NavBarWithData />
    <Grid fluid>
      <Row>
        <SideBarWithData />
        <PageBodyWithData />
      </Row>
    </Grid>
  </div>
);

export default App;
