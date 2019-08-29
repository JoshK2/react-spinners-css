import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.css'

function createArray(length) {
    let array = []
    for (let num = 0; num < length; num++) {
        array.push(null)
    }
    return array
}

export default class Facebook extends Component {
    getCircles = () => {
        return createArray(3).map(() => <div style={{ background: `${this.props.color}` }}></div>)
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
    color: '#7f58af'
}