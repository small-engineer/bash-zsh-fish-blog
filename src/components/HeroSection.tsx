import { Button } from "~/components/ui/button"
import { Badge } from "~/components/ui/badge"

const HeroSection = () => {
  return (
    <section class="relative overflow-hidden pb-20 pt-12 md:pb-24" id="top">
      <div class="absolute inset-0 -z-10 opacity-60">
        <div class="mx-auto h-full max-w-6xl">
          <div class="grid-overlay relative h-full rounded-3xl border border-border/30">
            <div class="absolute inset-0 bg-gradient-to-tr from-primary/10 via-background/40 to-transparent" />
          </div>
        </div>
      </div>

      <div class="container relative flex flex-col gap-10">
        <div class="flex flex-col gap-6 md:w-3/4">
          <Badge round variant="outline" class="w-fit border-primary/40 text-primary">
            Bash / Zsh / Fish 情報特化ブログ
          </Badge>
          <h1 class="font-serif text-4xl leading-snug tracking-tight text-foreground md:text-5xl">
            日本語環境のためのシェル前線。
            <span class="block text-primary">最小構成で最大の洞察を。</span>
          </h1>
          <p class="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Shell Nipponicsは、UNIX的設計とSolid UIの最新コンポーネントをかけ合わせ、
            日本語端末でも読みやすい紙面を追求するテックブログです。
            ニュース、深掘り、運用の知見をモノトーンの静けさに溶かし込みます。
          </p>
          <div class="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button as="a" href="#articles" size="lg" class="px-6 font-semibold">
              最新記事を読む
            </Button>
            <Button as="a" href="#newsletter" variant="ghost" size="lg" class="px-6">
              哲学と設計原則を見る
            </Button>
          </div>
        </div>

        <div class="grid gap-4 md:grid-cols-3">
          <div class="rounded-2xl border border-border/40 bg-card/60 p-6 shadow-sm backdrop-blur-sm">
            <p class="font-mono text-xs uppercase tracking-[0.25em] text-primary/70">Focus</p>
            <h3 class="mt-3 text-lg font-semibold text-foreground">UNIXの余白を残すデザイン</h3>
            <p class="mt-2 text-sm text-muted-foreground">
              等幅フォント、カラム幅、そして余白。クラシックな紙面の呼吸を大切にしながら、Solid UIのモダンな質感を重ねます。
            </p>
          </div>
          <div class="rounded-2xl border border-border/40 bg-card/60 p-6 shadow-sm backdrop-blur-sm">
            <p class="font-mono text-xs uppercase tracking-[0.25em] text-primary/70">Technique</p>
            <h3 class="mt-3 text-lg font-semibold text-foreground">SolidUIのカード&タブ活用</h3>
            <p class="mt-2 text-sm text-muted-foreground">
              shadcn由来のSolidUIコンポーネントをコピーし、tailwindで細部を調律。必要な部品だけを呼び出すUNIX的アプローチです。
            </p>
          </div>
          <div class="rounded-2xl border border-border/40 bg-card/60 p-6 shadow-sm backdrop-blur-sm">
            <p class="font-mono text-xs uppercase tracking-[0.25em] text-primary/70">Culture</p>
            <h3 class="mt-3 text-lg font-semibold text-foreground">日本語で深めるShell思考</h3>
            <p class="mt-2 text-sm text-muted-foreground">
              端末に向かう時間が長いエンジニアに向けて、実務の現場で使える知識を漢字かな交じりのリズムで丁寧に届けます。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
