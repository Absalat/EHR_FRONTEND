import "./topbar.css";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Badge from "@material-ui/core/Badge";

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="searchbar">
        <SearchIcon className="searchIcon" />
        <input className="searchInput" />
      </div>
      <Badge badgeContent={4} color="secondary">
        <NotificationsIcon />
      </Badge>
    </div>
  );
}
