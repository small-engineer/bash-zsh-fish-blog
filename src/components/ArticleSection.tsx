import { For } from "solid-js"

import { Badge } from "~/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"
import type { ArticleSummary } from "~/data/site"

interface ArticleSectionProps {
  articles: ArticleSummary[]
}

const categoryBadgeVariant = (category: ArticleSummary["category"]) => {
  switch (category) {
    case "Bash":
      return "success" as const
    case "Zsh":
      return "warning" as const
    case "Fish":
      return "info" as const
    default:
      return "secondary" as const
  }
}

const ArticleSection = (props: ArticleSectionProps) => {
  return (
    <section class="container pb-20 pt-10" id="articles">
      <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-2">
          <Badge variant="outline" class="w-fit border-primary/40 text-primary">
            シェル速報 / Latest Dispatch
          </Badge>
          <h2 class="font-serif text-3xl tracking-tight text-foreground md:text-4xl">
            現場の端末で即役立つアップデート
          </h2>
          <p class="max-w-2xl text-sm text-muted-foreground md:text-base">
            リリースノートの翻訳ではなく、実際に導入した結果を観測値とともに届けます。
            各記事の要点はシェルスクリプトに戻れる粒度で整理しています。
          </p>
        </div>

        <div class="grid gap-6 md:grid-cols-2">
          <For each={props.articles}>
            {(article) => (
              <Card class="h-full">
                <CardHeader>
                  <div class="flex items-center justify-between">
                    <Badge variant={categoryBadgeVariant(article.category)}>
                      {article.category}
                    </Badge>
                    <span class="font-mono text-xs text-muted-foreground">
                      {article.date} · {article.readTime}
                    </span>
                  </div>
                  <CardTitle class="mt-3 text-2xl font-semibold leading-tight">
                    {article.title}
                  </CardTitle>
                  <CardDescription class="text-sm leading-relaxed">
                    {article.summary}
                  </CardDescription>
                </CardHeader>
                <CardContent class="flex flex-wrap gap-2">
                  <For each={article.topics}>
                    {(topic) => (
                      <Badge variant="outline" class="border-border/50 text-xs text-muted-foreground">
                        #{topic}
                      </Badge>
                    )}
                  </For>
                </CardContent>
              </Card>
            )}
          </For>
        </div>
      </div>
    </section>
  )
}

export default ArticleSection
