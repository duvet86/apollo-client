import "components/pageBody/css/pageBody.css";

import React from "react";
import PropTypes from "prop-types";
import { Col } from "react-bootstrap";

import * as mapping from "lib/componentMapping";
import withLoading from "lib/withLoading";
import { AuthenticatedRoute } from "components/routes/CustomRoutes";

const PageBody = ({ routes }) => (
  <Col sm={9} smOffset={3} md={10} mdOffset={2} className="main">
    {routes.map(({ id, location, component }) => (
      <AuthenticatedRoute
        key={id}
        exact
        path={location}
        component={mapping[component]}
      />
    ))}
  </Col>
);

PageBody.propTypes = {
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      component: PropTypes.string.isRequired
    })
  )
};

export default withLoading(PageBody);
