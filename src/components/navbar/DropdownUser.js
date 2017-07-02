import React from "react";
import PropTypes from "prop-types";
import { NavDropdown, MenuItem } from "react-bootstrap";

import LogoutContainer from "components/logout/LogoutContainer";
import DropdownUserTitle from "components/navbar/DropdownUserTitle";
import MenuItemApp from "components/navbar/MenuItemApp";

const DropdownUser = ({ userName, appList }) => (
  <NavDropdown
    title={<DropdownUserTitle userName={userName} />}
    id="user-nav"
    noCaret
  >
    {appList.map(({ label, key, icon }, index) => (
      <MenuItemApp key={index} appKey={key} label={label} icon={icon} />
    ))}
    <MenuItem divider />
    <MenuItem>
      <i className="fa fa-user-o" aria-hidden="true" />{" "}Profile
    </MenuItem>
    <MenuItem>
      <i className="fa fa-cog" aria-hidden="true" />{" "}Settings
    </MenuItem>
    <MenuItem divider />
    <LogoutContainer />
  </NavDropdown>
);

DropdownUser.propTypes = {
  userName: PropTypes.string.isRequired,
  appList: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      key: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired
    })
  )
};

export default DropdownUser;
