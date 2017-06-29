import { graphql, compose } from "react-apollo";

import {
  loggedUserQuery,
  appLabelQuery
} from "components/navbar/graphqlQueries";
import NavBar from "components/navbar/NavBar";

const loggedUserOptions = {
  props: ({ ownProps, data: { loading, error, loggedUser } }) => ({
    isLoading: loading,
    user: loggedUser,
    error
  })
};

const appKeyOptions = {
  options: ({ appKey }) => ({
    variables: { appKey: appKey }
  }),
  props: ({ ownProps, data: { loading, error, applicationByAppKey } }) => ({
    appLabel: applicationByAppKey && applicationByAppKey.label,
    error
  })
};

export default compose(
  graphql(loggedUserQuery, loggedUserOptions),
  graphql(appLabelQuery, appKeyOptions)
)(NavBar);
