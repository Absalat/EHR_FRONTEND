import "./sidebar.css";

import GroupIcon from "@material-ui/icons/Group";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import PersonIcon from "@material-ui/icons/Person";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <img src="assets/logo/erhLogo2.jpeg" alt="" />
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <NavLink
            as="li"
            to="/home"
            className="sidebarListItem"
            activeClassName="active"
          >
            <PersonIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Home</span>
          </NavLink>
          <NavLink as="li" exact to="/history" className="sidebarListItem">
            <GroupIcon className="sidebarIcon" />
            <span className="sidebarListItemText">History </span>
          </NavLink>

          <li className="sidebarListItem">
            <ExitToAppIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Logout</span>
          </li>
        </ul>

        <hr className="sidebarHr" />
      </div>
    </div>
  );
}
