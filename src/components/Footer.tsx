import type { Component } from 'solid-js'

const Footer: Component = () => {
  const year = new Date().getFullYear()
  return (
    <footer class="mt-16 border-t border-border/60 pt-10 text-sm text-muted-foreground">
      <div class="flex flex-col items-start gap-4 text-left sm:items-center sm:text-center">
        <div class="flex items-center gap-3 text-base font-semibold text-foreground">
          <span class="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/15 text-primary">シ</span>
          <span>シェル・フロンティア</span>
        </div>
        <p class="max-w-2xl text-sm leading-relaxed">
          SolidJSとSolid UIで構築した、最小限のUIで最大の情報量を伝える現場レポートです。ターミナル文化の知恵を日本語で丁寧にまとめています。
        </p>
        <div class="flex flex-wrap items-center gap-3 text-xs font-medium text-foreground/70">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener"
            class="rounded-full border border-border/60 px-3 py-1 transition-colors hover:bg-secondary/60"
          >
            GitHub
          </a>
          <a
            href="https://bsky.app/"
            target="_blank"
            rel="noopener"
            class="rounded-full border border-border/60 px-3 py-1 transition-colors hover:bg-secondary/60"
          >
            Bluesky
          </a>
        </div>
        <p class="text-xs text-muted-foreground">
          © {year} Shell Frontier. シンプルさで最大の効果を引き出すUNIXの哲学に基づいています。
        </p>
      </div>
    </footer>
  )
}

export default Footer
