import { graphql } from "react-apollo";
import { withRouter } from "react-router";

import { menuByAppKey } from "components/sidebar/graphqlQueries";
import SideBarContainer from "components/sidebar/SideBarContainer";

export default withRouter(
  graphql(menuByAppKey, {
    options: ({ location: { pathname } }) => ({
      variables: { appKey: pathname.split("/")[0] }
    }),
    props: ({ ownProps, data: { loading, error, applicationByAppKey } }) => ({
      isLoading: loading,
      menu: applicationByAppKey && applicationByAppKey.menu,
      error
    })
  })(SideBarContainer)
);
