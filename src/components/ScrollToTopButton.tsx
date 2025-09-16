import { createSignal, onCleanup, onMount, Show } from 'solid-js'
import type { Component } from 'solid-js'

import { Button } from '~/components/ui/button'

const ScrollToTopButton: Component = () => {
  const [visible, setVisible] = createSignal(false)

  const handleScroll = () => {
    setVisible(window.scrollY > 360)
  }

  onMount(() => {
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
  })

  onCleanup(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <Show when={visible()}>
      <Button
        size="icon"
        class="fixed bottom-6 right-6 z-50 rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/25"
        onClick={scrollToTop}
        aria-label="ページの先頭に戻る"
      >
        ▲
      </Button>
    </Show>
  )
}

export default ScrollToTopButton
