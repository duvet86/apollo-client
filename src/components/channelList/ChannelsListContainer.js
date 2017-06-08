import React, { Component } from "react";
import PropTypes from "prop-types";
import { graphql, compose } from "react-apollo";

import Loading from "components/core/Loading";
import ChannelsList from "components/channelList/ChannelsList";
import AddChannelContainer from "components/channelList/AddChannelContainer";
import {
  channelsListQuery,
  newChannelSubscription,
  removeChannelMutation,
  removedChannelSubscription
} from "components/channelList/graphqlQueries";

class ChannelsListContainer extends Component {
  componentDidMount() {
    this.props.subscribeToNewChannels();
    this.props.subscribeToRemovedChannels();
  }

  render() {
    const { isLoading, error, channels } = this.props;
    return (
      <Loading loading={isLoading} error={error}>
        <AddChannelContainer />
        <ChannelsList
          channels={channels}
          handleDeleteChannel={this._handleDeleteChannel}
        />
      </Loading>
    );
  }

  _handleDeleteChannel = id => {
    const { removeChannelMutation } = this.props;
    removeChannelMutation({
      variables: { id },
      optimisticResponse: {
        __typename: "Mutation",
        removeChannel: {
          __typename: "ID!",
          id: id
        }
      },
      update: (store, { data: { removeChannel } }) => {
        // Read the data from our cache for this query.
        const data = store.readQuery({ query: channelsListQuery });
        const index = data.channels.findIndex(c => {
          return c.id === removeChannel.id;
        });
        if (index === -1) {
          return;
        }

        data.channels.splice(index, 1);
        // Write our data back to the cache.
        store.writeQuery({ query: channelsListQuery, data });
      }
    }).then(res => {});
  };
}

ChannelsListContainer.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  channels: PropTypes.array
};

const makeQuery = compose(
  graphql(removeChannelMutation, { name: "removeChannelMutation" }),
  graphql(channelsListQuery, {
    props: ({
      ownProps,
      data: { loading, channels, error, subscribeToMore }
    }) => ({
      isLoading: loading,
      channels,
      error,
      subscribeToNewChannels: () =>
        subscribeToMore({
          document: newChannelSubscription,
          updateQuery: (prev, { subscriptionData: { data } }) => {
            if (data == null) {
              return prev;
            }

            return Object.assign({}, prev, {
              channels: [...prev.channels, data.channelAdded]
            });
          }
        }),
      subscribeToRemovedChannels: () =>
        subscribeToMore({
          document: removedChannelSubscription,
          updateQuery: (prev, { subscriptionData: { data } }) => {
            if (data == null) {
              return prev;
            }

            return Object.assign({}, prev, {
              channels: prev.channels.filter(c => c.id !== data.channelRemoved)
            });
          }
        })
    })
  })
);

export default makeQuery(ChannelsListContainer);
