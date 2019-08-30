import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.css'

export default class Circle extends Component {
    render() {
        return <div className="lds-circle" style={{ background: this.props.color }}></div>
    }
}

Circle.propTypes = {
    /** hex color */
    color: PropTypes.string,
}

Circle.defaultProps = {
    color: '#7f58af',
}
