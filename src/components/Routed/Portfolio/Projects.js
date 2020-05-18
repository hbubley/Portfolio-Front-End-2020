import React from "react";
import data from "./data.json";
import Project from "./Project";
export default function Projects() {
  let project = data.map((obj, index) => {
    console.log("HI", obj.languages);
    return (
      <Project
        title={obj.title}
        img={obj.image}
        des={obj.description}
        plat={obj.platforms}
        lang={obj.languages}
        loc={obj.location}
        link={obj.url}
        index={index}
      />
    );
  });

  return <div className="projects-container">{project}</div>;
}
