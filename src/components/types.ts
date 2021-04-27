import React from 'react'

export type Props = {
  /** hex color */
  color?: string
  /** size in pixel */
  size?: number
} & React.HTMLAttributes<HTMLDivElement>
