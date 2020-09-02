import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Send from "./pages/Send";




class App extends Component {
  render() {
    return (
      <Router>
        <Header/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Projects" component={Projects}/>
          <Route path="/Contact" component={Contact} />
          <Route path="/Send" component={Send}/>
        </Switch>
        <Footer />
      </Router>
    );
  }
}
export default App;
