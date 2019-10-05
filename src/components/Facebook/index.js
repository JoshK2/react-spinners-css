import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

export default function Facebook({ color, className, style }) {
    const circles = [...Array(3)].map((_, index) => <div key={index} style={{ background: `${color}` }}></div>)

    return (
        <div className={`lds-facebook ${className}`} style={{ ...style }}>
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
}

Facebook.defaultProps = {
    color: '#7f58af',
    className: '',
    size: 80,
    style: {},
}
