import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

export default function Grid({ color }) {
  const circles = [...Array(9)].map((_, index) => (
    <div key={index} style={{ background: `${color}` }} />
  ));

  return <div className="lds-grid">{circles}</div>;
}

Grid.propTypes = {
    /** hex color */
    color: PropTypes.string,
}

Grid.defaultProps = {
    color: '#7f58af',
}
