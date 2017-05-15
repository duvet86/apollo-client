import "css/login.css";

import React, { Component } from "react";
import { gql, graphql } from "react-apollo";

import Login from "components/login/Login";
import PropTypes from "prop-types";
import browserHistory from "lib/browserHistory";
import { connect } from "react-redux";
import { removeLoading } from "actions/loading";
import { setLocalStorageToken } from "lib/localStorageAPI";

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errorMessage: "",
      isLoading: false
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(removeLoading());
  }

  componentWillMount() {
    document.body.style.paddingTop = "40px";
    document.body.style.paddingBottom = "40px";
    document.body.style.backgroundColor = "#eee";
  }

  componentWillUnmount() {
    document.body.style.paddingTop = null;
    document.body.style.paddingBottom = null;
    document.body.style.backgroundColor = null;
  }

  render() {
    return (
      <Login
        handleSubmit={this.handleSubmit}
        getEmailValidationState={this.getEmailValidationState}
        getPasswordValidationState={this.getPasswordValidationState}
        handleEmailChange={this.handleEmailChange}
        handlePasswordChange={this.handlePasswordChange}
        emailValue={this.state.email}
        passwordValue={this.state.password}
        errorMessage={this.state.errorMessage}
        isLoading={this.state.isLoading}
      />
    );
  }

  getEmailValidationState = () => {
    if (this.state.errorMessage) return "error";
    const length = this.state.email.length;
    if (length > 8) return "success";
    else if (length > 0) return "error";
  };

  getPasswordValidationState = () => {
    if (this.state.errorMessage) return "error";
    const length = this.state.password.length;
    if (length > 3) return "success";
    else if (length > 0) return "error";
  };

  handleEmailChange = evt => {
    this.setState({ email: evt.target.value });
  };

  handlePasswordChange = evt => {
    this.setState({ password: evt.target.value });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    const email = this.state.email.trim();
    const password = this.state.password.trim();
    if (!email || !password) {
      return;
    }

    this.setState({ isLoading: true });

    this.props
      .mutate({
        variables: {
          email,
          password
        }
      })
      .then(({ data }) => {
        const { login } = data;
        if (login.error) {
          this.setState({ isLoading: false });
          this.setState({ errorMessage: login.error });
        } else {
          const { user } = login;
          setLocalStorageToken(user.jwtToken);
          browserHistory.push("/");
        }
      });
  };
}

LoginContainer.propTypes = {
  mutate: PropTypes.func.isRequired
};

export default connect()(
  graphql(
    gql`
    mutation login($email: String!, $password: String!) {
      login(email: $email, password: $password) {
        user {
          jwtToken
          email
        }
        error
      }
    }
  `
  )(LoginContainer)
);
