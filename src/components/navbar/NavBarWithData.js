import { graphql } from "react-apollo";

import { loggedUser } from "components/navbar/graphqlQueries";
import NavBar from "components/navbar/NavBar";

export default graphql(loggedUser, {
  props: ({ ownProps, data: { loading, error, loggedUser } }) => ({
    isLoading: loading,
    user: loggedUser,
    error
  })
})(NavBar);

