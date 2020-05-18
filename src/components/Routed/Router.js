import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "./About";
import Portfolio from "./Portfolio";
import ContactMe from "./ContactMe";
import Footer from "../Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faChevronCircleDown } from '@fortawesome/pro-light-svg-icons'

export default function Router() {
  return (
    <div className='Main' id='main'>
      <a href='#main'><FontAwesomeIcon icon={faChevronCircleDown} /></a>
      <Switch>
        <Route exact path="/" component={About} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contactme" component={ContactMe} />
      </Switch>
      <Footer />
    </div>
  );
}
