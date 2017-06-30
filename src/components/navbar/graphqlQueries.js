import { gql } from "react-apollo";

const credentialsFragment = gql`
  fragment credentials on User {
    name
    role {
      appList {
        label
        key
      }
    }
  }
`;

const loggedUserQuery = gql`
  query loggedUser {
    loggedUser {
      ...credentials
    }
  }
  ${credentialsFragment}
`;

const appLabelQuery = gql`
  query applicationByAppKey($appKey: String!) {
    applicationByAppKey(appKey: $appKey) {
      label
    }
  }
`;

export { loggedUserQuery, appLabelQuery };
