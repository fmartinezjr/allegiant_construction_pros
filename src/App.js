import React from "react";
import Home from "./Homepage.jsx";
import "./App.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import About from "./About.jsx";
import Services from "./Services.jsx";
import Projects from "./Projects.jsx";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/projects" component={Projects} />
      </Switch>
    </Router>
  );
}
export default App;
