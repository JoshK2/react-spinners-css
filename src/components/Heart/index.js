import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

export default function Heart({ color, className, style, size }) {
    return (
        <div className={`lds-heart ${className}`} style={{ width: size, height: size, ...style }}>
            <div
                style={{
                    background: color,
                    width: size * 0.4,
                    height: size * 0.4,
                    left: size * 0.3,
                    top: size * 0.3,
                }}
            >
                <div
                    className="div-before"
                    style={{
                        background: color,
                        width: size * 0.4,
                        height: size * 0.4,
                        left: -size * 0.3,
                    }}
                ></div>
                <div
                    className="div-after"
                    style={{
                        background: color,
                        width: size * 0.4,
                        height: size * 0.4,
                        top: -size * 0.3,
                    }}
                ></div>
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
    /** size in pixel */
    size: PropTypes.number,
}

Heart.defaultProps = {
    color: '#7f58af',
    className: '',
    style: {},
    size: 80,
}
