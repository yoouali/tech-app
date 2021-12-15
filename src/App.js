import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import DashBord from "./Pages/DashBord";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <DashBord />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
