import { graphql } from "react-apollo";

import { getLocalStorageUserId } from "lib/localStorageAPI";
import { startAppByUserIdQuery } from "components/routes/graphqlQueries";
import RedirectToStartPage from "components/routes/RedirectToStartPage";

const queryOptions = {
  options: () => ({
    variables: { id: getLocalStorageUserId() }
  }),
  props: ({ ownProps, data: { loading, error, startAppByUserId } }) => ({
    ...ownProps,
    isLoading: loading,
    appKey: startAppByUserId && startAppByUserId.key,
    error
  })
};

export default graphql(startAppByUserIdQuery, queryOptions)(
  RedirectToStartPage
);
