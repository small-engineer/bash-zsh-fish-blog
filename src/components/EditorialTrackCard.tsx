import Box from "@suid/material/Box"
import List from "@suid/material/List"
import ListItem from "@suid/material/ListItem"
import Paper from "@suid/material/Paper"
import Stack from "@suid/material/Stack"
import Typography from "@suid/material/Typography"
import type { EditorialTrack } from "../data/articles"
import { For } from "solid-js"
import type { Component } from "solid-js"

interface EditorialTrackCardProps {
  track: EditorialTrack
}

const EditorialTrackCard: Component<EditorialTrackCardProps> = (props) => {
  return (
    <Paper
      id={props.track.id}
      variant="outlined"
      sx={{
        background: props.track.accent,
        color: "rgba(248, 250, 252, 0.95)",
        border: "1px solid rgba(148, 163, 184, 0.25)",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 14% 18%, rgba(255,255,255,0.18), transparent 45%), radial-gradient(circle at 82% 28%, rgba(14,165,233,0.25), transparent 55%)",
          opacity: 0.9,
        }}
      />
      <Stack spacing={2} sx={{ p: 3.2, position: "relative" }}>
        <Typography variant="h5" sx={{ fontWeight: 600 }}>
          {props.track.title}
        </Typography>
        <Typography variant="body2" sx={{ color: "rgba(240, 249, 255, 0.88)" }}>
          {props.track.description}
        </Typography>
        <List dense disablePadding sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <For each={props.track.bullets}>
            {(bullet) => (
              <ListItem sx={{ px: 0, alignItems: "flex-start", color: "rgba(248, 250, 252, 0.88)" }}>
                •&nbsp;{bullet}
              </ListItem>
            )}
          </For>
        </List>
      </Stack>
    </Paper>
  )
}

export default EditorialTrackCard
