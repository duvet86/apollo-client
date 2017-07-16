import { graphql } from "react-apollo";

import { getLocalStorageUserId } from "lib/localStorageAPI";
import { userByIdQuery } from "components/navbar/graphqlQueries";
import NavBar from "components/navbar/NavBar";

const queryOptions = {
  options: () => ({
    variables: { id: getLocalStorageUserId() }
  }),
  props: ({ ownProps, data: { loading, error, userById } }) => ({
    ...ownProps,
    isLoading: loading,
    user: userById,
    error
  })
};

export default graphql(userByIdQuery, queryOptions)(NavBar);
