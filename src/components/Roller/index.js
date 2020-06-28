import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './style.module.css'

export default function Roller({ color, className, style }) {
  const circles = [...Array(8)].map((_, index) => {
    return (
      <div key={index}>
        <div className={classNames(styles['div-after'])} style={{ background: color }}></div>
      </div>
    )
  })

  return (
    <div className={classNames(styles['lds-roller'], className)} style={{ ...style }}>
      {circles}
    </div>
  )
}

Roller.propTypes = {
  /** hex color */
  color: PropTypes.string,
  /** class name  */
  className: PropTypes.string,
  /** style object */
  style: PropTypes.object,
}

Roller.defaultProps = {
  color: '#7f58af',
  className: '',
  style: {},
}
