import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.css'

export default class Ring extends Component {
    Circles = () => {
        const { color, size } = this.props;
        let div = []
        for (let index = 0; index < 4; index++) {
            div.push(<div key={index} style={{ borderColor: `${color} transparent transparent transparent`, width: size * 0.8, height: size * 0.8, margin: size * 0.1, borderWidth: size * 0.1 }}></div>)
        }
        return div;
    }

    render() {
        const { size } = this.props;
        return <div className="lds-ring" style={{ width: size, height: size }}>{this.Circles()}</div>
    }
}

Ring.propTypes = {
    /** hex color */
    color: PropTypes.string,
    /** size in pixel */
    size: PropTypes.number,
}

Ring.defaultProps = {
    color: '#7f58af',
    size: 80,
}
