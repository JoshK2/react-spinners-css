import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.css'

export default class Roller extends Component {
    Circles = () => {
        let div = []
        for (let index = 0; index < 8; index++) {
            div.push(
                <div>
                    <div className="div-after" style={{ background: this.props.color }}></div>
                </div>
            )
        }
        return div
    }

    render() {
        return <div className="lds-roller">{this.Circles()}</div>
    }
}

Roller.propTypes = {
    color: PropTypes.string,
}

Roller.defaultProps = {
    color: '#fff',
}
