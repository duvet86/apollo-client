import update from "immutability-helper";
import { SET_LOADING, REMOVE_LOADING } from "actions/loading";

const initialState = { isLoading: false };

const loading = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
    case REMOVE_LOADING:
      return update(state, {
        $merge: {
          isLoading: action.isLoading
        }
      });
    default:
      return state;
  }
};

export default loading;
