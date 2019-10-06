import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

export default function Ouroboro({ color, className, style }) {
    return (
        <div className={`lds-ouroboro ${className}`} style={{ ...style }}>
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
    /** class name  */
    className: PropTypes.string,
    /** style object */
    style: PropTypes.object,
}

Ouroboro.defaultProps = {
    color: '#7f58af',
    className: '',
    style: {},
}
