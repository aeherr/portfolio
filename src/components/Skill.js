import React, { Component } from 'react'

export default class Skill extends Component {
    render() {
        return (
            <div className="skill-set">
                <div className="skill-label">{this.props.label}</div>
                <div className="skill-meter"><div className="skill-meter-inner" style={{"width": this.props.percent + "%"}}></div></div>
            </div>
        )
    }
}
