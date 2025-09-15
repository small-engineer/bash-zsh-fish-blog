import Box from "@suid/material/Box"
import Button from "@suid/material/Button"
import Chip from "@suid/material/Chip"
import List from "@suid/material/List"
import ListItem from "@suid/material/ListItem"
import Paper from "@suid/material/Paper"
import Stack from "@suid/material/Stack"
import Typography from "@suid/material/Typography"
import ArrowForwardIcon from "@suid/icons-material/ArrowForward"
import { For } from "solid-js"
import type { Component } from "solid-js"
import type { DeepDive } from "../data/articles"

interface ShellDeepDiveCardProps {
  dive: DeepDive
}

const ShellDeepDiveCard: Component<ShellDeepDiveCardProps> = (props) => {
  return (
    <Paper
      id={props.dive.id}
      variant="outlined"
      sx={{
        height: "100%",
        background: props.dive.gradient,
        color: "rgba(241, 245, 249, 0.95)",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "hidden",
        border: "1px solid rgba(148, 163, 184, 0.38)",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 12% 8%, rgba(255,255,255,0.15), transparent 45%), radial-gradient(circle at 88% 18%, rgba(16,185,129,0.2), transparent 55%)",
          opacity: 0.8,
        }}
      />
      <Stack spacing={2.5} sx={{ p: 3.2, position: "relative", flexGrow: 1 }}>
        <Chip
          label={`${props.dive.shell} deep dive`}
          variant="outlined"
          sx={{
            borderColor: "rgba(226, 232, 240, 0.55)",
            color: "rgba(241, 245, 249, 0.92)",
            letterSpacing: "0.08em",
          }}
        />
        <Stack spacing={1.5}>
          <Typography variant="h4" sx={{ fontWeight: 700, lineHeight: 1.2 }}>
            {props.dive.title}
          </Typography>
          <Typography variant="body2" sx={{ color: "rgba(241, 245, 249, 0.85)" }}>
            {props.dive.summary}
          </Typography>
        </Stack>
        <Stack direction="row" spacing={1} flexWrap="wrap">
          <For each={props.dive.metrics}>
            {(metric) => (
              <Chip
                label={`${metric.label}: ${metric.value}`}
                size="small"
                sx={{
                  backgroundColor: "rgba(15, 23, 42, 0.35)",
                  color: "rgba(244, 249, 255, 0.9)",
                  borderColor: "rgba(226, 232, 240, 0.3)",
                }}
              />
            )}
          </For>
        </Stack>
        <List dense disablePadding sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <For each={props.dive.bullets}>
            {(bullet) => (
              <ListItem
                sx={{
                  px: 0,
                  color: "rgba(241, 245, 249, 0.85)",
                  alignItems: "flex-start",
                  fontSize: "0.95rem",
                }}
              >
                •&nbsp;{bullet}
              </ListItem>
            )}
          </For>
        </List>
        <Box sx={{ flexGrow: 1 }} />
        <Button
          href={props.dive.link}
          variant="outlined"
          endIcon={<ArrowForwardIcon />}
          sx={{
            alignSelf: "flex-start",
            borderColor: "rgba(226, 232, 240, 0.42)",
            color: "rgba(241, 245, 249, 0.92)",
          }}
        >
          Read the lab notes
        </Button>
      </Stack>
    </Paper>
  )
}

export default ShellDeepDiveCard
