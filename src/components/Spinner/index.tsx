import classNames from 'classnames'
import styles from './style.module.css'
import type { Props } from '../types'

type SpinnerProps = Omit<Props, 'size'>

export default function Spinner({ color = '#7f58af', className, style }: SpinnerProps) {
  const circles = [...Array(12)].map((_, index) => {
    return (
      <div key={index}>
        <div className={classNames(styles['div-after'])} style={{ background: color }}></div>
      </div>
    )
  })

  return (
    <div className={classNames(styles['lds-spinner'], className)} style={{ ...style }}>
      {circles}
    </div>
  )
}
