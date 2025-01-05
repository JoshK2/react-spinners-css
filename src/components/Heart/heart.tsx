import React from 'react';
import classNames from 'classnames';
import type { SpinnerProps } from '@joshk/react-spinners-css.types';
import styles from './style.module.css';

export function Heart({
  color = '#7f58af',
  size = 80,
  className,
  style,
  ...rest
}: SpinnerProps) {
  return (
    <div
      className={classNames(styles['lds-heart'], className)}
      style={{ width: size, height: size, ...style }}
      {...rest}
    >
      <div
        style={{
          background: color,
          width: size * 0.4,
          height: size * 0.4,
          left: size * 0.3,
          top: size * 0.3,
        }}
      >
        <div
          className={classNames(styles['div-before'])}
          style={{
            background: color,
            width: size * 0.4,
            height: size * 0.4,
            left: -size * 0.3,
          }}
        />
        <div
          className={classNames(styles['div-after'])}
          style={{
            background: color,
            width: size * 0.4,
            height: size * 0.4,
            top: -size * 0.3,
          }}
        />
      </div>
    </div>
  );
}
