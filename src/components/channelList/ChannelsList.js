import "css/addChannel.css";

import React from "react";
import PropTypes from "prop-types";
import { ListGroup, ListGroupItem, Button } from "react-bootstrap";

const ChannelsList = ({ channels, handleDeleteChannel }) => {
  const items = channels.map(ch => (
    <ListGroupItem key={ch.id}>
      {ch.name}
      {" "}
      <Button
        bsStyle="warning"
        bsSize="xs"
        className="pull-right"
        onClick={handleDeleteChannel.bind(null, ch.id)}
      >
        Delete
      </Button>
    </ListGroupItem>
  ));

  return (
    <ListGroup>
      {items}
    </ListGroup>
  );
};

ChannelsList.propTypes = {
  channels: PropTypes.array,
  handleDeleteChannel: PropTypes.func.isRequired
};

export default ChannelsList;
