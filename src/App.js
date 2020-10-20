import React from "react";
import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import ItemTeam2 from "./components/MyTeam/ItemTeam2";

function App() {
  return (
    <Router>
      <Switch>
        <Redirect from="/" to="/acceuil" exact></Redirect>
        <Route path="/acceuil" component={Home} exact />
        <Route path="/test" component={ItemTeam2} exact />
      </Switch>
    </Router>
  );
}

export default App;
