/* eslint-disable @typescript-eslint/no-empty-object-type */
import React from 'react'

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const InstagramIcon: React.FC<IconProps> = props => (
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
    <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
    <path d="M16 11.37a4 4 0 1 1-3.73-3.73" />
    <line x1={17.5} y1={6.5} x2={17.51} y2={6.5} />
  </svg>
)