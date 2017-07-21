import React from "react";
import { findDOMNode } from "react-dom";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { DragSource } from "react-dnd";
import { ListGroupItem } from "react-bootstrap";

import ItemTypes from "components/pageBuilder/ItemTypes";
import { addComponent } from "actions/components";

const componentSource = {
  beginDrag({ component }) {
    return { id: component.id };
  },
  endDrag(props, monitor) {
    const item = monitor.getItem();
    const dropResult = monitor.getDropResult();

    if (dropResult) {
      props.addComponent(item.id);
    }
  }
};

const PBComponent = ({ isDragging, connectDragSource, component }) => {
  const { icon, name } = component;
  const opacity = isDragging ? 0.4 : 1;

  return (
    <ListGroupItem
      style={{ opacity }}
      ref={instance => connectDragSource(findDOMNode(instance))}
    >
      <i className={`fa fa-${icon}`} aria-hidden="true" /> {name}
    </ListGroupItem>
  );
};

PBComponent.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired,
  component: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  })
};

const mapDispatchToProps = dispatch => ({
  addComponent: bindActionCreators(addComponent, dispatch)
});

export default connect(null, mapDispatchToProps)(
  DragSource(ItemTypes.COMPONENT, componentSource, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }))(PBComponent)
);
