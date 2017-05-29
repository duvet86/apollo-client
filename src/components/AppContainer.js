import "css/app.css";

import App from "components/App";
import { graphql } from "react-apollo";
import { loggedUserQuery } from "components/graphqlQueries";

export default graphql(loggedUserQuery, {
  props: ({ ownProps, data: { loading, loggedUser, error } }) => ({
    isLoading: loading,
    user: loggedUser,
    error
  })
})(App);
