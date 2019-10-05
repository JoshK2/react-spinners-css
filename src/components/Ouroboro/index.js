import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

export default function Ouroboro({ color, size, className, style }) {
    return (
        <div className="spinner"  style={{ width: size, height: size }}>
            <span className="left">
                <span className="anim" style={{ background: color }}></span>
            </span>
            <span className="right">
                <span className="anim" style={{ background: color }}></span>
            </span>
        </div>
    )
}

Ouroboro.propTypes = {
    /** hex color */
    color: PropTypes.string,
/** size in pixel */
    size: PropTypes.number,
    /** class name  */
    className: PropTypes.string,
    /** style object */
    style: PropTypes.object,
}

Ouroboro.defaultProps = {
    color: '#7f58af',
    size: 64,
    className: '',
    style: {},
}
