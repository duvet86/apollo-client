import { gql } from "react-apollo";

const childrenInfoFragment = gql`
  fragment childrenInfo on MenuItem {
    id
    location
    label
    order
  }
`;

const menuByAppKey = gql`
  query applicationByAppKey($appKey: String!) {
    applicationByAppKey(appKey: $appKey) {
      menu {
        ...childrenInfo
        children {
          ...childrenInfo
        }
      }
    }
  }
  ${childrenInfoFragment}
`;

export { menuByAppKey };
