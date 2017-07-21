import React from "react";
import PropTypes from "prop-types";
import { ListGroup } from "react-bootstrap";

import PBComponent from "components/pageBuilder/PBComponent";

const PBComponentList = ({ components }) =>
  <ListGroup>
    {components.map(component =>
      <PBComponent key={component.id} component={component} />
    )}
  </ListGroup>;

PBComponentList.propTypes = {
  components: PropTypes.array.isRequired
};

export default PBComponentList;
