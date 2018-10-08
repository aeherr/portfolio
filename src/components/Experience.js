import React, { Component } from 'react'

export default class Experience extends Component {
    render() {
        return (
            <div className="experience">
                <div className="important-info">{this.props.title}</div>
                <div className="experience-date sub-info">{this.props.date}</div>
                <div className="experience-position">{this.props.description}</div>
            </div>
        )
    }
}
