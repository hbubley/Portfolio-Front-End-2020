import React from "react";
import Header from "./components/Header";
import Router from "./components/Routed/Router";
import Nav from './components/Nav'
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <Header />
      <div className="Main">
        <Router />
      </div>
    </div>
  );
}

export default App;
