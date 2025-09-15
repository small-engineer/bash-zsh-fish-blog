import Box from "@suid/material/Box"
import Button from "@suid/material/Button"
import Chip from "@suid/material/Chip"
import Grid from "@suid/material/Grid"
import Paper from "@suid/material/Paper"
import Stack from "@suid/material/Stack"
import Typography from "@suid/material/Typography"
import ArrowForwardIcon from "@suid/icons-material/ArrowForward"
import { For, Show } from "solid-js"
import type { Component } from "solid-js"
import type { Article } from "../data/articles"

interface HeroProps {
  article: Article
}

const Hero: Component<HeroProps> = (props) => {
  return (
    <Paper
      id={props.article.id}
      sx={{
        position: "relative",
        overflow: "hidden",
        px: { xs: 3, md: 6 },
        py: { xs: 5, md: 7 },
        background: props.article.gradient,
        color: "#f8fafc",
        border: "1px solid rgba(148, 163, 184, 0.35)",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 0% 0%, rgba(255,255,255,0.18), transparent 45%), radial-gradient(circle at 80% 20%, rgba(14,116,144,0.28), transparent 55%)",
          opacity: 0.9,
        }}
      />
      <Stack spacing={4} sx={{ position: "relative" }}>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ alignItems: { xs: "flex-start", sm: "center" } }}>
          <Chip
            label={`Feature · ${props.article.category}`}
            color="primary"
            variant="filled"
            sx={{
              backgroundColor: "rgba(15, 118, 110, 0.2)",
              border: "1px solid rgba(94, 234, 212, 0.6)",
              color: "#ecfeff",
              letterSpacing: "0.1em",
            }}
          />
          <Show when={props.article.signal}>
            {(signal) => (
              <Chip
                label={signal()}
                variant="outlined"
                sx={{
                  borderColor: "rgba(226, 232, 240, 0.6)",
                  color: "rgba(248, 250, 252, 0.92)",
                }}
              />
            )}
          </Show>
          <Show when={props.article.release}>
            {(release) => (
              <Chip
                label={release()}
                variant="outlined"
                icon={<ArrowForwardIcon fontSize="small" />}
                sx={{
                  borderColor: "rgba(15, 118, 110, 0.7)",
                  color: "rgba(204, 251, 241, 0.92)",
                  backgroundColor: "rgba(14, 116, 144, 0.18)",
                }}
              />
            )}
          </Show>
        </Stack>
        <Stack spacing={3} sx={{ maxWidth: { md: "70%" } }}>
          <Typography variant="h2" sx={{ fontWeight: 700, lineHeight: 1.15 }}>
            {props.article.title}
          </Typography>
          <Typography variant="body1" sx={{ color: "rgba(241, 245, 249, 0.9)" }}>
            {props.article.description}
          </Typography>
          <Stack direction="row" spacing={1.5} flexWrap="wrap">
            <For each={props.article.tags}>
              {(tag) => (
                <Chip
                  label={tag}
                  variant="outlined"
                  sx={{
                    borderColor: "rgba(224, 242, 254, 0.4)",
                    color: "rgba(240, 249, 255, 0.9)",
                    backgroundColor: "rgba(14, 165, 233, 0.14)",
                  }}
                />
              )}
            </For>
          </Stack>
        </Stack>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
          <Button
            size="large"
            variant="contained"
            color="secondary"
            endIcon={<ArrowForwardIcon />}
            href={props.article.link}
          >
            Dive into the playbook
          </Button>
          <Button
            size="large"
            variant="outlined"
            color="inherit"
            href="#release-radar"
            sx={{
              borderColor: "rgba(148, 163, 184, 0.45)",
              color: "rgba(226, 232, 240, 0.9)",
            }}
          >
            Track the releases
          </Button>
        </Stack>
        <Show when={props.article.insights?.length}>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <For each={props.article.insights}>
              {(insight) => (
                <Grid item xs={12} sm={4}>
                  <Paper
                    elevation={0}
                    sx={{
                      px: 3,
                      py: 2.5,
                      backgroundColor: "rgba(2, 6, 23, 0.45)",
                      border: "1px solid rgba(148, 163, 184, 0.35)",
                      height: "100%",
                    }}
                  >
                    <Typography variant="subtitle2" sx={{ color: "rgba(125, 211, 252, 0.9)", textTransform: "uppercase" }}>
                      {insight.label}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "rgba(226, 232, 240, 0.92)", mt: 0.5 }}>
                      {insight.detail}
                    </Typography>
                  </Paper>
                </Grid>
              )}
            </For>
          </Grid>
        </Show>
      </Stack>
    </Paper>
  )
}

export default Hero
