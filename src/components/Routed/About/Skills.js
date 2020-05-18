import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faSass, faHtml5, faJsSquare } from '@fortawesome/free-brands-svg-icons'
import {  faServer } from '@fortawesome/pro-light-svg-icons'
export default function Skills() {
  return (
    <div className="about-skills">
      <div>
      <label>Highlighted Skills</label>
        <ul>
          <li><FontAwesomeIcon icon={faReact} /> React</li>
          <li><FontAwesomeIcon icon={faHtml5} /> HTML</li>
          <li><FontAwesomeIcon icon={faSass} /> S/CSS</li>
          <li><FontAwesomeIcon icon={faJsSquare} /> Javascript</li>
          <li><FontAwesomeIcon icon={faServer} /> Express/MongoDB/Cyprus</li>
        </ul>
      </div>
    </div>
  );
}

// Front-End
// React, HTML, CSS,  SCSS/SASS, Javascript, jQuery, WordPress

// Back-End
// Python, Django, MongoDB, Mongoose,  express, PostgreSQL, Ruby

// Software
// Github, Heroku, Netlify, AWS, Atlas
