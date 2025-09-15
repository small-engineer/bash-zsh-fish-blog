import { For, createSignal, onCleanup, onMount } from "solid-js"

import { Button } from "~/components/ui/button"
import { Badge } from "~/components/ui/badge"

const NAV_LINKS = [
  { href: "#articles", label: "速報" },
  { href: "#series", label: "連載" },
  { href: "#timeline", label: "タイムライン" },
  { href: "#philosophy", label: "思想" },
]

const Header = () => {
  const [scrolled, setScrolled] = createSignal(false)

  const onScroll = () => {
    setScrolled(window.scrollY > 24)
  }

  onMount(() => {
    window.addEventListener("scroll", onScroll)
  })

  onCleanup(() => {
    window.removeEventListener("scroll", onScroll)
  })

  return (
    <header
      class={`sticky top-0 z-40 w-full border-b border-border/40 backdrop-blur-lg transition-colors ${
        scrolled() ? "bg-background/85" : "bg-transparent"
      }`}
    >
      <div class="container flex items-center justify-between py-4">
        <div class="flex items-center gap-3">
          <div class="flex flex-col">
            <span class="font-mono text-xs uppercase tracking-[0.4em] text-primary/70">
              Shell Nipponics
            </span>
            <span class="font-serif text-lg text-foreground">シェル前線観測所</span>
          </div>
          <Badge variant="secondary" class="hidden text-[11px] md:flex">
            最小構成で最大の現場感
          </Badge>
        </div>

        <nav class="hidden items-center gap-6 text-sm font-medium md:flex">
          <For each={NAV_LINKS}>
            {(item) => (
              <a
                href={item.href}
                class="text-muted-foreground transition hover:text-primary"
              >
                {item.label}
              </a>
            )}
          </For>
          <Button
            as="a"
            href="#newsletter"
            variant="outline"
            size="sm"
            class="border-primary/40 text-sm font-semibold"
          >
            ニュースレター登録
          </Button>
        </nav>

        <div class="md:hidden">
          <Button
            as="a"
            href="#newsletter"
            variant="outline"
            size="sm"
            class="border-primary/40 text-xs"
          >
            読者登録
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Header
