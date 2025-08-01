import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80',
        secondary:
          'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
        destructive:
          'border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80',
        outline: 'text-foreground',
        // SAFS-specific variants
        sandstone:
          'border-transparent bg-sandstone text-charcoal shadow hover:bg-sandstone/80',
        terracotta:
          'border-transparent bg-terracotta text-sandstone shadow hover:bg-terracotta/80',
        'ocean-blue':
          'border-transparent bg-ocean-blue text-sandstone shadow hover:bg-ocean-blue/80',
        ochre:
          'border-transparent bg-ochre text-charcoal shadow hover:bg-ochre/80',
        charcoal:
          'border-transparent bg-charcoal text-sandstone shadow hover:bg-charcoal/80',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
