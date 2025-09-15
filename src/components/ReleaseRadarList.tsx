import Chip from "@suid/material/Chip"
import Divider from "@suid/material/Divider"
import List from "@suid/material/List"
import ListItem from "@suid/material/ListItem"
import ListItemButton from "@suid/material/ListItemButton"
import Stack from "@suid/material/Stack"
import Typography from "@suid/material/Typography"
import ArrowForwardIcon from "@suid/icons-material/ArrowForward"
import { For } from "solid-js"
import type { Component } from "solid-js"
import type { ReleaseNote } from "../data/articles"

interface ReleaseRadarListProps {
  releases: ReleaseNote[]
}

const ReleaseRadarList: Component<ReleaseRadarListProps> = (props) => {
  return (
    <List
      id="release-radar"
      sx={{
        borderRadius: 4,
        border: "1px solid rgba(148, 163, 184, 0.12)",
        backgroundColor: "rgba(2, 6, 23, 0.64)",
        px: 0,
      }}
    >
      <For each={props.releases}>
        {(release, index) => (
          <>
            <ListItem disablePadding>
              <ListItemButton
                component="a"
                href={release.link}
                sx={{
                  py: 2.5,
                  px: 3,
                  alignItems: "flex-start",
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                }}
              >
                <Stack direction="row" spacing={1.5} alignItems="center" flexWrap="wrap" sx={{ width: "100%" }}>
                  <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 600 }}>
                    {release.title}
                  </Typography>
                  <Chip
                    label={release.category}
                    size="small"
                    sx={{
                      borderColor: "rgba(94, 234, 212, 0.45)",
                      color: "rgba(165, 243, 252, 0.9)",
                      backgroundColor: "rgba(15, 118, 110, 0.14)",
                    }}
                    variant="outlined"
                  />
                  <Chip
                    label={release.version}
                    size="small"
                    sx={{
                      borderColor: "rgba(148, 163, 184, 0.35)",
                      color: "rgba(226, 232, 240, 0.8)",
                    }}
                    variant="outlined"
                  />
                </Stack>
                <Typography variant="body2" sx={{ color: "rgba(226, 232, 240, 0.8)" }}>
                  {release.summary}
                </Typography>
                <Stack direction="row" spacing={2} alignItems="center" sx={{ width: "100%" }}>
                  <Typography variant="caption" sx={{ color: "rgba(148, 163, 184, 0.8)" }}>
                    {release.date}
                  </Typography>
                  <Stack direction="row" spacing={1} alignItems="center" sx={{ ml: "auto", color: "rgba(125, 211, 252, 0.9)" }}>
                    <span>{release.highlight}</span>
                    <ArrowForwardIcon sx={{ fontSize: 18 }} />
                  </Stack>
                </Stack>
              </ListItemButton>
            </ListItem>
            <ShowDivider index={index()} length={props.releases.length} />
          </>
        )}
      </For>
    </List>
  )
}

const ShowDivider: Component<{ index: number; length: number }> = (props) => {
  return props.index < props.length - 1 ? (
    <Divider component="li" sx={{ borderColor: "rgba(148, 163, 184, 0.08)", mx: 3 }} />
  ) : null
}

export default ReleaseRadarList
