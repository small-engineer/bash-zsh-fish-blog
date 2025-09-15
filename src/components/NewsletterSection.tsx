import { Button } from "~/components/ui/button"
import { Badge } from "~/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card"

const NewsletterSection = () => {
  return (
    <section class="container pb-24 pt-10" id="newsletter">
      <Card class="overflow-hidden border border-primary/30 bg-card/80">
        <div class="absolute inset-0 -z-10 opacity-30">
          <div class="h-full w-full bg-gradient-to-r from-primary/30 via-transparent to-accent/30" />
        </div>
        <CardHeader class="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div class="flex flex-col gap-4">
            <Badge variant="secondary" class="w-fit bg-secondary/70 text-secondary-foreground">
              Terminal Letter
            </Badge>
            <CardTitle class="font-serif text-3xl tracking-tight text-foreground md:text-4xl">
              週一回の"端末だより"で更新をチェック
            </CardTitle>
            <p class="max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
              最新記事の要約、注目のプラグイン、そしてUNIX的な設計ノートを週に一度だけ配信します。
              メール本文は等幅レイアウトで、コピペしやすいコマンド断片も添付します。
            </p>
          </div>
          <Button size="lg" class="mt-4 w-full px-8 font-semibold md:mt-0 md:w-auto">
            招待コードを受け取る
          </Button>
        </CardHeader>
        <CardContent class="grid gap-4 md:grid-cols-3">
          <div class="rounded-lg border border-border/40 bg-background/60 p-4">
            <p class="font-mono text-xs uppercase tracking-[0.2em] text-primary/70">Digest</p>
            <p class="mt-2 text-sm text-muted-foreground">
              記事の要旨を5行に圧縮し、改めて読みたいときはpermalinkをすぐ辿れる構造。
            </p>
          </div>
          <div class="rounded-lg border border-border/40 bg-background/60 p-4">
            <p class="font-mono text-xs uppercase tracking-[0.2em] text-primary/70">Blueprint</p>
            <p class="mt-2 text-sm text-muted-foreground">
              dotfilesに貼り付けられる設定断片と、なぜその記述が必要かを短い解説で補います。
            </p>
          </div>
          <div class="rounded-lg border border-border/40 bg-background/60 p-4">
            <p class="font-mono text-xs uppercase tracking-[0.2em] text-primary/70">Radar</p>
            <p class="mt-2 text-sm text-muted-foreground">
              新しいリリース候補やコミュニティツールを、検証済みのメトリクスと共に紹介します。
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

export default NewsletterSection
