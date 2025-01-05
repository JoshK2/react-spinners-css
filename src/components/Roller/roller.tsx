import React from 'react';
import classNames from 'classnames';
import type { SpinnerProps } from '@joshk/react-spinners-css.types';
import styles from './style.module.css';

type RollerProps = Omit<SpinnerProps, 'size'>;

export function Roller({ color = '#7f58af', className, style }: RollerProps) {
  const circles = [...Array(8)].map((_, index) => {
    return (
      <div key={index}>
        <div
          className={classNames(styles['div-after'])}
          style={{ background: color }}
        />
      </div>
    );
  });

  return (
    <div
      className={classNames(styles['lds-roller'], className)}
      style={{ ...style }}
    >
      {circles}
    </div>
  );
}
