import React, { useState, useEffect } from "react";
import Manage from "./pages/manageusers/ManageUsers.jsx";
//import Profile from "./pages/profile/Profile.jsx";
import main from "./pages/main/main.js";
import { Route, Switch } from "react-router-dom";
import Topbar from "./components/topbar/Topbar.jsx";
import Sidebar from "./components/sidebar/Sidebar.jsx";
// import Rightbar from "./components/rightbar/Rightbar;
import Add from "./pages/manageusers/Add.jsx";
import Edit from "./pages/manageusers/Edit.jsx";

function App() {
  const [sidebarIsOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);
  const [mobileView, setMobileView] = useState(false);

  useEffect(() => {
    const { innerWidth: width, innerHeight: height } = window;
    if (width < 500) {
      setMobileView(true);
    }
  }, []);

  useEffect(() => {
    function handleResize() {
      const { innerWidth: width, innerHeight: height } = window;
      if (width < 500) {
        setMobileView(true);
      } else {
        setMobileView(false);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (mobileView) {
      setSidebarOpen(false);
    } else {
      setSidebarOpen(true);
    }
  }, [mobileView]);

  return (
    <div>
      <Sidebar toggle={toggleSidebar} isOpen={sidebarIsOpen} />
      <div
        style={{
          transition: "0.5s",
        }}
        className={sidebarIsOpen ? "content is-open" : "content"}
      >
        <Topbar toggleSidebar={toggleSidebar} />
        <Switch>
          <Route exact path="/manage" component={Manage} />
          <Route path="/manageusers/add" component={Add} />
          <Route path="/manageusers/edit/:id" component={Edit} />
          <Route path="/main" component={main} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
