import { graphql } from "react-apollo";

import App from "components/App/App";
import { loggedUserQuery } from "components/graphqlQueries";

export default graphql(loggedUserQuery, {
  props: ({ ownProps, data: { loading, loggedUser, error } }) => ({
    isLoading: loading,
    user: loggedUser,
    error
  })
})(App);