import type { SVGProps } from 'react'

export function PkLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 100 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      {/* P stem */}
      <path
        d="M18 8 V102"
        stroke="url(#pk-gold)"
        strokeWidth="7"
        strokeLinecap="round"
      />
      {/* P bowl */}
      <path
        d="M18 12 H44 a22 22 0 0 1 0 44 H18"
        stroke="url(#pk-gold)"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* K diagonal up */}
      <path
        d="M52 8 L88 8"
        stroke="url(#pk-gold)"
        strokeWidth="7"
        strokeLinecap="round"
        opacity="0"
      />
      {/* K vertical */}
      <path
        d="M56 30 V102"
        stroke="url(#pk-gold)"
        strokeWidth="7"
        strokeLinecap="round"
      />
      {/* K upper diagonal */}
      <path
        d="M90 30 L58 66"
        stroke="url(#pk-gold)"
        strokeWidth="7"
        strokeLinecap="round"
      />
      {/* K lower diagonal */}
      <path
        d="M68 56 L92 102"
        stroke="url(#pk-gold)"
        strokeWidth="7"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient id="pk-gold" x1="10" y1="10" x2="95" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#e0a96d" />
          <stop offset="0.5" stopColor="#c88a52" />
          <stop offset="1" stopColor="#a06a38" />
        </linearGradient>
      </defs>
    </svg>
  )
}
