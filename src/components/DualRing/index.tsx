import classNames from 'classnames'
import styles from './style.module.css'
import type { Props } from '../types'

export default function DualRing({ color = '#7f58af', size = 80, className, style, ...rest }: Props) {
  return (
    <div
      className={classNames(styles['lds-dual-ring'], className)}
      style={{ width: size, height: size, ...style }}
      {...rest}
    >
      <div
        className={classNames(styles['lds-dual-ring-after'])}
        style={{
          borderColor: `${color} transparent`,
          borderWidth: size * 0.1,
          width: size * 0.7 - 6,
          height: size * 0.7 - 6,
        }}
      ></div>
    </div>
  )
}
