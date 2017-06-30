import { gql } from "react-apollo";

const startAppByLoggedUserQuery = gql`
  query startAppByLoggedUserQuery {
    startAppByLoggedUser {
      key
    }
  }
`;

export { startAppByLoggedUserQuery };
