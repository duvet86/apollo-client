import React from "react";
import AddChannelContainer from "components/channelList/AddChannelContainer";
import ChannelsListContainer
  from "components/channelList/ChannelsListContainer";

const ChannelPage = () => {
  return (
    <div>
      <AddChannelContainer />
      <ChannelsListContainer />
    </div>
  );
};

export default ChannelPage;
