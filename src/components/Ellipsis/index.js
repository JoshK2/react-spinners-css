import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './style.module.css'

export default function Ellipsis({ color, size, className, style }) {
  const circles = [...Array(4)].map((_, index) => <div key={index} style={{ background: `${color}` }} />)

  return (
    <div className={classNames(styles['lds-ellipsis'], className)} style={{ ...style, width: size, height: size }}>
      {circles}
    </div>
  )
}

Ellipsis.propTypes = {
  /** hex color */
  color: PropTypes.string,
  /** size in pixel */
  size: PropTypes.number,
  /** class name  */
  className: PropTypes.string,
  /** style object */
  style: PropTypes.object,
}

Ellipsis.defaultProps = {
  color: '#7f58af',
  size: 80,
  className: '',
  style: {},
}
