import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.css'

export default class Facebook extends Component {
    getCircles = () => {
        return [...Array(3)].map((val, index) => <div key={index} style={{ background: `${this.props.color}` }}></div>)
    }

    render() {
        return <div className="lds-facebook">{this.getCircles()}</div>
    }
}

Facebook.propTypes = {
    /** hex color */
    color: PropTypes.string,
}

Facebook.defaultProps = {
    color: '#7f58af',
}
