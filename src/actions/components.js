export const ADD_COMPONENT = "ADD_COMPONENT";
export const REMOVE_COMPONENT = "REMOVE_COMPONENT";
export const EDIT_COMPONENT = "EDIT_COMPONENT";

export const addComponent = id => ({ type: ADD_COMPONENT, id });
export const deleteComponent = id => ({ type: REMOVE_COMPONENT, id });
export const editComponent = (id, config) => ({
  type: EDIT_COMPONENT,
  id,
  config
});
