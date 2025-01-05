import React from 'react';
import classNames from 'classnames';
import styles from './style.module.css';
import type { SpinnerProps } from '@joshk/react-spinners-css.types';

export function Ellipsis({ color = '#7f58af', size = 80, className, style, ...rest }: SpinnerProps) {
  const circles = [...Array(4)].map((_, index) => <div key={index} style={{ background: `${color}` }} />);

  return (
    <div
      className={classNames(styles['lds-ellipsis'], className)}
      style={{ ...style, width: size, height: size }}
      {...rest}
    >
      {circles}
    </div>
  );
}
