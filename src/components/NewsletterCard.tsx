import { createSignal } from 'solid-js'
import type { Component, JSX } from 'solid-js'

import { Button } from '~/components/ui/button'

const NewsletterCard: Component = () => {
  const [email, setEmail] = createSignal('')

  const handleSubmit: JSX.EventHandler<HTMLFormElement, SubmitEvent> = (event) => {
    event.preventDefault()
    event.currentTarget.reset()
    setEmail('')
  }

  return (
    <section
      id="newsletter"
      class="rounded-[2rem] border border-border/60 bg-gradient-to-r from-primary/12 via-white to-accent/12 px-6 py-10 shadow-gentle md:px-12"
    >
      <div class="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div class="max-w-2xl space-y-4">
          <h2 class="text-3xl font-semibold text-foreground">軽く読める現場ダイジェスト</h2>
          <p class="text-sm leading-relaxed text-foreground/75">
            Bash・Zsh・Fishのアップデートを実践目線でまとめた二週間ごとの便りです。設定例、計測結果、チーム共有のコツをすべて日本語でお届けします。
          </p>
          <p class="text-xs text-muted-foreground">
            追跡ピクセルなし。配信停止は<code class="rounded bg-secondary/70 px-1 py-0.5">curl -X DELETE</code>で完了します。
          </p>
        </div>
        <form class="w-full max-w-sm space-y-3" onSubmit={handleSubmit}>
          <label class="flex flex-col gap-2 text-sm font-medium text-foreground/80">
            メールアドレス
            <input
              type="email"
              required
              value={email()}
              onInput={(event) => setEmail(event.currentTarget.value)}
              placeholder="you@example.com"
              class="w-full rounded-full border border-border/70 bg-white/90 px-5 py-3 text-sm shadow-inner outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/40"
            />
          </label>
          <Button type="submit" class="w-full justify-center text-sm font-semibold">
            ダイジェストを受け取る
          </Button>
        </form>
      </div>
    </section>
  )
}

export default NewsletterCard
