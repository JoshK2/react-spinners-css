import classNames from 'classnames'
import styles from './style.module.css'
import type { Props } from '../types'

export default function Circle({ color = '#7f58af', size = 64, className, style, ...rest }: Props) {
  return (
    <div
      className={classNames(styles['lds-circle'], className)}
      style={{ background: color, width: size, height: size, ...style }}
      {...rest}
    />
  )
}
