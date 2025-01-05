import React from 'react';
import classNames from 'classnames';
import styles from './style.module.css';
import type { SpinnerProps } from '@joshk/react-spinners-css.types';

export function Grid({ color = '#7f58af', size = 80, className, style, ...rest }: SpinnerProps) {
  const circles = [...Array(9)].map((_, index) => <div key={index} style={{ background: `${color}` }} />);

  return (
    <div
      className={classNames(styles['lds-grid'], className)}
      style={{ width: size, height: size, ...style }}
      {...rest}
    >
      {circles}
    </div>
  );
}
