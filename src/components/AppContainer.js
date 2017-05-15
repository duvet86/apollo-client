import "css/app.css";

import App from "components/App";
import { connect } from "react-redux";

const mapStateToProps = ({ loading }) => {
  return {
    isLoading: loading.isLoading
  };
};

const AppContainer = connect(mapStateToProps)(App);

export default AppContainer;
