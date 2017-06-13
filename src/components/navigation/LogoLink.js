import "components/navigation/css/logoLink.css";
import logo from "logo.svg";

import React from "react";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";

const LogoLink = () => (
  <Link className="navbar-brand" to="/">
    <Image src={logo} className="app-logo" responsive />
  </Link>
);

export default LogoLink;
