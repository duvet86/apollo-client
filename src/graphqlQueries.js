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

const routesInfoFragment = gql`
  fragment routesInfo on Route {
    id
    locationPath
    label
    componentName
    isSideBar
  }
`;

const initialStatus = gql`
  query initialStatus {
    initialStatus {
      user {
        ...credentials
      }
      routes {
        ...routesInfo
      }
    }
  }
  ${credentialsFragment}
  ${routesInfoFragment}
`;

const loggedUser = gql`
  query loggedUser {
    loggedUser {
      ...credentials
    }
  }
  ${credentialsFragment}
`;

const routes = gql`
  query routes {
    routes {
      ...routesInfo
    }
  }
  ${routesInfoFragment}
`;

export {
  initialStatus,
  loggedUser,
  routes,
  credentialsFragment,
  routesInfoFragment
};
