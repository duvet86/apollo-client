import { gql } from "react-apollo";

const loginMutation = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      error
      user {
        jwtToken {
          token
          created
        }
        role {
          description
          startApp {
            key
          }
        }
      }
    }
  }
`;

export { loginMutation };
