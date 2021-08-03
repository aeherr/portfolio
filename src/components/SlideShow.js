import React, { Component } from 'react'

export default class SlideShow extends Component {
    render() {
        return (
            <div className="slide-show-wrapper">
                { this.props.slides.map((slide, i) => {
                    return (
                    <div className="slide-item">
                        <div className="slide-label">{slide.label}</div>
                        <div className="slide-image-wrapper">
                            <img key={`slide_${i}`} src={slide.src} alt={slide.desc}/>
                        </div>
                    </div>
                    )
                })}
            </div>
        )
    }
}
