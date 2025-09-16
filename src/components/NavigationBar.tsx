import { For } from 'solid-js'
import type { Component } from 'solid-js'

import { Button } from '~/components/ui/button'

const navLinks = [
  { label: '最新レポート', href: '#latest' },
  { label: '深堀り分析', href: '#deep-dives' },
  { label: 'リリース速報', href: '#release-radar' },
  { label: '特集シリーズ', href: '#editorial' },
  { label: 'ニュースレター', href: '#newsletter' },
]

const NavigationBar: Component = () => {
  return (
    <header class="rounded-3xl border border-border/60 bg-white/90 px-5 py-4 shadow-gentle backdrop-blur">
      <nav class="flex flex-wrap items-center gap-4 md:gap-6">
        <a href="#" class="flex items-center gap-4 text-left">
          <span class="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-xl font-bold text-primary">
            シ
          </span>
          <span class="flex flex-col text-sm text-muted-foreground">
            <span class="font-display text-lg font-semibold text-foreground">シェル・フロンティア</span>
            <span>Bash / Zsh / Fish 現場ハンドブック</span>
          </span>
        </a>
        <div class="flex flex-1 flex-wrap items-center justify-end gap-2 md:gap-4">
          <ul class="hidden items-center gap-4 text-sm font-medium text-foreground/70 lg:flex">
            <For each={navLinks}>
              {(link) => (
                <li>
                  <a
                    href={link.href}
                    class="rounded-full px-3 py-2 transition-colors hover:bg-secondary/80 hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              )}
            </For>
          </ul>
          <div class="flex items-center gap-2">
            <Button
              variant="outline"
              class="hidden text-sm font-medium text-foreground/80 sm:flex"
              as="a"
              href="#editorial"
            >
              編集部について
            </Button>
            <Button class="text-sm font-semibold" as="a" href="#newsletter">
              無料で購読する
            </Button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default NavigationBar
