import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './style.module.css'

export default function Ring({ color, size, className, style }) {
  const circles = [...Array(4)].map((_, index) => {
    return (
      <div
        key={index}
        style={{
          borderColor: `${color} transparent transparent transparent`,
          width: size * 0.8,
          height: size * 0.8,
          margin: size * 0.1,
          borderWidth: size * 0.1,
        }}
      ></div>
    )
  })

  return (
    <div className={classNames(styles['lds-ring'], className)} style={{ width: size, height: size, ...style }}>
      {circles}
    </div>
  )
}

Ring.propTypes = {
  /** hex color */
  color: PropTypes.string,
  /** size in pixel */
  size: PropTypes.number,
  /** class name  */
  className: PropTypes.string,
  /** style object */
  style: PropTypes.object,
}

Ring.defaultProps = {
  color: '#7f58af',
  size: 80,
  className: '',
  style: {},
}
