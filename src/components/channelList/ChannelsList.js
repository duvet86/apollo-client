import React from "react";
import PropTypes from "prop-types";
import { ListGroup } from "react-bootstrap";
import Channel from "components/channelList/Channel";

const ChannelsList = ({ channels, handleDeleteChannel }) => {
  const items = channels.map(ch => (
    <Channel
      key={ch.id}
      id={ch.id}
      name={ch.name}
      handleDeleteChannel={handleDeleteChannel}
    />
  ));

  return <ListGroup>{items}</ListGroup>;
};

ChannelsList.propTypes = {
  channels: PropTypes.array,
  handleDeleteChannel: PropTypes.func.isRequired
};

export default ChannelsList;
