import Box from "@suid/material/Box"
import Button from "@suid/material/Button"
import Chip from "@suid/material/Chip"
import Paper from "@suid/material/Paper"
import Stack from "@suid/material/Stack"
import Typography from "@suid/material/Typography"
import LaunchIcon from "@suid/icons-material/Launch"
import { For } from "solid-js"
import type { Component } from "solid-js"
import type { ToolInsight } from "../data/articles"

interface ToolInsightCardProps {
  insight: ToolInsight
}

const ToolInsightCard: Component<ToolInsightCardProps> = (props) => {
  return (
    <Paper
      id={props.insight.id}
      variant="outlined"
      sx={{
        height: "100%",
        background: props.insight.gradient,
        color: "rgba(241, 245, 249, 0.95)",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "hidden",
        border: "1px solid rgba(148, 163, 184, 0.32)",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.16), transparent 55%), radial-gradient(circle at 70% 30%, rgba(244,114,182,0.2), transparent 60%)",
          opacity: 0.85,
        }}
      />
      <Stack spacing={2.5} sx={{ p: 3, position: "relative", flexGrow: 1 }}>
        <Chip
          label={`${props.insight.category} toolchain`}
          size="small"
          sx={{
            borderColor: "rgba(226, 232, 240, 0.5)",
            color: "rgba(241, 245, 249, 0.9)",
            textTransform: "uppercase",
          }}
          variant="outlined"
        />
        <Stack spacing={1.5}>
          <Typography variant="h5" sx={{ fontWeight: 600, lineHeight: 1.25 }}>
            {props.insight.title}
          </Typography>
          <Typography variant="body2" sx={{ color: "rgba(226, 232, 240, 0.86)" }}>
            {props.insight.description}
          </Typography>
        </Stack>
        <Stack direction="row" spacing={1} flexWrap="wrap">
          <For each={props.insight.metrics}>
            {(metric) => (
              <Chip
                label={metric}
                size="small"
                sx={{
                  backgroundColor: "rgba(15, 23, 42, 0.35)",
                  color: "rgba(243, 244, 255, 0.95)",
                  borderColor: "rgba(226, 232, 240, 0.3)",
                }}
              />
            )}
          </For>
        </Stack>
        <Box sx={{ flexGrow: 1 }} />
        <Button
          variant="contained"
          color="primary"
          endIcon={<LaunchIcon />}
          href={props.insight.link}
          sx={{ alignSelf: "flex-start" }}
        >
          Explore
        </Button>
      </Stack>
    </Paper>
  )
}

export default ToolInsightCard
