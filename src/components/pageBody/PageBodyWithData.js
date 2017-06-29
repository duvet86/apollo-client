import { graphql } from "react-apollo";
import { withRouter } from "react-router";

import { routesByAppKeyQuery } from "components/pageBody/graphqlQueries";
import PageBody from "components/pageBody/PageBody";

export default withRouter(
  graphql(routesByAppKeyQuery, {
    options: ({ appKey }) => ({
      variables: { appKey: appKey }
    }),
    props: ({ ownProps, data: { loading, error, routesByAppKey } }) => ({
      isLoading: loading,
      routes: routesByAppKey,
      error
    })
  })(PageBody)
);
