import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.css'

export default class Ring extends Component {
    Circles = () => {
        let div = []
        for (let index = 0; index < 4; index++) {
            div.push(<div style={{ borderColor: `${this.props.color} transparent transparent transparent` }}></div>)
        }
        return div
    }

    render() {
        return <div className="lds-ring">{this.Circles()}</div>
    }
}

Ring.propTypes = {
    color: PropTypes.string,
}

Ring.defaultProps = {
    color: '#fff',
}
