import classNames from 'classnames'
import styles from './style.module.css'
import type { Props } from '../types'

export default function Grid({ color = '#7f58af', size = 80, className, style, ...rest }: Props) {
  const circles = [...Array(9)].map((_, index) => <div key={index} style={{ background: `${color}` }} />)

  return (
    <div
      className={classNames(styles['lds-grid'], className)}
      style={{ width: size, height: size, ...style }}
      {...rest}
    >
      {circles}
    </div>
  )
}
