import React from 'react';
import classNames from 'classnames';
import styles from './style.module.css';
import type { SpinnerProps } from '@joshk/react-spinners-css.types';

export function Ouroboro({ color = '#7f58af', style, className }: SpinnerProps) {
  return (
    <div className={classNames(styles['lds-ouroboro'], className)} style={{ ...style }}>
      <span className={classNames(styles.left)}>
        <span className={classNames(styles.anim)} style={{ background: color }}></span>
      </span>
      <span className={classNames(styles.right)}>
        <span className={classNames(styles.anim)} style={{ background: color }}></span>
      </span>
    </div>
  );
}
