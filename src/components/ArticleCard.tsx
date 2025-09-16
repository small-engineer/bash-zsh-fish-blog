import { For } from 'solid-js'
import type { Component } from 'solid-js'

import type { Article } from '~/data/articles'
import { Badge } from '~/components/ui/badge'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '~/components/ui/card'

interface ArticleCardProps {
  article: Article
}

const ArticleCard: Component<ArticleCardProps> = (props) => {
  return (
    <a href={props.article.link} class="group block h-full">
      <Card class="h-full transition-transform duration-200 group-hover:-translate-y-1">
        <CardHeader class="gap-3 pb-2">
          <Badge variant="outline" class="w-fit bg-white/70 text-xs tracking-wide">
            {props.article.category}
          </Badge>
          <CardTitle class="text-xl font-semibold leading-snug">
            {props.article.title}
          </CardTitle>
          <CardDescription>{props.article.description}</CardDescription>
        </CardHeader>
        <CardContent class="flex flex-1 flex-col gap-4 pb-4">
          <div class="flex flex-wrap gap-2 text-xs">
            <For each={props.article.tags}>
              {(tag) => <Badge variant="outline" class="text-[11px] text-foreground/70">{tag}</Badge>}
            </For>
          </div>
        </CardContent>
        <CardFooter class="items-center justify-between text-xs text-muted-foreground">
          <span>{props.article.date}</span>
          <span>{props.article.readTime}</span>
        </CardFooter>
      </Card>
    </a>
  )
}

export default ArticleCard
