import { For } from "solid-js"

import { Badge } from "~/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card"
import type { ReleaseNote } from "~/data/site"

interface ReleaseTimelineProps {
  notes: ReleaseNote[]
}

const ReleaseTimeline = (props: ReleaseTimelineProps) => {
  return (
    <section class="container pb-20 pt-10" id="timeline">
      <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-2">
          <Badge variant="outline" class="w-fit border-primary/40 text-primary">
            リリース・タイムライン
          </Badge>
          <h2 class="font-serif text-3xl tracking-tight text-foreground md:text-4xl">
            最新リリースをUNIX的視点で圧縮レビュー
          </h2>
          <p class="max-w-2xl text-sm text-muted-foreground md:text-base">
            バージョン番号だけでなく、導入時に見落としがちな副作用や設定変更も添えてダイジェストします。
            日本語の現場での検証結果を一次情報として掲載。
          </p>
        </div>

        <div class="relative pl-6">
          <div class="absolute left-[7px] top-0 h-full w-px bg-gradient-to-b from-primary/50 to-transparent" />
          <div class="flex flex-col gap-8">
            <For each={props.notes}>
              {(note) => (
                <Card class="border border-border/60 bg-card/70">
                  <CardHeader class="relative">
                    <span class="absolute -left-[33px] top-6 h-3 w-3 rounded-full border border-primary/60 bg-background" />
                    <div class="flex flex-wrap items-center gap-3">
                      <Badge variant="outline" class="border-border/50 text-xs uppercase">
                        {note.shell}
                      </Badge>
                      <span class="font-mono text-xs text-muted-foreground">
                        {note.date}
                      </span>
                    </div>
                    <CardTitle class="text-2xl text-foreground">
                      {note.name} {note.version}
                    </CardTitle>
                    <CardDescription class="text-sm text-primary/80">
                      {note.headline}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p class="text-sm leading-relaxed text-muted-foreground">{note.detail}</p>
                  </CardContent>
                </Card>
              )}
            </For>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ReleaseTimeline
