import { For } from 'solid-js'
import type { Component } from 'solid-js'

import type { EditorialTrack } from '~/data/articles'

interface EditorialTrackCardProps {
  track: EditorialTrack
}

const EditorialTrackCard: Component<EditorialTrackCardProps> = (props) => {
  return (
    <article
      id={props.track.id}
      class="h-full rounded-3xl border border-border/50 bg-white/90 p-6 shadow-gentle"
      style={{ 'background-image': props.track.accent }}
    >
      <div class="flex h-full flex-col gap-4">
        <h3 class="text-xl font-semibold text-foreground">{props.track.title}</h3>
        <p class="text-sm leading-relaxed text-foreground/75">{props.track.description}</p>
        <ul class="mt-2 space-y-2 text-sm text-foreground/70">
          <For each={props.track.bullets}>
            {(bullet) => <li class="flex gap-2"><span>・</span><span>{bullet}</span></li>}
          </For>
        </ul>
      </div>
    </article>
  )
}

export default EditorialTrackCard
