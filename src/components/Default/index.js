import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.css'

export default class Default extends Component {
    Circles = () => {
        let div = []
        for (let index = 0; index < 12; index++) {
            div.push(<div style={{ background: `${this.props.color}` }}></div>)
        }
        return div
    }

    render() {
        return <div className="lds-default">{this.Circles()}</div>
    }
}

Default.propTypes = {
    color: PropTypes.string,
}

Default.defaultProps = {
    color: '#fff',
}
