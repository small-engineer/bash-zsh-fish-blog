import type { Component, ComponentProps } from 'solid-js'
import { splitProps } from 'solid-js'

import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

import { cn } from '~/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold tracking-wide transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-primary/10 text-primary',
        outline: 'border-border/60 text-foreground/70',
        soft: 'border-transparent bg-secondary text-secondary-foreground',
        info: 'border-transparent bg-info/20 text-info-foreground',
        success: 'border-transparent bg-success/25 text-success-foreground',
        warning: 'border-transparent bg-warning/20 text-warning-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

type BadgeProps = ComponentProps<'div'> & VariantProps<typeof badgeVariants>

const Badge: Component<BadgeProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'variant'])
  return <div class={cn(badgeVariants({ variant: local.variant }), local.class)} {...others} />
}

export { Badge, badgeVariants }
export type { BadgeProps }
