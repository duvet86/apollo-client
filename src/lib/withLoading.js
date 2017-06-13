import React, { Component } from "react";
import { Well } from "react-bootstrap";

import LoadingSpinner from "components/core/LoadingSpinner";
import AnimateContent from "components/core/AnimateContent";

export default function withLoading(WrappedComponent) {
  return class extends Component {
    render() {
      const { isLoading, error } = this.props;
      if (error) {
        return (
          <Well>
            {error.message ? error.message : "Error! Component failed to load."}
          </Well>
        );
      }
      if (isLoading) {
        return <LoadingSpinner />;
      }

      return (
        <AnimateContent>
          <WrappedComponent {...this.props} />
        </AnimateContent>
      );
    }
  };
}
