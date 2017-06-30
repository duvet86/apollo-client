import { graphql } from "react-apollo";

import { menuByAppKeyQuery } from "components/sidebar/graphqlQueries";
import SideBarContainer from "components/sidebar/SideBarContainer";

export default graphql(menuByAppKeyQuery, {
  options: ({ appKey }) => ({
    variables: { appKey: appKey }
  }),
  props: ({ ownProps, data: { loading, error, applicationByAppKey } }) => ({
    isLoading: loading,
    menu: applicationByAppKey && applicationByAppKey.menu,
    appKey: ownProps.appKey,
    error
  })
})(SideBarContainer);
