import { gql } from "react-apollo";
import { credentialsFragment, routesInfoFragment } from "graphqlQueries";

const loginMutation = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      user {
        ...credentials
      }
      routes {
        ...routesInfo
      }
      error
    }
  }
  ${credentialsFragment}
  ${routesInfoFragment}
`;

export { loginMutation };
