import { gql } from "react-apollo";

const loggedUserQuery = gql`
  query loggedUser {
    loggedUser {
      email
      name
    }
  }
`;

export { loggedUserQuery };
