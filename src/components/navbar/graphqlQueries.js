import { gql } from "react-apollo";

const credentialsFragment = gql`
  fragment credentials on User {
    name
    role {
      appList {
        label
        key
        icon
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

export { loggedUserQuery };
