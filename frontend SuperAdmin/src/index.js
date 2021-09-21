import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import "./index.css";
import LoginRegister from "./components/LoginRegister";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <BrowserRouter>
    {/* <App /> */}
    <Switch>
      <Route path="/" exact component={App}></Route>
      <Route path="/login" component={LoginRegister}></Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
