import React from 'react'
import Projects from './Portfolio/Projects'
import './Portfolio/portfolio.scss'

export default function Portfolio() {
    return (
        <div className='portfolio-container'>
            <h1>Portfolio</h1>
            <Projects />
        </div>
    )
}
