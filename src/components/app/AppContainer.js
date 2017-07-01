import React from "react";
import PropTypes from "prop-types";

import withLoading from "lib/withLoading";

import App from "components/app/App";
import NotFoundRoute from "components/routes/NotFoundRoute";

function getAppByKey(applicationList, appKey) {
  return applicationList.filter(item => item.key === appKey)[0];
}

const AppContainer = ({ applicationList, match: { params: { appKey } } }) => {
  const app = getAppByKey(applicationList, appKey);
  if (app) {
    return (
      <App
        appList={applicationList}
        currentAppLabel={app.label}
        currentAppKey={app.key}
      />
    );
  }
  return <NotFoundRoute />;
};

AppContainer.propTypes = {
  applicationList: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      key: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      appKey: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default withLoading(AppContainer);
