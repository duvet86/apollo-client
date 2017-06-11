import React, { Component } from "react";
import { Well } from "react-bootstrap";

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
        return <div id="loader" />;
      }

      return <WrappedComponent {...this.props} />;
    }
  };
}
