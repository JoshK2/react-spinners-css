import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

export default function Facebook({ color, className, style, size }) {
    const circles = [...Array(3)].map((_, index) => <div key={index} style={{ background: `${color}` }}></div>)

    return (
        <div className={`lds-facebook ${className}`} style={{ width: size, height: size, ...style }}>
            {circles}
        </div>
    )
}

Facebook.propTypes = {
    /** hex color */
    color: PropTypes.string,
    /** class name  */
    className: PropTypes.string,
    /** style object */
    style: PropTypes.object,
    /** size in pixel */
    size: PropTypes.number,
}

Facebook.defaultProps = {
    color: '#7f58af',
    className: '',
    style: {},
    size: 80,
}
