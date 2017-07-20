import React from "react";
import PropTypes from "prop-types";
import { ListGroup, ListGroupItem } from "react-bootstrap";

import PBComponent from "components/pageBuilder/PBComponent";

const PBComponentList = ({ components }) =>
  <ListGroup>
    {components.map(component =>
      <ListGroupItem key={component.id}>
        <PBComponent id={component.id} name={component.name} icon={component.icon} />
      </ListGroupItem>
    )}
  </ListGroup>;

PBComponentList.propTypes = {
  components: PropTypes.array.isRequired
};

export default PBComponentList;
