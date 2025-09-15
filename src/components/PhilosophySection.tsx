import { For } from "solid-js"

import { Badge } from "~/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card"
import type { PhilosophyPoint } from "~/data/site"

interface PhilosophySectionProps {
  points: PhilosophyPoint[]
}

const PhilosophySection = (props: PhilosophySectionProps) => {
  return (
    <section class="container pb-20 pt-10" id="philosophy">
      <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-2">
          <Badge variant="outline" class="w-fit border-primary/40 text-primary">
            設計思想 / Philosophy
          </Badge>
          <h2 class="font-serif text-3xl tracking-tight text-foreground md:text-4xl">
            最小で最大を生む設計原理
          </h2>
          <p class="max-w-2xl text-sm text-muted-foreground md:text-base">
            余分な飾りを削ぎ落とし、必要な強度だけを残す。UNIX的な考え方を日本語の文体で再構成しました。
          </p>
        </div>

        <div class="grid gap-6 md:grid-cols-3">
          <For each={props.points}>
            {(point) => (
              <Card class="border border-border/60 bg-card/70">
                <CardHeader>
                  <CardTitle class="text-xl text-foreground">{point.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p class="text-sm leading-relaxed text-muted-foreground">
                    {point.description}
                  </p>
                </CardContent>
              </Card>
            )}
          </For>
        </div>
      </div>
    </section>
  )
}

export default PhilosophySection
