import { graphql } from "react-apollo";

import { startAppByLoggedUserQuery } from "components/routes/graphqlQueries";
import RedirectToStartPage from "components/routes/RedirectToStartPage";

const startAppByLoggedUserQueryOptions = {
  props: ({ ownProps, data: { loading, error, startAppByLoggedUser } }) => ({
    ...ownProps,
    isLoading: loading,
    appKey: startAppByLoggedUser && startAppByLoggedUser.key,
    error
  })
};

export default graphql(
  startAppByLoggedUserQuery,
  startAppByLoggedUserQueryOptions
)(RedirectToStartPage);
