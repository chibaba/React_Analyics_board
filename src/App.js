import React from "react";
import { Router } from "@reach/router";
import logo from "./logo.svg";
import "./App.css";
import ResponsiveNavigation from "./component/ResponsiveNavigation";
import "./scss/base.scss";
import Home from "./page/Home";

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
      </Router>
    </div>
  );
}

export default App;
