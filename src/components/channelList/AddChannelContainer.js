import React from "react";
import PropTypes from "prop-types";
import { gql, graphql } from "react-apollo";
import { connect } from "react-redux";
import { setLoading, removeLoading } from "actions/loading";

import AddChannel from "components/channelList/AddChannel";

const AddChannelContainer = ({ mutate, dispatch }) => {
  const handleKeyUp = evt => {
    const targetValue = evt.target.value;
    if (evt.keyCode !== 13 || targetValue.trim() === "") {
      return;
    }

    dispatch(setLoading());
    evt.target.value = "";
    mutate({
      variables: { name: targetValue }
    }).then(res => dispatch(removeLoading()));
  };

  return <AddChannel handleKeyUp={handleKeyUp} />;
};

AddChannelContainer.propTypes = {
  mutate: PropTypes.func.isRequired
};

export default connect()(
  graphql(
    gql`
    mutation addChannel($name: String!) {
      addChannel(name: $name) {
        id
        name
      }
    }
  `
  )(AddChannelContainer)
);
