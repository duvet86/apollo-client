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

const loggedUser = gql`
  query loggedUser {
    loggedUser {
      ...credentials
    }
  }
  ${credentialsFragment}
`;

export { loggedUser };
