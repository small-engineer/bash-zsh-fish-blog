import { For } from 'solid-js'
import type { Component } from 'solid-js'

import type { ReleaseNote } from '~/data/articles'
import { Badge } from '~/components/ui/badge'

interface ReleaseRadarListProps {
  releases: ReleaseNote[]
}

const ReleaseRadarList: Component<ReleaseRadarListProps> = (props) => {
  return (
    <section
      id="release-radar"
      class="rounded-3xl border border-border/60 bg-white/90 shadow-gentle"
    >
      <ul class="divide-y divide-border/60">
        <For each={props.releases}>
          {(release) => (
            <li>
              <a
                href={release.link}
                class="flex flex-col gap-3 px-5 py-6 transition-colors hover:bg-secondary/50"
              >
                <div class="flex flex-wrap items-center gap-2">
                  <h3 class="flex-1 text-lg font-semibold text-foreground">{release.title}</h3>
                  <Badge variant="soft" class="text-xs uppercase tracking-[0.18em]">
                    {release.category}
                  </Badge>
                  <Badge variant="outline" class="text-xs font-semibold text-foreground/70">
                    {release.version}
                  </Badge>
                </div>
                <p class="text-sm leading-relaxed text-foreground/75">{release.summary}</p>
                <div class="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                  <span>{release.date}</span>
                  <span class="ml-auto flex items-center gap-1 font-semibold text-primary/80">
                    {release.highlight}
                    <span aria-hidden>→</span>
                  </span>
                </div>
              </a>
            </li>
          )}
        </For>
      </ul>
    </section>
  )
}

export default ReleaseRadarList
