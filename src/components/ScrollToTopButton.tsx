import Fab from "@suid/material/Fab"
import Fade from "@suid/material/Fade"
import KeyboardArrowUpIcon from "@suid/icons-material/KeyboardArrowUp"
import { useWindowScrollPosition } from "@solid-primitives/scroll"
import { createMemo } from "solid-js"
import type { Component } from "solid-js"

const ScrollToTopButton: Component = () => {
  const scroll = useWindowScrollPosition()
  const isVisible = createMemo(() => scroll.y > 420)

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <Fade in={isVisible()}>
      <Fab
        color="secondary"
        onClick={handleClick}
        sx={{
          position: "fixed",
          bottom: 32,
          right: 32,
          boxShadow: "0 20px 40px rgba(14, 165, 233, 0.4)",
          zIndex: 1300,
        }}
        aria-label="scroll back to top"
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </Fade>
  )
}

export default ScrollToTopButton
