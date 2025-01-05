import React from 'react';
import classNames from 'classnames';
import type { SpinnerProps } from '@joshk/react-spinners-css.types';
import styles from './style.module.css';

export function Ring({
  color = '#7f58af',
  size = 80,
  className,
  style,
}: SpinnerProps) {
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
      />
    );
  });

  return (
    <div
      className={classNames(styles['lds-ring'], className)}
      style={{ width: size, height: size, ...style }}
    >
      {circles}
    </div>
  );
}
