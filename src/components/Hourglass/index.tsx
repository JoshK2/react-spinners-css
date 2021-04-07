import classNames from 'classnames'
import styles from './style.module.css'
import type { Props } from '../types'

export default function Hourglass({ color = '#7f58af', size = 32, className, style }: Props) {
  return (
    <div className={classNames(styles['lds-hourglass'], className)} style={{ ...style }}>
      <div
        className={classNames(styles['lds-hourglass-after'])}
        //@ts-ignore
        style={{ background: color, borderWidth: size, borderHeight: size }}
      ></div>
    </div>
  )
}
