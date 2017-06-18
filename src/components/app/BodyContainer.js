import "components/app/css/bodyContainer.css";

import React from "react";
import PropTypes from "prop-types";
import { Col } from "react-bootstrap";

import * as mapping from "lib/componentMapping";
import { AuthenticatedRoute } from "components/routes/CustomRoutes";

const BodyContainer = ({ routes }) => (
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
);

BodyContainer.propTypes = {
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

export default BodyContainer;
