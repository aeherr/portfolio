import React, { Component } from 'react'
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
                        <div className="divider"></div>
                        <SVG src="./assets/profile.svg" className="section-icon"/>
                    </div>
                    <div className="content">Hi. I still need to put stuff in this section, but I hate writing about myself. After all, I'm a software engineer, not an auto-biographist</div>
                </div>
                <div className="content-section has-bg">
                    <div className="section-label">
                        Experience
                        <div className="divider"></div>
                        <SVG src="./assets/experience.svg" className="section-icon"/>
                    </div>
                    <div className="content">
                        <div className="experience">
                            <div className="important-info">Tang Capital Management</div>
                            <div className="experience-date sub-info">February 2018 - Preset</div>
                            <div className="experience-position">Software Engineer</div>
                        </div>
                        <div className="experience">
                            <div className="important-info">Newton Software</div>
                            <div className="experience-date sub-info">February 2016 - July 2017</div>
                            <div className="experience-position">Full Stack Software Engineer</div>
                        </div>
                        <div className="experience">
                            <div className="important-info">Xpanxion</div>
                            <div className="experience-date sub-info">December 2014 - February 2016</div>
                            <div className="experience-position">Senior Software Development Engineer in Test</div>
                        </div>
                        <div className="experience">
                            <div className="important-info">Bulb Inc</div>
                            <div className="experience-date sub-info">July 2013 - December 2014</div>
                            <div className="experience-position">Software Engineer</div>
                        </div>
                        <div className="experience">
                            <div className="important-info">MedBridge Education LLC</div>
                            <div className="experience-date sub-info">April 2012 - April 2013</div>
                            <div className="experience-position">Software Developer</div>
                        </div>
                    </div>
                </div>
                <div className="content-section no-bg">
                    <div className="section-label">
                        Skillset
                        <div className="divider"></div>
                        <SVG src="./assets/skills.svg" className="section-icon"/>
                    </div>
                    <div className="content skills">
                        <div className="skill-set">
                            <div className="skill-label">Javascript</div>
                            <div className="skill-meter"><div className="skill-meter-inner" style={{"width": "93%"}}></div></div>
                        </div>
                        <div className="skill-set">
                            <div className="skill-label">JAVA</div>
                            <div className="skill-meter"><div className="skill-meter-inner" style={{"width": "70%"}}></div></div>
                        </div>
                        <div className="skill-set">
                            <div className="skill-label">Angular JS 1</div>
                            <div className="skill-meter"><div className="skill-meter-inner" style={{"width": "90%"}}></div></div>
                        </div>
                        <div className="skill-set">
                            <div className="skill-label">React</div>
                            <div className="skill-meter"><div className="skill-meter-inner" style={{"width": "50%"}}></div></div>
                        </div>
                        <div className="skill-set">
                            <div className="skill-label">CSS/SCSS</div>
                            <div className="skill-meter"><div className="skill-meter-inner" style={{"width": "80%"}}></div></div>
                        </div>
                        <div className="skill-set">
                            <div className="skill-label">Selenium</div>
                            <div className="skill-meter"><div className="skill-meter-inner" style={{"width": "85%"}}></div></div>
                        </div>
                    </div>
                </div>
                <div className="content-section has-bg">
                    <div className="section-label">
                        Education
                        <div className="divider"></div>
                        <SVG src="./assets/education.svg" className="section-icon"/>
                    </div>
                    <div className="content">
                        <div className="experience">
                            <div className="important-info">University of Washington</div>
                            <div className="experience-date sub-info">2013</div>
                            <div className="experience-position">Bachelors of Arts - Mathematics</div>
                        </div>
                        <div className="experience">
                            <div className="important-info">Wenatchee Valley College</div>
                            <div className="experience-date sub-info">2010</div>
                            <div className="experience-position">Associates of Arts and Science</div>
                        </div>
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
                                In college I took a course to learn SAGE, a Python based mathematics software. For my final project I created a Pokemon Attack Simulator using SAGE, which used an XML file as a psuedo-database.
                                <br/><br/>
                                <a href="https://github.com/aedgar93/480_Final" target="_blank" rel="noopener noreferrer">Source Code</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content-section contact no-bg">
                    <div className="section-label">
                        Contact
                        <div className="divider"></div>
                        <SVG src="./assets/contact.svg" className="section-icon contact-icon"/>
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
