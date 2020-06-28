import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './style.module.css'

export default function Circle({ color, size, className, style }) {
  return (
    <div
      className={classNames(styles['lds-circle'], className)}
      style={{ background: color, width: size, height: size, ...style }}
    />
  )
}

Circle.propTypes = {
  /** hex color */
  color: PropTypes.string,
  /** size in pixel */
  size: PropTypes.number,
  /** class name  */
  className: PropTypes.string,
  /** style object */
  style: PropTypes.object,
}

Circle.defaultProps = {
  color: '#7f58af',
  size: 64,
  className: '',
  style: {},
}
