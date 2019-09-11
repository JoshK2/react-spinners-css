import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.css'

export default class Circle extends Component {
    render() {
        const { color, size } = this.props
        return <div className="lds-circle" style={{ background: color, width: size, height: size }}></div>
    }
}

Circle.propTypes = {
    /** hex color */
    color: PropTypes.string,
    /** size in pixel */
    size: PropTypes.number,
}

Circle.defaultProps = {
    color: '#7f58af',
    size: 64,
}
