import { Show } from 'solid-js'
import type { Component } from 'solid-js'

import { Button } from '~/components/ui/button'

interface SectionTitleProps {
  id?: string
  title: string
  description?: string
  actionLabel?: string
  actionHref?: string
}

const SectionTitle: Component<SectionTitleProps> = (props) => {
  return (
    <div
      id={props.id}
      class="flex flex-col gap-3 pb-2 pt-1 md:flex-row md:items-center md:justify-between"
    >
      <div class="max-w-2xl space-y-1">
        <h2 class="text-2xl font-semibold text-foreground md:text-3xl">{props.title}</h2>
        <Show when={props.description}>
          {(description) => (
            <p class="text-sm leading-relaxed text-muted-foreground">{description()}</p>
          )}
        </Show>
      </div>
      <Show when={props.actionLabel && props.actionHref}>
        <Button
          variant="link"
          as="a"
          href={props.actionHref}
          class="text-sm font-semibold text-primary hover:text-primary/80"
        >
          {props.actionLabel}
        </Button>
      </Show>
    </div>
  )
}

export default SectionTitle
