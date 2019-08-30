import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.css'

export default class Ripple extends Component {
    Circles = () => {
        let div = []
        for (let index = 0; index < 2; index++) {
            div.push(<div style={{ borderColor: `${this.props.color}` }}></div>)
        }
        return div
    }

    render() {
        return <div className="lds-ripple">{this.Circles()}</div>
    }
}

Ripple.propTypes = {
    /** hex color */
    color: PropTypes.string,
}

Ripple.defaultProps = {
    color: '#7f58af',
}
