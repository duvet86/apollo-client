import {
  ADD_COMPONENT,
  REMOVE_COMPONENT,
  EDIT_COMPONENT
} from "actions/components";

import { components } from "lib/test";

const initialState = [];

const componentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMPONENT:
      const component = components.find(c => c.id === action.id);
      return component ? [component, ...state] : state;

    case REMOVE_COMPONENT:
      return state.filter(c => c.id !== action.id);

    case EDIT_COMPONENT:
      return state.map(
        c => (c.id === action.id ? { ...c, config: action.config } : c)
      );

    default:
      return state;
  }
};

export default componentsReducer;
