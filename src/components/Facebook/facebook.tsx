import React from 'react';
import classNames from 'classnames';
import styles from './style.module.css';
import type { SpinnerProps } from '@joshk/react-spinners-css.types';

export function Facebook({ color = '#7f58af', size = 80, className, style, ...rest }: SpinnerProps) {
  const circles = [...Array(3)].map((_, index) => <div key={index} style={{ background: `${color}` }}></div>);

  return (
    <div
      className={classNames(styles['lds-facebook'], className)}
      style={{ width: size, height: size, ...style }}
      {...rest}
    >
      {circles}
    </div>
  );
}
