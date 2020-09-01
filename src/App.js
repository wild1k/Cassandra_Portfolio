import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import AUBackground from "./utils/AUBackground.png";


class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route path="/Home" exact component={Home} />
          <Route path="/Projects" component={Projects}/>
          <Route path="/Contact" component={Contact} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}
export default App;
