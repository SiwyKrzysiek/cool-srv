import React from "react";
import "../styles/App.css";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Header from "./Layout/Header";
import NavigationDrawer from "./Layout/NavigationDrawer";
import Networks from "./Networks";
import Devices from "./Devices";
import NAT from "./NAT";
import VLAN from "./VLAN";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <main className="d-flex">
          <NavigationDrawer />

          <Switch>
            <Route exact path="/">
              <Redirect to="/networks" />
            </Route>
            <Route path="/networks">
              <Networks className="flex-grow-1" />
            </Route>
            <Route path="/devices">
              <Devices className="flex-grow-1" />
            </Route>
            <Route path="/nat">
              <NAT className="flex-grow-1" />
            </Route>
            <Route path="/vlan">
              <VLAN className="flex-grow-1" />
            </Route>
          </Switch>
        </main>

      </Router>
      Nice servers and happy admins.
    </div>
  );
}

export default App;
