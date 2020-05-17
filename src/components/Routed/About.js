import React from 'react'
import Image from './About/Image'
import HeaderText from './About/HeaderText'
import Bio from './About/Bio'
import Resume from './About/Resume'
import Skills from './About/Skills'
import Mouse from './About/Mouse'
import './About/about.scss'


export default function About() {




    return (
        <div className="about-container">
            <HeaderText />
            <Image />
            <Bio />
            <Skills />
            <Resume />
            <Mouse />
        </div>
    )
}
