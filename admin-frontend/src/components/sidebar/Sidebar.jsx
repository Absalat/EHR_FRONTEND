import "./sidebar.css";

import DashboardIcon from "@material-ui/icons/Dashboard";
// import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import GroupIcon from "@material-ui/icons/Group";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import PersonIcon from "@material-ui/icons/Person";
import { NavLink, Link, useHistory } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import React from "react";
import Logo from "../../assets/erhLogo2.jpeg";

export default function Sidebar({ isOpen, toggle }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const history = useHistory();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const logout = () => {
        localStorage.removeItem("user");
        history.push("/login");
    };

    return (
        <div className={`${isOpen ? "sidebar is-open" : "sidebar"}`}>
            <img src={Logo} alt="" className="sidebar__logo" />
            <div>
                <ul className="sidebarList">
                    <NavLink
                        as="li"
                        to="/"
                        exact
                        className="sidebarListItem"
                        activeClassName="active"
                    >
                        <DashboardIcon className="sidebarIcon" />
                        <span className="sidebarListItemText">Dashboard</span>
                    </NavLink>

                    <NavLink
                        as="li"
                        to="/profile"
                        className="sidebarListItem"
                        activeClassName="active"
                    >
                        <PersonIcon className="sidebarIcon" />
                        <span className="sidebarListItemText">Profile</span>
                    </NavLink>
                    <li className="sidebarListItem">
                        <GroupIcon className="sidebarIcon" />
                        <span>
                            <span
                                aria-haspopup="true"
                                onClick={handleClick}
                                style={{ cursor: "pointer" }}
                            >
                                Manage
                            </span>
                            <Menu
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose}>
                                    <Link to="/manage-users">Manage Users</Link>
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <Link to="/manage-approvers">
                                        Manage Approvers
                                    </Link>
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <Link to="/manage-externalusers">
                                        Manage External Users
                                    </Link>
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <Link to="/manage-departments">
                                        Manage Departments
                                    </Link>
                                </MenuItem>
                            </Menu>
                        </span>
                    </li>

                    <li
                        style={{ cursor: "pointer" }}
                        onClick={logout}
                        className="sidebarListItem"
                    >
                        <ExitToAppIcon className="sidebarIcon" />
                        <span className="sidebarListItemText">Logout</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}
