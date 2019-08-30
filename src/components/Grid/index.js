import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.css'

export default class Grid extends Component {
    Circles = () => {
        let div = []
        for (let index = 0; index < 9; index++) {
            div.push(<div style={{ background: `${this.props.color}` }}></div>)
        }
        return div
    }

    render() {
        return <div className="lds-grid">{this.Circles()}</div>
    }
}

Grid.propTypes = {
    /** hex color */
    color: PropTypes.string,
}

Grid.defaultProps = {
    color: '#7f58af',
}
