import React from "react";
import Header from "./components/Header";
import Router from "./components/Routed/Router";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Router />
    </div>
  );
}

export default App;
