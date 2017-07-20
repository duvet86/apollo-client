import React from "react";
import PropTypes from "prop-types";
import { DragSource } from "react-dnd";

import ItemTypes from "components/pageBuilder/ItemTypes";

const componentSource = {
  beginDrag({ id }) {
    return { id };
  },

  endDrag(props, monitor) {
    const item = monitor.getItem();
    const dropResult = monitor.getDropResult();

    if (dropResult) {
      window.alert(`You dropped ${item.id} into ${dropResult.name}!`);
    }
  }
};

const PBComponent = ({ isDragging, connectDragSource, name, icon }) => {
  const opacity = isDragging ? 0.4 : 1;

  return connectDragSource(
    <div style={{ opacity }}>
      <i className={`fa fa-${icon}`} aria-hidden="true" /> {name}
    </div>
  );
};

PBComponent.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default DragSource(
  ItemTypes.COMPONENT,
  componentSource,
  (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  })
)(PBComponent);
