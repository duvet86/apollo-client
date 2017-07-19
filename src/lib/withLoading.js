import React, { Component } from "react";
import { Col } from "react-bootstrap";

import LoadingSpinner from "components/core/LoadingSpinner";
import AnimateContent from "components/core/AnimateContent";

export default function withLoading(WrappedComponent, showSpinner = false) {
  return class extends Component {
    render() {
      const { isLoading, error } = this.props;
      if (error) {
        return (
          <Col
            style={{ textAlign: "center", marginTop: "50px" }}
            sm={9}
            smOffset={3}
            md={10}
            mdOffset={2}
          >
            <h3 className="text-danger">
              <i
                className="fa fa-exclamation-triangle"
                aria-hidden="true"
              />{" "}
              {error
                ? JSON.stringify(error)
                : "Error! Component failed to load."}
            </h3>
          </Col>
        );
      }
      if (isLoading) {
        return showSpinner ? <LoadingSpinner /> : null;
      }

      return (
        <AnimateContent>
          <WrappedComponent {...this.props} />
        </AnimateContent>
      );
    }
  };
}
