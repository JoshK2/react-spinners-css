import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

export default function Default({ color, className, style }) {
    const circles = [...Array(12)].map((_, index) => <div key={index} style={{ background: `${color}` }} />)

    return (
        <div className={`lds-default ${className}`} style={{ ...style }}>
            {circles}
        </div>
    )
}

Default.propTypes = {
    /** hex color */
    color: PropTypes.string,
    /** class name  */
    className: PropTypes.string,
    /** style object */
    style: PropTypes.object,
}

Default.defaultProps = {
    color: '#7f58af',
    className: '',
    style: {},
}
