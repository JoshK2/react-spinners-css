import classNames from 'classnames'
import styles from './style.module.css'
import type { Props } from '../types'

export default function Ellipsis({ color = '#7f58af', size = 80, className, style, ...rest }: Props) {
  const circles = [...Array(4)].map((_, index) => <div key={index} style={{ background: `${color}` }} />)

  return (
    <div
      className={classNames(styles['lds-ellipsis'], className)}
      style={{ ...style, width: size, height: size }}
      {...rest}
    >
      {circles}
    </div>
  )
}
