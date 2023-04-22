import React from 'react';

export type SpinnerProps = {
  /** hex color */
  color?: string;
  /** size in pixel */
  size?: number;
} & React.HTMLAttributes<HTMLDivElement>;
