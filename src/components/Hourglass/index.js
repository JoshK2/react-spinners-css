import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './style.module.css'

export default function Hourglass({ color, size, className, style }) {
  return (
    <div className={classNames(styles['lds-hourglass'], className)} style={{ ...style }}>
      <div
        className={classNames(styles['lds-hourglass-after'])}
        style={{ background: color, borderWidth: size, borderHeight: size }}
      ></div>
    </div>
  )
}

Hourglass.propTypes = {
  /** hex color */
  color: PropTypes.string,
  /** size in pixel */
  size: PropTypes.number,
  /** class name  */
  className: PropTypes.string,
  /** style object */
  style: PropTypes.object,
}

Hourglass.defaultProps = {
  color: '#7f58af',
  className: '',
  size: 32,
  style: {},
}
