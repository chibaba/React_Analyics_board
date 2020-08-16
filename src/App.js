import React from "react";
import { Router } from "@reach/router";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";
import ResponsiveNavigation from "./component/ResponsiveNavigation";
import "./scss/base.scss";
import Home from "./page/Home";
import DashboardSelector from "./page/DashBoard-selector";
import Dashboard from "./page/DashBoard";

function App() {
  const navLinks = [
    {
      text: "home",
      path: "/",
      icon: "ion-ios-home",
    },
    {
      text: "analytics",
      path: "/analytics",
      icon: "ion-ios-analytics",
    },
  ];
  return (
    <div className="App">
      <ResponsiveNavigation
        navLinks={navLinks}
        logo={logo}
        hoverBackground="ddd"
        linkColor="#777"
      />
      <Router>
        <Home path="/" />
        <DashboardSelector path="/analytics" axios={axios} />
        <Dashboard path="/analytics/:dashboardName" axios={axios} />
      </Router>
    </div>
  );
}

export default App;
