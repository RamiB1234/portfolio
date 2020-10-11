import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home";
import About from "./pages/About";
import Resumes from "./pages/Resumes";
import GamePortfolio from "./pages/GamePortfolio";
import WebPortfolio from "./pages/WebPortfolio";
import CppPortfolio from "./pages/CppPortfolio";
import Contact from "./pages/Contact";

function App() {
  return (
    <HashRouter basename="/">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/resume" component={Resumes} />
        <Route path="/games" component={GamePortfolio} />
        <Route path="/webapps" component={WebPortfolio} />
        <Route path="/cpp" component={CppPortfolio} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </HashRouter>
  );
}

export default App;