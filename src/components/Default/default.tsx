import React from 'react';
import classNames from 'classnames';
import type { SpinnerProps } from '@joshk/react-spinners-css.types';
import styles from './style.module.css';

export function Default({
  color = '#7f58af',
  size = 80,
  className,
  style,
  ...rest
}: SpinnerProps) {
  const circles = [...Array(12)].map((_, index) => (
    <div
      key={index}
      style={{
        background: `${color}`,
        width: size * 0.075,
        height: size * 0.075,
      }}
    />
  ));

  return (
    <div
      className={classNames(styles['lds-default'], className)}
      style={{ height: size, width: size, ...style }}
      {...rest}
    >
      {circles}
    </div>
  );
}
