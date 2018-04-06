import React from "react";

import bn from "utils/bemnames";

import {
  Navbar,
  // NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  Popover,
  PopoverBody,
  Badge,
  ListGroup,
  ListGroupItem,
  Button
} from "reactstrap";

import {
  MdNotificationsActive,
  MdInsertChart,
  MdPersonPin,
  MdMessage,
  MdSettingsApplications,
  MdHelp,
  MdClearAll,
  MdExitToApp
} from "react-icons/lib/md";

import Avatar from "components/Avatar";
import { UserCard } from "components/Card";

const bem = bn.create("header");

class Header extends React.Component {
  state = {
    isOpenNotificationPopover: false,
    isOpenUserCardPopover: false
  };

  toggleNotificationPopover = () => {
    this.setState({
      isOpenNotificationPopover: !this.state.isOpenNotificationPopover
    });
  };

  toggleUserCardPopover = () => {
    this.setState({
      isOpenUserCardPopover: !this.state.isOpenUserCardPopover
    });
  };

  handleSidebarControlButton = event => {
    event.preventDefault();
    event.stopPropagation();

    document.querySelector(".cr-sidebar").classList.toggle("cr-sidebar--open");
  };

  render() {
    return (
      <Navbar light expand className={bem.b("bg-cerulean")}>
        <Nav navbar className={bem.e("nav-right")}>
          <NavItem>
            <NavLink>
              <Avatar
                id="Popover2"
                onClick={this.toggleUserCardPopover}
                className="can-click"
              />
            </NavLink>
            <Popover
              placement="bottom-end"
              isOpen={this.state.isOpenUserCardPopover}
              toggle={this.toggleUserCardPopover}
              target="Popover2"
              className="p-0 border-0"
              style={{ minWidth: 250 }}
            />
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default Header;
