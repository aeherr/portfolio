import React, { Component } from 'react'
import { Player } from 'video-react';

export default class VideoDemo extends Component {
    constructor(props) {
      super(props)
      this.state = {
        visible: false
      }
      this.toggle = this.toggle.bind(this)
    }

    toggle() {
      this.setState({visible: !this.state.visible})
    }

    render() {
        return (
          <div>
            <div onClick={this.toggle} className="demoLink">Demo</div>
            {
              this.state.visible ?
              <div className="videoPlayer">
                <Player
                  fluid={false}
                  width="100%"
                  height="100%"
                  playsInline
                  src={this.props.source}
                />
              </div>
              : null
            }
          </div>
        )
    }
}
