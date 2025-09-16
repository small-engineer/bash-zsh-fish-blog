import type { Component, ComponentProps } from 'solid-js'
import { splitProps } from 'solid-js'

import { cn } from '~/lib/utils'

const Card: Component<ComponentProps<'div'>> = (props) => {
  const [local, others] = splitProps(props, ['class'])
  return <div class={cn('card-surface', local.class)} {...others} />
}

const CardHeader: Component<ComponentProps<'div'>> = (props) => {
  const [local, others] = splitProps(props, ['class'])
  return <div class={cn('flex flex-col gap-2 p-6 pb-4', local.class)} {...others} />
}

const CardTitle: Component<ComponentProps<'h3'>> = (props) => {
  const [local, others] = splitProps(props, ['class'])
  return <h3 class={cn('text-xl font-semibold text-foreground', local.class)} {...others} />
}

const CardDescription: Component<ComponentProps<'p'>> = (props) => {
  const [local, others] = splitProps(props, ['class'])
  return <p class={cn('text-sm leading-relaxed text-muted-foreground', local.class)} {...others} />
}

const CardContent: Component<ComponentProps<'div'>> = (props) => {
  const [local, others] = splitProps(props, ['class'])
  return <div class={cn('p-6 pt-0 text-sm text-foreground/90', local.class)} {...others} />
}

const CardFooter: Component<ComponentProps<'div'>> = (props) => {
  const [local, others] = splitProps(props, ['class'])
  return <div class={cn('flex items-center gap-3 border-t border-border/60 px-6 py-5', local.class)} {...others} />
}

export { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle }
