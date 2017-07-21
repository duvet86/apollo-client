import { combineReducers } from "redux";

import apolloClient from "lib/apolloClient";
import components from "reducers/components";

export default combineReducers({
  components,
  apollo: apolloClient.reducer()
});
