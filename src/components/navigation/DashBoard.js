import React from "react";
import { Row, Col, Table } from "react-bootstrap";

import PageHeader from "components/core/PageHeader";
import SubHeader from "components/core/SubHeader";
import SimpleLineChart from "components/charting/SimpleLineChart";
import SpecifiedDomainRadarChart
  from "components/charting/SpecifiedDomainRadarChart";

const DashBoard = () => (
  <div>
    <PageHeader>Dashboard</PageHeader>
    <Row className="row-container">
      <Col xs={6} md={6}>
        <SimpleLineChart />
      </Col>
      <Col xs={6} md={6}>
        <SpecifiedDomainRadarChart />
      </Col>
    </Row>
    <SubHeader>Section title</SubHeader>
    <Table responsive striped>
      <thead>
        <tr>
          <th>#</th>
          <th>Table heading</th>
          <th>Table heading</th>
          <th>Table heading</th>
          <th>Table heading</th>
          <th>Table heading</th>
          <th>Table heading</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
        </tr>
      </tbody>
    </Table>
  </div>
);

export default DashBoard;
