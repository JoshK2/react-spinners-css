import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './style.module.css'

export default function Ouroboro({ color, className, style }) {
  return (
    <div className={classNames(styles['lds-ouroboro'], className)} style={{ ...style }}>
      <span className={classNames(styles.left)}>
        <span className={classNames(styles.anim)} style={{ background: color }}></span>
      </span>
      <span className={classNames(styles.right)}>
        <span className={classNames(styles.anim)} style={{ background: color }}></span>
      </span>
    </div>
  )
}

Ouroboro.propTypes = {
  /** hex color */
  color: PropTypes.string,
  /** class name  */
  className: PropTypes.string,
  /** style object */
  style: PropTypes.object,
}

Ouroboro.defaultProps = {
  color: '#7f58af',
  className: '',
  style: {},
}
