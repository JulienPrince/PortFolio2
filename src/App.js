import React from "react";
import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import ItemTeam from "./components/MyTeam/ItemTeam";

function App() {
  return (
    <Router>
      <Switch>
        <Redirect from="/" to="/acceuil" exact></Redirect>
        <Route path="/acceuil" component={Home} exact />
        <Route path="/test" component={ItemTeam} exact />
      </Switch>
    </Router>
  );
}

export default App;
