import { Badge } from "~/components/ui/badge"

const Footer = () => {
  return (
    <footer class="border-t border-border/40 bg-background/80 py-10">
      <div class="container flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div class="flex flex-col gap-2">
          <span class="font-serif text-xl text-foreground">シェル前線観測所 — Shell Nipponics</span>
          <p class="text-sm text-muted-foreground">
            UNIXの美学を保ったまま、最新技術を和文で読み解く。Solid UIとTailwindで紡ぐMinimal × Maximumの実験場です。
          </p>
        </div>
        <div class="flex flex-col items-start gap-3 md:items-end">
          <Badge variant="outline" class="border-primary/40 text-xs uppercase tracking-[0.3em] text-primary">
            EST. 2025
          </Badge>
          <a
            href="#top"
            class="text-sm font-medium text-muted-foreground transition hover:text-primary"
          >
            ▲ ページトップに戻る
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
