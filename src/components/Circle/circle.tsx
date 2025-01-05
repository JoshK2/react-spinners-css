import React from 'react';
import classNames from 'classnames';
import styles from './style.module.css';
import type { SpinnerProps } from '@joshk/react-spinners-css.types';

export function Circle({ color = '#7f58af', size = 64, className, style, ...rest }: SpinnerProps) {
  return (
    <div
      className={classNames(styles['lds-circle'], className)}
      style={{ background: color, width: size, height: size, ...style }}
      {...rest}
    />
  );
}
