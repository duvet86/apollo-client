import { graphql } from "react-apollo";

import { applicationListQuery } from "components/applicationList/graphqlQueries";
import applicationList from "components/navbar/NavBar";

const queryOptions = {
  props: ({ ownProps, data: { loading, error, applicationList } }) => ({
    isLoading: loading,
    applications: applicationList,
    error
  })
};

export default graphql(applicationListQuery, queryOptions)(applicationList);
