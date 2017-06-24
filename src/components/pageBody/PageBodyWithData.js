import { graphql } from "react-apollo";
import { withRouter } from "react-router";

import { routesByAppKey } from "components/pageBody/graphqlQueries";
import PageBody from "components/pageBody/PageBody";

export default withRouter(
  graphql(routesByAppKey, {
    options: ({ location: { pathname } }) => ({
      variables: { appKey: pathname.split("/")[0] }
    }),
    props: ({ ownProps, data: { loading, error, routesByAppKey } }) => ({
      isLoading: loading,
      routes: routesByAppKey,
      error
    })
  })(PageBody)
);
