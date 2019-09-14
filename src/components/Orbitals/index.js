import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

export default function Orbitals({ color, className, style }) {
    return (
        <div className={`lds-orbitals ${className}`} style={{ ...style }}>
            <div className="center" style={{ background: color }}></div>
            <div className="inner-spin">
                <div className="inner-arc inner-arc_start-a" style={{ borderColor: color }}></div>
                <div className="inner-arc inner-arc_end-a" style={{ borderColor: color }}></div>
                <div className="inner-arc inner-arc_start-b" style={{ borderColor: color }}></div>
                <div className="inner-arc inner-arc_end-b" style={{ borderColor: color }}></div>
                <div className="inner-moon-a" style={{ background: color }}></div>
                <div className="inner-moon-b" style={{ background: color }}></div>
            </div>
            <div className="outer-spin">
                <div className="outer-arc outer-arc_start-a" style={{ borderColor: color }}></div>
                <div className="outer-arc outer-arc_end-a" style={{ borderColor: color }}></div>
                <div className="outer-arc outer-arc_start-b" style={{ borderColor: color }}></div>
                <div className="outer-arc outer-arc_end-b" style={{ borderColor: color }}></div>
                <div className="outer-moon-a" style={{ background: color }}></div>
                <div className="outer-moon-b" style={{ background: color }}></div>
            </div>
        </div>
    )
}

Orbitals.propTypes = {
    /** hex color */
    color: PropTypes.string,
    /** class name  */
    className: PropTypes.string,
    /** style object */
    style: PropTypes.object,
}

Orbitals.defaultProps = {
    color: '#7f58af',
    className: '',
    style: {},
}
