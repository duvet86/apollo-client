import { gql } from "react-apollo";

const loginMutation = gql`
    mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      user {
        jwtToken
        name
        email
      }
      error
    }
  }
`;

export { loginMutation };
