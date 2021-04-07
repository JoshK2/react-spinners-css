import classNames from 'classnames'
import styles from './style.module.css'
import type { Props } from '../types'

type RollerProps = Omit<Props, 'size'>

export default function Roller({ color = '#7f58af', className, style }: RollerProps) {
  const circles = [...Array(8)].map((_, index) => {
    return (
      <div key={index}>
        <div className={classNames(styles['div-after'])} style={{ background: color }}></div>
      </div>
    )
  })

  return (
    <div className={classNames(styles['lds-roller'], className)} style={{ ...style }}>
      {circles}
    </div>
  )
}
