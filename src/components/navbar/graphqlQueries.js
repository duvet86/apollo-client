import { gql } from "react-apollo";

const credentialsFragment = gql`
  fragment credentials on User {
    name
    email
    jwtToken {
      token
      created
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
