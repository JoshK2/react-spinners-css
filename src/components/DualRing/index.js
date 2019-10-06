import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

export default function DualRing({ color, className, style, size }) {
    return (
        <div className={`lds-dual-ring ${className}`} style={{ width: size, height: size, ...style }}>
            <div
                className="lds-dual-ring-after"
                style={{
                    borderColor: `${color} transparent`,
                    borderWidth: size * 0.1,
                    width: size * 0.7 - 6,
                    height: size * 0.7 - 6,
                }}
            ></div>
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
    /** size in pixel */
    size: PropTypes.number,
}

DualRing.defaultProps = {
    color: '#7f58af',
    className: '',
    style: {},
    size: 80,
}
