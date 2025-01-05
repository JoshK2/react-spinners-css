import React from 'react';
import classNames from 'classnames';
import styles from './style.module.css';
import type { SpinnerProps } from '@joshk/react-spinners-css.types';

export function Ripple({ color = '#7f58af', size = 80, className, style }: SpinnerProps) {
  const circles = [...Array(2)].map((_, index) => (
    <div
      key={index}
      style={{
        borderColor: `${color}`,
        borderWidth: size * 0.05,
      }}
    />
  ));

  return (
    <div className={classNames(styles['lds-ripple'], className)} style={{ width: size, height: size, ...style }}>
      {circles}
    </div>
  );
}
