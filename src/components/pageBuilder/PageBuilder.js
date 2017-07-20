import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "react-bootstrap";
import { DragDropContextProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

import PageHeader from "components/core/PageHeader";
import PBComponentList from "components/pageBuilder/PBComponentList";
import PBDroppableArea from "components/pageBuilder/PBDroppableArea";

const PageBuilder = ({ components }) =>
  <div>
    <PageHeader>Page Builder</PageHeader>
    <DragDropContextProvider backend={HTML5Backend}>
      <Row>
        <Col md={3}>
          <PBComponentList components={components} />
        </Col>
        <Col md={9}>
          <PBDroppableArea />
        </Col>
      </Row>
    </DragDropContextProvider>
  </div>;

PageBuilder.propTypes = {
  components: PropTypes.array.isRequired
};

export default PageBuilder;
