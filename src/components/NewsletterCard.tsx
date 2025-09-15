import Button from "@suid/material/Button"
import Paper from "@suid/material/Paper"
import Stack from "@suid/material/Stack"
import TextField from "@suid/material/TextField"
import InputAdornment from "@suid/material/InputAdornment"
import Typography from "@suid/material/Typography"
import RssFeedIcon from "@suid/icons-material/RssFeed"
import MailOutlineIcon from "@suid/icons-material/MailOutline"
import type { Component } from "solid-js"

const NewsletterCard: Component = () => {
  return (
    <Paper
      id="newsletter"
      variant="outlined"
      sx={{
        background: "linear-gradient(135deg, rgba(15, 118, 110, 0.35) 0%, rgba(14, 165, 233, 0.4) 100%)",
        border: "1px solid rgba(94, 234, 212, 0.45)",
        backdropFilter: "blur(24px)",
        overflow: "hidden",
      }}
    >
      <Stack spacing={3} sx={{ p: { xs: 3, md: 4 } }}>
        <Stack direction="row" spacing={1.5} alignItems="center">
          <RssFeedIcon sx={{ fontSize: 32, color: "rgba(204, 251, 241, 0.95)" }} />
          <Typography variant="h4" sx={{ fontWeight: 700 }}>
            Minimal bits. Maximal signals.
          </Typography>
        </Stack>
        <Typography variant="body1" sx={{ color: "rgba(240, 249, 255, 0.88)" }}>
          A fortnightly digest on Bash、Zsh、Fishの最新潮流とUNIX的美学を凝縮。可観測性、ミニマリズム、
          チームでの再現性を重視した設計ノートを受け取ってください。
        </Typography>
        <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
          <TextField
            type="email"
            required
            fullWidth
            variant="outlined"
            color="primary"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <MailOutlineIcon sx={{ color: "rgba(203, 213, 225, 0.85)" }} />
                </InputAdornment>
              ),
            }}
            placeholder="you@example.com"
            sx={{
              '& .MuiOutlinedInput-root': {
                backgroundColor: "rgba(2, 6, 23, 0.55)",
                borderRadius: 16,
              },
            }}
          />
          <Button
            variant="contained"
            color="secondary"
            size="large"
            startIcon={<RssFeedIcon />}
            sx={{ px: 4, alignSelf: { md: "stretch" } }}
          >
            Join the feed
          </Button>
        </Stack>
        <Typography variant="caption" sx={{ color: "rgba(226, 232, 240, 0.85)" }}>
          No trackers, just plaintext insights. Unsubscribe via one command: <code>curl -XDELETE</code>.
        </Typography>
      </Stack>
    </Paper>
  )
}

export default NewsletterCard
