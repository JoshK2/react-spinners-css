import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.css'

export default class Heart extends Component {
    render() {
        return (
            <div className="lds-heart">
                <div style={{ background: this.props.color }}>
                    <div className="div-before" style={{ background: this.props.color }}></div>
                    <div className="div-after" style={{ background: this.props.color }}></div>
                </div>
            </div>
        )
    }
}

Heart.propTypes = {
    /** hex color */
    color: PropTypes.string,
}

Heart.defaultProps = {
    color: '#7f58af'
}
