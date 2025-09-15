import { For, createMemo } from "solid-js"

import { Badge } from "~/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"
import { Button } from "~/components/ui/button"
import { Tabs, TabsContent, TabsIndicator, TabsList, TabsTrigger } from "~/components/ui/tabs"
import type { DeepDiveSeries } from "~/data/site"

interface DeepDiveSectionProps {
  series: DeepDiveSeries[]
}

const DeepDiveSection = (props: DeepDiveSectionProps) => {
  const firstValue = createMemo(() => props.series[0]?.id ?? "")

  return (
    <section class="container pb-20 pt-10" id="series">
      <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-2">
          <Badge variant="outline" class="w-fit border-primary/40 text-primary">
            深掘り連載 / Deep Dives
          </Badge>
          <h2 class="font-serif text-3xl tracking-tight text-foreground md:text-4xl">
            UNIX的最小構成を磨くための連載アーカイブ
          </h2>
          <p class="max-w-2xl text-sm text-muted-foreground md:text-base">
            Bash・Zsh・Fishそれぞれの思想を尊重しながら、最新の実装アイデアを翻訳して紹介。
            Solid UIのコンポーネントを絡めたUI実装例も併載しています。
          </p>
        </div>

        <Tabs value={firstValue()} class="mt-4 flex flex-col gap-6">
          <TabsList class="w-full overflow-auto">
            <TabsIndicator class="bg-primary/70" />
            <For each={props.series}>
              {(item) => (
                <TabsTrigger value={item.id} class="min-w-[160px]">
                  <span class="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
                    {item.shell}
                  </span>
                </TabsTrigger>
              )}
            </For>
          </TabsList>

          <For each={props.series}>
            {(item) => (
              <TabsContent value={item.id}>
                <Card class="border border-border/60 bg-card/70">
                  <CardHeader>
                    <div class="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                      <div class="flex flex-col gap-3">
                        <CardTitle class="text-3xl font-semibold text-foreground">
                          {item.title}
                        </CardTitle>
                        <p class="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
                          {item.subtitle}
                        </p>
                      </div>
                      <Button
                        as="a"
                        href="#newsletter"
                        variant="outline"
                        size="sm"
                        class="border-primary/40"
                      >
                        {item.action}
                      </Button>
                    </div>
                    <CardDescription class="mt-4 text-sm leading-relaxed">
                      {item.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div class="grid gap-4 md:grid-cols-3">
                      <For each={item.highlights}>
                        {(highlight) => (
                          <div class="rounded-xl border border-border/40 bg-background/60 p-4">
                            <p class="font-mono text-xs uppercase tracking-[0.2em] text-primary/70">
                              {highlight.label}
                            </p>
                            <p class="mt-2 text-sm text-muted-foreground">{highlight.detail}</p>
                          </div>
                        )}
                      </For>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            )}
          </For>
        </Tabs>
      </div>
    </section>
  )
}

export default DeepDiveSection
