import React from "react";
import PropTypes from "prop-types";
import { ListGroupItem, Button } from "react-bootstrap";

const Channel = ({ id, name, handleDeleteChannel }) => (
  <ListGroupItem>
    {name}
    {" "}
    <Button
      bsStyle="warning"
      bsSize="xs"
      className="pull-right"
      onClick={handleDeleteChannel.bind(null, id)}
    >
      Delete
    </Button>
  </ListGroupItem>
);

Channel.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  handleDeleteChannel: PropTypes.func.isRequired
};

export default Channel;
