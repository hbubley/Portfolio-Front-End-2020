import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faCodepen } from '@fortawesome/free-brands-svg-icons'


export default function PersonalLinks() {
    return (
        <div className='about-links'>
            <a href='https://www.linkedin.com/in/haleybubley' target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href='https://github.com/hbubley' target='_blank' rel="noopener noreferrer"><FontAwesomeIcon className='github' icon={faGithub} /></a>
            <a href='https://codepen.io/hbubley' target='_blank' rel="noopener noreferrer"><FontAwesomeIcon className='codepen' icon={faCodepen} /></a>
        </div>
    )
}
