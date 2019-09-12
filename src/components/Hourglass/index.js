import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

export default function Hourglass({ color, className, style }) {
    return (
        <div className={`lds-hourglass ${className}`} style={{ ...style }}>
            <div className="lds-hourglass-after" style={{ background: color }}></div>
        </div>
    )
}

Hourglass.propTypes = {
    /** hex color */
    color: PropTypes.string,
    /** class name  */
    className: PropTypes.string,
    /** style object */
    style: PropTypes.object,
}

Hourglass.defaultProps = {
    color: '#7f58af',
    className: '',
    style: {},
}
