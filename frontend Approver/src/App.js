import Home from "./pages/home/Home.jsx";
import History from "./pages/history/History.jsx";

import { Redirect, Route, Switch } from "react-router-dom";
import Topbar from "./components/topbar/Topbar.jsx";
import Sidebar from "./components/sidebar/Sidebar.jsx";

function App() {
  return (
    <>
      <Topbar />
      <Sidebar />
      <div style={{ marginLeft: "228px" }}>
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/home" component={Home} />
          <Route path="/history" component={History} />
        </Switch>
      </div>
    </>
  );
}

export default App;
