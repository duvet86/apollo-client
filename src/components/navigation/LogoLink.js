import "components/navigation/css/logoLink.css";
import logo from "logo.svg";

import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";

const LogoLink = ({ appKey, appName }) =>
  <Link className="navbar-brand" to={`/${appKey}`}>
    <div>
      <Image src={logo} className="app-logo pull-right" responsive />
    </div>
    <div>
      {appName}
    </div>
  </Link>;

LogoLink.propTypes = {
  appName: PropTypes.string.isRequired,
  appKey: PropTypes.string.isRequired
};

export default LogoLink;
