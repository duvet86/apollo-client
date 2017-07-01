import { graphql } from "react-apollo";

import { loggedUserQuery } from "components/navbar/graphqlQueries";
import NavBar from "components/navbar/NavBar";

const loggedUserOptions = {
  props: ({ ownProps, data: { loading, error, loggedUser } }) => ({
    ...ownProps,
    isLoading: loading,
    user: loggedUser,
    error
  })
};

export default graphql(loggedUserQuery, loggedUserOptions)(NavBar);
