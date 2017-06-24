import { gql } from "react-apollo";

const routesInfoFragment = gql`
  fragment routesInfo on Route {
    id
    location
    component
  }
`;

const routesByAppKey = gql`
  query routesByAppKey($appKey: String!) {
    routesByAppKey(appKey: $appKey) {
      ...routesInfo
    }
  }
  ${routesInfoFragment}
`;

export { routesByAppKey };
