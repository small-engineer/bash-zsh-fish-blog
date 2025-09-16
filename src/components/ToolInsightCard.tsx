import { For } from 'solid-js'
import type { Component } from 'solid-js'

import type { ToolInsight } from '~/data/articles'
import { Badge } from '~/components/ui/badge'

interface ToolInsightCardProps {
  insight: ToolInsight
}

const ToolInsightCard: Component<ToolInsightCardProps> = (props) => {
  return (
    <a
      id={props.insight.id}
      href={props.insight.link}
      class="group block rounded-3xl border border-border/60 bg-white/90 p-6 shadow-gentle transition-transform duration-200 hover:-translate-y-1"
      style={{ 'background-image': props.insight.gradient }}
    >
      <div class="flex flex-col gap-4">
        <Badge variant="soft" class="w-fit text-xs uppercase tracking-[0.18em]">
          {props.insight.category}
        </Badge>
        <div class="space-y-2">
          <h3 class="text-xl font-semibold text-foreground">
            {props.insight.title}
          </h3>
          <p class="text-sm leading-relaxed text-foreground/75">{props.insight.description}</p>
        </div>
        <div class="flex flex-wrap gap-2 text-xs text-foreground/75">
          <For each={props.insight.metrics}>
            {(metric) => <Badge variant="outline" class="bg-white/70">{metric}</Badge>}
          </For>
        </div>
        <span class="mt-2 text-sm font-semibold text-primary/80">
          実装ノートを見る →
        </span>
      </div>
    </a>
  )
}

export default ToolInsightCard
