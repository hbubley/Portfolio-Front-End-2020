import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "./About";
import Portfolio from "./Portfolio";
import ContactMe from "./ContactMe";
import Nav from '../Nav'
import Footer from "../Footer";

export default function Router() {
  return (
    <div className='Main'>
      <Nav />
      <Switch>
        <Route exact path="/" component={About} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contactme" component={ContactMe} />
      </Switch>
      <Footer />
    </div>
  );
}
