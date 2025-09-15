import AppBar from "@suid/material/AppBar"
import Box from "@suid/material/Box"
import Button from "@suid/material/Button"
import IconButton from "@suid/material/IconButton"
import Stack from "@suid/material/Stack"
import Toolbar from "@suid/material/Toolbar"
import Typography from "@suid/material/Typography"
import RssFeedIcon from "@suid/icons-material/RssFeed"
import TerminalIcon from "@suid/icons-material/Terminal"
import MenuBookIcon from "@suid/icons-material/MenuBook"
import { For } from "solid-js"
import type { Component } from "solid-js"

const navLinks = [
  { label: "Bash", href: "#deep-bash" },
  { label: "Zsh", href: "#deep-zsh" },
  { label: "Fish", href: "#deep-fish" },
  { label: "Workflows", href: "#bash-flakes" },
  { label: "Tools", href: "#insight-wezterm" },
]

const NavigationBar: Component = () => {
  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      sx={{
        backgroundColor: "rgba(2, 6, 23, 0.72)",
        border: "1px solid rgba(148, 163, 184, 0.16)",
        borderRadius: "20px",
        px: { xs: 1, md: 3 },
        py: 1,
        mt: 4,
        boxShadow: "0 20px 60px rgba(15, 23, 42, 0.45)",
        backdropFilter: "blur(24px)",
      }}
    >
      <Toolbar sx={{ gap: { xs: 1.5, md: 3 }, flexWrap: "wrap" }}>
        <Stack direction="row" alignItems="center" spacing={1.5}>
          <IconButton size="large" color="primary">
            <TerminalIcon />
          </IconButton>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 700, letterSpacing: "0.04em" }}>
              Shell Frontier
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Bash · Zsh · Fish · Modern Terminal Craft
            </Typography>
          </Box>
        </Stack>
        <Box sx={{ flexGrow: 1 }} />
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          <For each={navLinks}>
            {(link) => (
              <Button
                variant="text"
                color="inherit"
                href={link.href}
                sx={{
                  color: "rgba(226, 232, 240, 0.78)",
                  fontWeight: 500,
                  fontSize: "0.98rem",
                  letterSpacing: "0.04em",
                  "&:hover": {
                    color: "#f8fafc",
                  },
                }}
              >
                {link.label}
              </Button>
            )}
          </For>
        </Stack>
        <Stack direction="row" spacing={1.5} alignItems="center">
          <Button
            variant="outlined"
            color="secondary"
            startIcon={<MenuBookIcon />}
            href="#editorial"
            sx={{
              borderColor: "rgba(168, 85, 247, 0.5)",
              color: "rgba(196, 181, 253, 0.9)",
              display: { xs: "none", sm: "inline-flex" },
              fontWeight: 600,
            }}
          >
            Archives
          </Button>
          <Button
            variant="contained"
            color="primary"
            startIcon={<RssFeedIcon />}
            href="#newsletter"
            sx={{ px: 2.8 }}
          >
            Subscribe
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}

export default NavigationBar
