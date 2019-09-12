import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

export default function DualRing({ color, className, style }) {
    return (
        <div className={`lds-dual-ring ${className}`} style={{ ...style }}>
            <div className="lds-dual-ring-after" style={{ borderColor: `${color} transparent` }}></div>
        </div>
    )
}

DualRing.propTypes = {
    /** hex color */
    color: PropTypes.string,
    /** class name  */
    className: PropTypes.string,
    /** style object */
    style: PropTypes.object,
}

DualRing.defaultProps = {
    color: '#7f58af',
    className: '',
    style: {},
}
