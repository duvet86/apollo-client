import { gql } from "react-apollo";

const applicationListQuery = gql`
  query applicationList {
    applicationList {
      label
      key
      icon
    }
  }
`;

export { applicationListQuery };
