import React from "react";
import HomePage from "./Component/HomePage";
import About from "./Component/About";
import Feature from "./Component/Feature";
import Test1 from "./ProjectInsert";
import Profile from "./Component/Profile";
import Project from "./Component/Project";
import Pcontent from "./Component/Pcontent";
import EditProfile from "./Component/EditProfile";
import Login from "./Login";
import App from "./App";
import Register from "./Register";

import { BrowserRouter as Router, Route } from "react-router-dom";

export const MakeMainRoutes = () => (
  <Router>
    <div>
      <nav>
        <Route path="/" render={(props) => <App />} />

        <Route path="/HomePage" render={(props) => <HomePage />} />

        <Route path="/About" render={(props) => <About />} />

        <Route path="/Feature" render={(props) => <Feature />} />

        <Route path="/Test1" render={(props) => <Test1 />} />

        <Route path="/Login" render={(props) => <Login />} />

        <Route path="/Register" render={(props) => <Register />} />

        <Route path="/Profile" render={(props) => <Profile />} />

        <Route path="/EditProfile" render={(props) => <EditProfile />} />

        <Route path="/Project" render={(props) => <Project />} />

        <Route path="/Pcontent/:_id" render={(props) => <Pcontent />} />
      </nav>

      {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
    </div>
  </Router>
);
