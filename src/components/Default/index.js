import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

export default function Default({ color, className, style, size }) {
    const circles = [...Array(12)].map((_, index) => (
        <div key={index} style={{ background: `${color}`, width: size * 0.075, height: size * 0.075 }} />
    ))

    return (
        <div className={`lds-default ${className}`} style={{ height: size, width: size, ...style }}>
            {circles}
        </div>
    )
}

Default.propTypes = {
    /** hex color */
    color: PropTypes.string,
    /** size in pixel */
    size: PropTypes.number,
    /** class name  */
    className: PropTypes.string,
    /** style object */
    style: PropTypes.object,
}

Default.defaultProps = {
    color: '#7f58af',
    size: 80,
    className: '',
    style: {},
}
