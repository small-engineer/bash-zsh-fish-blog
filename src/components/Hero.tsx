import { For, Show } from 'solid-js'
import type { Component } from 'solid-js'

import type { Article } from '~/data/articles'
import { Badge } from '~/components/ui/badge'
import { Button } from '~/components/ui/button'

interface HeroProps {
  article: Article
}

const Hero: Component<HeroProps> = (props) => {
  return (
    <section
      id={props.article.id}
      class="relative overflow-hidden rounded-[2.5rem] border border-border/60 bg-gradient-to-br from-primary/10 via-white to-accent/10 px-6 py-9 shadow-gentle md:px-12 md:py-14"
    >
      <div class="absolute inset-0 opacity-70" style={{ 'background-image': props.article.gradient }} />
      <div class="relative flex flex-col gap-8">
        <div class="flex flex-wrap items-center gap-3 text-xs">
          <Badge variant="soft" class="uppercase tracking-[0.18em] text-[11px]">
            特集 · {props.article.category}
          </Badge>
          <Show when={props.article.signal}>
            {(signal) => <Badge variant="outline" class="bg-white/60 text-foreground/80">{signal()}</Badge>}
          </Show>
          <Show when={props.article.release}>
            {(release) => <Badge variant="info">{release()}</Badge>}
          </Show>
        </div>
        <div class="space-y-5 md:max-w-3xl">
          <h1 class="text-3xl font-semibold leading-snug md:text-4xl">{props.article.title}</h1>
          <p class="text-base leading-relaxed text-foreground/75 md:text-lg">{props.article.description}</p>
          <div class="flex flex-wrap gap-2">
            <For each={props.article.tags}>
              {(tag) => <Badge variant="outline" class="bg-white/70 text-foreground/70">{tag}</Badge>}
            </For>
          </div>
        </div>
        <div class="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button
            size="lg"
            as="a"
            href={props.article.link}
            class="text-base font-semibold"
          >
            解説を読む
          </Button>
          <Button
            variant="outline"
            size="lg"
            as="a"
            href="#release-radar"
            class="text-base text-foreground/80"
          >
            リリース一覧へ
          </Button>
        </div>
        <Show when={props.article.insights?.length}>
          <div class="grid gap-4 md:grid-cols-3">
            <For each={props.article.insights}>
              {(insight) => (
                <div class="rounded-2xl border border-border/60 bg-white/80 p-4 text-sm shadow-inner">
                  <p class="text-xs font-semibold uppercase tracking-[0.2em] text-primary/70">{insight.label}</p>
                  <p class="mt-2 text-foreground/80">{insight.detail}</p>
                </div>
              )}
            </For>
          </div>
        </Show>
      </div>
    </section>
  )
}

export default Hero
