import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

export default function Grid({ color, className, style }) {
    const circles = [...Array(9)].map((_, index) => <div key={index} style={{ background: `${color}` }} />)

    return (
        <div className={`lds-grid ${className}`} style={{ ...style }}>
            {circles}
        </div>
    )
}

Grid.propTypes = {
    /** hex color */
    color: PropTypes.string,
    /** class name  */
    className: PropTypes.string,
    /** style object */
    style: PropTypes.object,
}

Grid.defaultProps = {
    color: '#7f58af',
    className: '',
    style: {},
}
