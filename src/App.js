import React from "react";
import "./App.css";
import Header from "./Header";
import TinderCards from "./TinderCards";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />
      <Router>
        {/* Switch */}
        <Switch>
          <Route>
            
          </Route>
          {/* TinderCards */}
          <TinderCards />
          {/* SwipeButtons */}
          {/* Chat Screen */}
          {/* Individual Chat Screen */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
