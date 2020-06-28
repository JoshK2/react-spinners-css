import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './style.module.css'

export default function Ripple({ color, className, style, size }) {
  const circles = [...Array(2)].map((_, index) => (
    <div
      key={index}
      style={{
        borderColor: `${color}`,
        borderWidth: size * 0.05,
      }}
    />
  ))

  return (
    <div className={classNames(styles['lds-ripple'], className)} style={{ width: size, height: size, ...style }}>
      {circles}
    </div>
  )
}

Ripple.propTypes = {
  /** hex color */
  color: PropTypes.string,
  /** class name  */
  className: PropTypes.string,
  /** style object */
  style: PropTypes.object,
  /** size in pixel */
  size: PropTypes.number,
}

Ripple.defaultProps = {
  color: '#7f58af',
  className: '',
  style: {},
  size: 80,
}
