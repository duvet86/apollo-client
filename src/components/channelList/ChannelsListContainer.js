import React, { Component } from "react";
import PropTypes from "prop-types";
import { graphql, compose } from "react-apollo";
import Loading from "components/core/Loading";
import AddChannel from "components/channelList/AddChannel";
import ChannelsList from "components/channelList/ChannelsList";
import {
  channelsListQuery,
  newChannelSubscription,
  addChannelMutation,
  removeChannelMutation,
  removedChannelSubscription
} from "components/channelList/graphqlQueries";

class ChannelsListContainer extends Component {
  componentDidMount() {
    this.props.subscribeToNewChannels();
    this.props.subscribeToRemovedChannels();
  }

  render() {
    const { data } = this.props;
    return (
      <Loading loading={data.loading} error={data.error}>
        <div>
          <AddChannel handleAddChannel={this.handleAddChannel} />
          <ChannelsList
            channels={data.channels}
            handleDeleteChannel={this.handleDeleteChannel}
          />
        </div>
      </Loading>
    );
  }

  handleAddChannel = evt => {
    if (evt.target.value.trim() === "") {
      return;
    }
    if (evt.keyCode === 13) {
      const { addChannelMutation, data } = this.props;
      evt.persist();
      addChannelMutation({
        variables: { name: evt.target.value },
        optimisticResponse: {
          __typename: "Mutation",
          addChannel: {
            __typename: "Channel",
            id: data.channels.length,
            name: evt.target.value
          }
        }
      }).then(res => {
        evt.target.value = "";
      });
    }
  };

  handleDeleteChannel = id => {
    const { removeChannelMutation } = this.props;
    removeChannelMutation({
      variables: { id }
    }).then(res => {});
  };
}

ChannelsList.propTypes = {
  data: PropTypes.shape({
    loading: PropTypes.bool,
    error: PropTypes.string,
    channels: PropTypes.array
  })
};

const makeQuery = compose(
  graphql(addChannelMutation, { name: "addChannelMutation" }),
  graphql(removeChannelMutation, { name: "removeChannelMutation" }),
  graphql(channelsListQuery, {
    props: props => {
      return {
        data: props.data,
        subscribeToNewChannels: () => {
          return props.data.subscribeToMore({
            document: newChannelSubscription,
            updateQuery: (prev, { subscriptionData }) => {
              if (!subscriptionData.data) {
                return prev;
              }

              return Object.assign({}, prev, {
                channels: [...prev.channels, subscriptionData.data.channelAdded]
              });
            }
          });
        },
        subscribeToRemovedChannels: () => {
          return props.data.subscribeToMore({
            document: removedChannelSubscription,
            updateQuery: (prev, { subscriptionData }) => {
              if (!subscriptionData.data) {
                return prev;
              }

              return {
                channels: prev.channels.filter(
                  c => c.id !== subscriptionData.data.channelRemoved
                )
              };
            }
          });
        }
      };
    }
  })
);

export default makeQuery(ChannelsListContainer);
