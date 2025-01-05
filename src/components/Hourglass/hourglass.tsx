import React from 'react';
import classNames from 'classnames';
import type { SpinnerProps } from '@joshk/react-spinners-css.types';
import styles from './style.module.css';

export function Hourglass({
  color = '#7f58af',
  size = 32,
  className,
  style,
}: SpinnerProps) {
  return (
    <div
      className={classNames(styles['lds-hourglass'], className)}
      style={{ ...style }}
    >
      <div
        className={classNames(styles['lds-hourglass-after'])}
        // @ts-ignore
        style={{ background: color, borderWidth: size, borderHeight: size }}
      />
    </div>
  );
}
