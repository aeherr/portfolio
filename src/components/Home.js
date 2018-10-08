import React, { Component } from 'react'
import Skill from './Skill'
import Experience from './Experience'
import SVG from 'react-inlinesvg'

export default class Home extends Component {
    render() {
        return (
            <div className="home">
                <div className="header-section has-bg">
                    <div className="main-title">
                        <h1>Anna Edgar</h1>
                        <div className="important-info sub-info">Software Engineer</div>
                    </div>
                </div>
                <div className="content-section no-bg">
                    <div className="section-label">
                        About
                        <SVG src="./assets/profile.svg" className="section-icon"/>
                        <div className="divider"></div>
                    </div>
                    <div className="content">Hi. I still need to put stuff in this section, but I hate writing about myself. After all, I'm a software engineer, not an auto-biographist</div>
                </div>
                <div className="content-section has-bg">
                    <div className="section-label">
                        Experience
                        <SVG src="./assets/experience.svg" className="section-icon"/>
                        <div className="divider"></div>
                    </div>
                    <div className="content">
                        <Experience title="Tang Capital Management" date="February 2018 - Preset" description="Software Engineer" />
                        <Experience title="Newton Software" date="February 2016 - July 2017" description="Full Stack Software Engineer" />
                        <Experience title="Xpanxion" date="December 2014 - February 2016" description="Senior Software Development Engineer in Test" />
                        <Experience title="Bulb Inc" date="July 2013 - December 2014" description="Software Engineer" />
                        <Experience title="MedBridge Education LLC" date="April 2012 - April 2013" description="Software Developer" />
                    </div>
                </div>
                <div className="content-section no-bg">
                    <div className="section-label">
                        Skillset
                        <SVG src="./assets/skills.svg" className="section-icon"/>
                        <div className="divider"></div>
                    </div>
                    <div className="content skills">
                        <Skill label="Javascript" percent="93" />
                        <Skill label="Java" percent="70" />
                        <Skill label="Angular JS 1" percent="90" />
                        <Skill label="React" percent="50" />
                        <Skill label="CSS/SCSS" percent="80" />
                        <Skill label="Selenium" percent="85" />
                    </div>
                </div>
                <div className="content-section has-bg">
                    <div className="section-label">
                        Education
                        <SVG src="./assets/education.svg" className="section-icon"/>
                        <div className="divider"></div>
                    </div>
                    <div className="content">
                        <Experience title="University of Washington" date="2013" description="Bachelor of Arts - Mathematics" />
                        <Experience title="Wenatchee Valley College" date="2010" description="Associate of Arts and Science" />
                    </div>
                </div>
                <div className="content-section no-bg">
                    <div className="section-label">
                        Portfolio
                        <div className="divider"></div>
                    </div>
                    <div className="content">
                        <div className="experience">
                            <div className="important-info">Medium Clone</div>
                            <div className="experience-desc sub-info">
                                This project is a React based web application with Express, NodeJS, and MongoDB on the server side. The goal was to implement the basic features from Medium.com. Please <a href="https://github.com/aedgar93/medium-clone" target="_blank" rel="noopener noreferrer">click here</a> for more detailed information on the features I built for this project.
                                <br/>
                                <br/>
                                <a href="https://github.com/aedgar93/medium-clone" target="_blank" rel="noopener noreferrer">Source Code</a>
                                <br/>
                                <a href="https://anna-medium-clone.herokuapp.com/" target="_blank" rel="noopener noreferrer">Demo</a>
                            </div>

                        </div>

                        <div className="experience">
                            <div className="important-info">This website!</div>
                            <div className="experience-desc sub-info">
                                Also build in React, which was probably overkill for something so small.
                                <br/><br/>
                                <a href="https://github.com/aedgar93/portfolio" target="_blank" rel="noopener noreferrer">Source Code</a>
                            </div>
                        </div>

                        <div className="experience">
                            <div className="important-info">Music List</div>
                            <div className="experience-desc sub-info">
                                This project was a code challenge for an interview, meant to give the employer insight in to my experience with Angular. I had a day to build a small app that displays a list of songs and allows the user to filter and sort. In case you were wondering, I aced the interview and got the job!
                                <br/><br/>
                                <a href="https://github.com/aedgar93/music_list" target="_blank" rel="noopener noreferrer">Source Code</a>
                            </div>
                        </div>

                        <div className="experience">
                            <div className="important-info">Pokemon Attack Simulator</div>
                            <div className="experience-desc sub-info">
                                In college I took a course to learn SAGE, a Python based mathematic programming language. For my final project I created a Pokemon Attack Simulator using SAGE, which used an XML file as a pseudo-database.
                                <br/><br/>
                                <a href="https://github.com/aedgar93/480_Final" target="_blank" rel="noopener noreferrer">Source Code</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content-section contact no-bg">
                    <div className="section-label">
                        Contact
                        <SVG src="./assets/contact.svg" className="section-icon contact-icon"/>
                        <div className="divider"></div>
                    </div>
                    <div className="content">
                        <div className="contact-label sub-info">Let's Talk!</div>
                        <div className="important-info">annadedgar@outlook.com</div>
                        <div className="social-icons">
                            <a href="https://github.com/aedgar93" target="_blank" rel="noopener noreferrer"><SVG src="./assets/github.svg" className="social-icon"/></a>
                            <a href="https://www.linkedin.com/in/annadedgar/" target="_blank" rel="noopener noreferrer"><SVG src="./assets/linkedin.svg" className="social-icon"/></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
