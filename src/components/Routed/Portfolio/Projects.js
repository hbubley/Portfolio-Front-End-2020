import React from "react";
import data from "./data.json";
import Project from "./Project";
import CardDeck from "react-bootstrap/CardDeck";
export default function Projects() {
  let project = data.map((obj, index) => {
    console.log("HI", obj.title);
    return <Project title={obj.title} img={obj.image} des={obj.description} plat={obj.platforms} lang={obj.languages} loc={obj.location} link={obj.url} key={index} />;
  });

  return (
      <CardDeck>
        {project}
      </CardDeck>
  );
}
