import React from "react";
import Card from "react-bootstrap/Card";
import Icons from "./Icons";

export default function Project({ title, img, des, plat, lang, index, link }) {
  let langIcons = lang.map((language, i) => {
    console.log("PROJECT", language);
    return <Icons icon={language} />;
  });
  let platIcons = plat.map((platform, i) => {
    console.log("PROJECT", platform);
    return <Icons icon={platform} />;
  });

  return (
    <div
      className="project-container"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="project-overlay">
        <h4>{title}</h4>
        <div>{langIcons}</div>
        <div>{platIcons}</div>
        <button>
          <a href={link} target="_blank">
            Try Me
          </a>
        </button>
      </div>
    </div>
  );
}
