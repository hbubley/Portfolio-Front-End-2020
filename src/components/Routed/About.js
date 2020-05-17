import React from 'react'
import Image from './About/Image'
import HeaderText from './About/HeaderText'
import Bio from './About/Bio'
import Resume from './About/Resume'
import Skills from './About/Skills'
import './About/about.scss'
import PersonalLinks from './About/PersonalLinks'


export default function About() {




    return (
        <div className="about-container">
            <HeaderText />
            <Image />
            <Bio />
            <Skills />
            <Resume />
            <PersonalLinks />
        </div>
    )
}
