import classNames from 'classnames'
import styles from './style.module.css'
import type { Props } from '../types'

export default function Ouroboro({ color = '#7f58af', style, className }: Props) {
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
