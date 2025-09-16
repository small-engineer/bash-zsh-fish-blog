import { For } from 'solid-js'
import type { Component } from 'solid-js'

import type { DeepDive } from '~/data/articles'
import { Badge } from '~/components/ui/badge'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '~/components/ui/card'

interface ShellDeepDiveCardProps {
  dive: DeepDive
}

const ShellDeepDiveCard: Component<ShellDeepDiveCardProps> = (props) => {
  return (
    <a href={props.dive.link} class="block h-full">
      <Card class="h-full">
        <CardHeader class="gap-3 pb-3">
          <Badge variant="soft" class="w-fit text-xs tracking-wide uppercase">
            {props.dive.shell}
          </Badge>
          <CardTitle class="text-lg font-semibold leading-snug">{props.dive.title}</CardTitle>
          <CardDescription>{props.dive.summary}</CardDescription>
        </CardHeader>
        <CardContent class="space-y-4">
          <div class="grid grid-cols-2 gap-2 text-xs">
            <For each={props.dive.metrics}>
              {(metric) => (
                <div class="rounded-xl border border-border/50 bg-secondary/60 px-3 py-2">
                  <p class="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{metric.label}</p>
                  <p class="mt-1 font-semibold text-foreground/80">{metric.value}</p>
                </div>
              )}
            </For>
          </div>
          <ul class="space-y-2 text-sm text-foreground/75">
            <For each={props.dive.bullets}>
              {(bullet) => <li class="flex gap-2"><span>・</span><span>{bullet}</span></li>}
            </For>
          </ul>
        </CardContent>
        <CardFooter class="justify-end text-sm font-semibold text-primary">
          詳細を読む
        </CardFooter>
      </Card>
    </a>
  )
}

export default ShellDeepDiveCard
