import React from 'react'
import {Link} from 'react-router-dom'

export default function Nav() {
    return (
        <div className = 'nav-container'>
        <nav>
          <Link to="/">About</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/contactme">Contact Me</Link>
        </nav> 
        </div>
    )
}
