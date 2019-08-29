import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.css'

export default class Hourglass extends Component {
    render() {
        return (
            <div className="lds-hourglass">
                <div className="lds-hourglass-after" style={{ background: this.props.color }}></div>
            </div>
        )
    }
}

Hourglass.propTypes = {
    color: PropTypes.string,
}

Hourglass.defaultProps = {
    color: '#fff',
}
