import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

export default function Orbitals({ color, className, style }) {
    return (
        <div className={`lds-orbitals ${className}`} style={{ ...style }}>
            <div class="center" style={{ background: color }}></div>
            <div class="inner-spin">
                <div class="inner-arc inner-arc_start-a" style={{ 'border-color': color }}></div>
                <div class="inner-arc inner-arc_end-a" style={{ 'border-color': color }}></div>
                <div class="inner-arc inner-arc_start-b" style={{ 'border-color': color }}></div>
                <div class="inner-arc inner-arc_end-b" style={{ 'border-color': color }}></div>
                <div class="inner-moon-a" style={{ background: color }}></div>
                <div class="inner-moon-b" style={{ background: color }}></div>
            </div>
            <div class="outer-spin">
                <div class="outer-arc outer-arc_start-a" style={{ 'border-color': color }}></div>
                <div class="outer-arc outer-arc_end-a" style={{ 'border-color': color }}></div>
                <div class="outer-arc outer-arc_start-b" style={{ 'border-color': color }}></div>
                <div class="outer-arc outer-arc_end-b" style={{ 'border-color': color }}></div>
                <div class="outer-moon-a" style={{ background: color }}></div>
                <div class="outer-moon-b" style={{ background: color }}></div>

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
