import { graphql } from "react-apollo";

import { initialStatus } from "graphqlQueries";
import App from "components/app/App";

export default graphql(initialStatus, {
  props: ({ ownProps, data: { loading, error, initialStatus } }) => ({
    isLoading: loading,
    user: initialStatus ? initialStatus.user : null,
    routes: initialStatus ? initialStatus.routes : null,
    error
  })
})(App);
