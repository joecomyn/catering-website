import React from 'react'
import type { IconProps } from './InstagramIcon'

export const LinkedInIcon: React.FC<IconProps> = props => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    width="24"
    height="24"
    {...props}
  >
    <rect x={2} y={9} width={4} height={12} />
    <circle cx={4} cy={4} r={2} />
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
  </svg>
)