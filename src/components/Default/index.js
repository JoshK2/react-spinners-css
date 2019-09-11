import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

export default function Default({ color }) {
    const circles = [...Array(12)].map((_, index) => <div key={index} style={{ background: `${color}` }} />)

    return <div className="lds-default">{circles}</div>
}

Default.propTypes = {
    /** hex color */
    color: PropTypes.string,
}

Default.defaultProps = {
    color: '#7f58af',
}
