import PropTypes from "prop-types";
import React, { Component } from "react";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility
} from "semantic-ui-react";
import Home from "./Homepage.jsx";

import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
