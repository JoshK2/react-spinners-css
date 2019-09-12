import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

export default function Heart({ color, className, style }) {
    return (
        <div className={`lds-heart ${className}`} style={{ ...style }}>
            <div style={{ background: color }}>
                <div className="div-before" style={{ background: color }}></div>
                <div className="div-after" style={{ background: color }}></div>
            </div>
        </div>
    )
}

Heart.propTypes = {
    /** hex color */
    color: PropTypes.string,
    /** class name  */
    className: PropTypes.string,
    /** style object */
    style: PropTypes.object,
}

Heart.defaultProps = {
    color: '#7f58af',
    className: '',
    style: {},
}
