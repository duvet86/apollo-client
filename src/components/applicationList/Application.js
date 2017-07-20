import React from "react";
import PropTypes from "prop-types";
import { ListGroupItem, Button } from "react-bootstrap";

const Application = ({ id, label, handleArchiveApp }) =>
  <ListGroupItem>
    {label}{" "}
    <Button
      bsStyle="warning"
      bsSize="xs"
      className="pull-right"
      onClick={handleArchiveApp}
    >
      Delete
    </Button>
  </ListGroupItem>;

Application.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  handleArchiveApp: PropTypes.func.isRequired
};

export default Application;
