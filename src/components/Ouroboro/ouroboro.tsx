import React from 'react';
import classNames from 'classnames';
import type { SpinnerProps } from '@joshk/react-spinners-css.types';
import styles from './style.module.css';

export function Ouroboro({
  color = '#7f58af',
  style,
  className,
}: SpinnerProps) {
  return (
    <div
      className={classNames(styles['lds-ouroboro'], className)}
      style={{ ...style }}
    >
      <span className={classNames(styles.left)}>
        <span
          className={classNames(styles.anim)}
          style={{ background: color }}
        />
      </span>
      <span className={classNames(styles.right)}>
        <span
          className={classNames(styles.anim)}
          style={{ background: color }}
        />
      </span>
    </div>
  );
}
