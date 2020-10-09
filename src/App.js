import React from "react";
import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Redirect from="/" to="/acceuil" exact></Redirect>
        <Route path="/acceuil" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
