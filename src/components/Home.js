import React, { Component } from 'react'
import Skill from './Skill'
import Experience from './Experience'
import SVG from 'react-inlinesvg'
import ViewDemo from './ViewDemo'

export default class Home extends Component {
    render() {
        return (
            <div className="home">
                <div className="header-section has-bg">
                    <div className="main-title">
                        <h1>Anna E Herr</h1>
                        <div className="important-info sub-info">Software Engineer</div>
                    </div>
                </div>
                <div className="content-section no-bg">
                    <div className="section-label">
                        About
                        <SVG src="./assets/profile.svg" className="section-icon"/>
                        <div className="divider"></div>
                    </div>
                    <div className="content description">
                        Hello, my name is Anna! I am an experienced Full Stack Software Engineer with a preference for Front End Mobile and Web. Most recently I have been working with JavaScript, Node JS, React, React Native, Angular JS (1), and Cascading Style Sheets (CSS). I also have previous experience in Java. <br/><br/>

                        I'm always looking for opportunities in my career to learn new things and expand my skills outside of web development.
                        A few examples of this include running customer training webinars, hosting customer Q&amp;A sessions, and travelling to conferences to assist the sales team by answering technical questions for potential customers. I have even had the opportunity to make a few sales myself!<br/><br/>

                        I graduated from the University of Washington with a degree in Mathematics in 2012. While I was at UW I also took a variety of Computer Science, Applied Mathematics, Physics, and other Engineering courses. <br/><br/>
                    </div>
                </div>
                <div className="content-section has-bg">
                    <div className="section-label">
                        Experience
                        <SVG src="./assets/experience.svg" className="section-icon"/>
                        <div className="divider"></div>
                    </div>
                    <div className="content">
                        <Experience title="Tang Capital Management" date="February 2018 - Present" description="Lead Software Engineer" />
                        <Experience title="Newton Software" date="February 2016 - July 2017" description="Full Stack Software Engineer" />
                        <Experience title="Xpanxion" date="December 2014 - February 2016" description="Senior Software Development Engineer in Test" />
                        <Experience title="Bulb Inc" date="July 2013 - December 2014" description="Software Engineer" />
                        <Experience title="MedBridge Education LLC" date="April 2012 - April 2013" description="Software Developer" />
                    </div>
                </div>
                <div className="content-section no-bg">
                    <div className="section-label">
                        Skill Set
                        <SVG src="./assets/skills.svg" className="section-icon"/>
                        <div className="divider"></div>
                    </div>
                    <div className="content skills">
                        <Skill label="Javascript" percent="93" />
                        <Skill label="Node JS" percent="70" />
                        <Skill label="Angular JS 1" percent="90" />
                        <Skill label="React/React Native" percent="75" />
                        <Skill label="CSS/SCSS" percent="80" />
                        <Skill label="Java" percent="50" />
                        <Skill label="Python" percent="25" />
                        <Skill label="MySQL, GraphQL, MongoDB" percent="35" />

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
                                This project is a React based web application with Express, NodeJS, and MongoDB on the server side. The goal was to implement the basic features from Medium.com. Please <a href="https://github.com/aedgar93/medium-react-new" target="_blank" rel="noopener noreferrer">click here</a> for more detailed information on the features I built for this project.
                                <br/>
                                <br/>
                                Please note the demo may be slow to load. I am hosting it for free on Heroku, so it takes a minute to fire up.
                                <br/>
                                <br/>
                                <a href="https://github.com/aedgar93/medium-react-new" target="_blank" rel="noopener noreferrer">Source Code</a><br/>
                                <a href="https://github.com/aedgar93/medium-clone/tree/api" target="_blank" rel="noopener noreferrer">Server Code</a>
                                <br/>
                                <a href="https://medium-clone-2.herokuapp.com/" target="_blank" rel="noopener noreferrer">Live Demo</a>
                            </div>

                        </div>
                        <div className="experience">
                            <div className="important-info">Work Buddies</div>
                            <div className="experience-desc sub-info">
                                Please note, this is a work in progress... Work Buddies is a web application built using React and Firebase that pairs up coworkers on a weekly basis to do something together, like play ping pong or foosball. I hardly ever interact with anyone outside of my team at work and I wanted to create a tool to encourage people to get to know the rest of their office.
                                <br/>
                                <br/>
                                <a href="https://github.com/aedgar93/WorkBuddies/tree/ae-personal" target="_blank" rel="noopener noreferrer">Source Code</a>
                            </div>

                        </div>

                        <div className="experience">
                            <div className="important-info">Show me the Otters</div>
                            <div className="experience-desc sub-info">
                                This project is a Flutter/Dart app that can be run on iOS and Android. I created this project in order to learn Flutter. It is a simple application that allows users to select their favorite animal and see what zoos across America have that animal. I found the data by looking at zoo's websites and manually inputting it in to firebase, so it may not be up to date or accurate.
                                <br/>
                                <br/>
                                <a href="https://github.com/aedgar93/show-me-the-otters" target="_blank" rel="noopener noreferrer">Source Code</a>
                                <br/>
                                <ViewDemo source="./assets/ShowMeTheOtters.mov"/>
                            </div>

                        </div>


                        <div className="experience">
                            <div className="important-info">Food Tracker</div>
                            <div className="experience-desc sub-info">
                                Food Tracker is a simple app that allows users to upload pictures of their meals and rate them. They can also view a list of all of their saved meals. This was my first project using Swift. I am planning on updating the app so that data is stored on firebase and users can log in other devices.
                                <br/>
                                <br/>
                                <a href="https://github.com/aedgar93/FoodTracker" target="_blank" rel="noopener noreferrer">Source Code</a>
                                <br/>
                                <ViewDemo source="./assets/FoodTracker.mov"/>

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
                        <div className="important-info">anna.edgar.herr@gmail.com</div>
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
