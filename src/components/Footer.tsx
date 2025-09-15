import Box from "@suid/material/Box"
import Divider from "@suid/material/Divider"
import Link from "@suid/material/Link"
import Stack from "@suid/material/Stack"
import Typography from "@suid/material/Typography"
import CodeIcon from "@suid/icons-material/Code"
import PublicIcon from "@suid/icons-material/Public"
import TerminalIcon from "@suid/icons-material/Terminal"
import type { Component } from "solid-js"

const Footer: Component = () => {
  return (
    <Box component="footer" sx={{ mt: 10, color: "rgba(148, 163, 184, 0.85)" }}>
      <Divider sx={{ borderColor: "rgba(148, 163, 184, 0.18)", mb: 4 }} />
      <Stack spacing={3} sx={{ alignItems: { xs: "flex-start", md: "center" }, textAlign: { xs: "left", md: "center" } }}>
        <Stack direction="row" spacing={1.5} alignItems="center">
          <TerminalIcon />
          <Typography variant="h6" sx={{ color: "rgba(226, 232, 240, 0.92)", fontWeight: 600 }}>
            Shell Frontier
          </Typography>
        </Stack>
        <Typography variant="body2">
          Crafted with SolidJS × Solid UI. Minimal surfaces, maximal signal-to-noise for Bash, Zsh, and Fish artisans.
        </Typography>
        <Stack direction="row" spacing={2} alignItems="center">
          <Link
            href="https://github.com/"
            target="_blank"
            rel="noopener"
            sx={{ color: "inherit", display: "inline-flex", alignItems: "center", gap: 0.5 }}
          >
            <CodeIcon sx={{ fontSize: 18 }} />
            Source
          </Link>
          <Link
            href="https://bsky.app/"
            target="_blank"
            rel="noopener"
            sx={{ color: "inherit", display: "inline-flex", alignItems: "center", gap: 0.5 }}
          >
            <PublicIcon sx={{ fontSize: 18 }} />
            Activity Feed
          </Link>
        </Stack>
        <Typography variant="caption" sx={{ color: "rgba(100, 116, 139, 0.9)" }}>
          © {new Date().getFullYear()} Shell Frontier. Built with the UNIX rule: make the simple powerful and the powerful simple.
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer
