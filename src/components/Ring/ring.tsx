import React from 'react';
import classNames from 'classnames';
import styles from './style.module.css';
import type { SpinnerProps } from '@joshk/react-spinners-css.types';

export function Ring({ color = '#7f58af', size = 80, className, style }: SpinnerProps) {
  const circles = [...Array(4)].map((_, index) => {
    return (
      <div
        key={index}
        style={{
          borderColor: `${color} transparent transparent transparent`,
          width: size * 0.8,
          height: size * 0.8,
          margin: size * 0.1,
          borderWidth: size * 0.1,
        }}
      ></div>
    );
  });

  return (
    <div className={classNames(styles['lds-ring'], className)} style={{ width: size, height: size, ...style }}>
      {circles}
    </div>
  );
}
