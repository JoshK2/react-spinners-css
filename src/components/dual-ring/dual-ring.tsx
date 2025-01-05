import React from 'react';
import classNames from 'classnames';
import type { SpinnerProps } from '@joshk/react-spinners-css.types';
import styles from './style.module.css';

export function DualRing({
  color = '#7f58af',
  size = 80,
  className,
  style,
  ...rest
}: SpinnerProps) {
  return (
    <div
      className={classNames(styles['lds-dual-ring'], className)}
      style={{ width: size, height: size, ...style }}
      {...rest}
    >
      <div
        className={classNames(styles['lds-dual-ring-after'])}
        style={{
          borderColor: `${color} transparent`,
          borderWidth: size * 0.1,
          width: size * 0.7 - 6,
          height: size * 0.7 - 6,
        }}
      />
    </div>
  );
}
