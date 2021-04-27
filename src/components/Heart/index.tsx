import classNames from 'classnames'
import styles from './style.module.css'
import type { Props } from '../types'

export default function Heart({ color = '#7f58af', size = 80, className, style, ...rest }: Props) {
  return (
    <div
      className={classNames(styles['lds-heart'], className)}
      style={{ width: size, height: size, ...style }}
      {...rest}
    >
      <div
        style={{
          background: color,
          width: size * 0.4,
          height: size * 0.4,
          left: size * 0.3,
          top: size * 0.3,
        }}
      >
        <div
          className={classNames(styles['div-before'])}
          style={{
            background: color,
            width: size * 0.4,
            height: size * 0.4,
            left: -size * 0.3,
          }}
        ></div>
        <div
          className={classNames(styles['div-after'])}
          style={{
            background: color,
            width: size * 0.4,
            height: size * 0.4,
            top: -size * 0.3,
          }}
        ></div>
      </div>
    </div>
  )
}
