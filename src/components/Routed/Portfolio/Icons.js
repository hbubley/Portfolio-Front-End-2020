import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faSass,
  faHtml5,
  faJsSquare,
  faCss3,
} from "@fortawesome/free-brands-svg-icons";
import {  faMobile, faDesktop, faTablet } from '@fortawesome/pro-light-svg-icons'

export default function Icons({ icon }) {
  switch (icon) {
    case "faReact":
      return <FontAwesomeIcon icon={faReact} />;

    case "faSass":
      return <FontAwesomeIcon icon={faSass} />;

    case "faHtml5":
      return <FontAwesomeIcon icon={faHtml5} />;

    case "faJsSquare":
      return <FontAwesomeIcon icon={faJsSquare} />;

    case "faCss3":
      return <FontAwesomeIcon icon={faCss3} />;
    
    case "desktop":
      return <FontAwesomeIcon icon={faDesktop} />;

    case "tablet":
      return <FontAwesomeIcon icon={faTablet} />;

    case "mobile":
      return <FontAwesomeIcon icon={faMobile} />;

    default:
      return null;
  }
}
