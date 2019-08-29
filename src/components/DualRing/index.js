import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

export default class DualRing extends Component {
    render() {
        return (
            <div className="lds-dual-ring">
                <div className="lds-dual-ring-after" style={{borderColor: `${this.props.color} transparent`}}></div>
            </div>
        )
    }
}

DualRing.propTypes = {
    color: PropTypes.string
}

DualRing.defaultProps = {
    color: '#fff'
}