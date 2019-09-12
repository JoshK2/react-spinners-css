import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

export default function Ripple({ color, className, style }) {
    const circles = [...Array(2)].map((_, index) => <div key={index} style={{ borderColor: `${color}` }} />)

    return (
        <div className={`lds-ripple ${className}`} style={{ ...style }}>
            {circles}
        </div>
    )
}

Ripple.propTypes = {
    /** hex color */
    color: PropTypes.string,
    /** class name  */
    className: PropTypes.string,
    /** style object */
    style: PropTypes.object,
}

Ripple.defaultProps = {
    color: '#7f58af',
    className: '',
    style: {},
}
