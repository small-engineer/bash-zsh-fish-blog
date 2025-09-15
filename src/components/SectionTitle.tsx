import Box from "@suid/material/Box"
import Button from "@suid/material/Button"
import Stack from "@suid/material/Stack"
import Typography from "@suid/material/Typography"
import LaunchIcon from "@suid/icons-material/Launch"
import { Show } from "solid-js"
import type { Component } from "solid-js"

interface SectionTitleProps {
  id?: string
  title: string
  description?: string
  actionLabel?: string
  actionHref?: string
}

const SectionTitle: Component<SectionTitleProps> = (props) => {
  return (
    <Stack
      id={props.id}
      direction={{ xs: "column", md: "row" }}
      spacing={2}
      justifyContent="space-between"
      sx={{ mb: 3, alignItems: { xs: "flex-start", md: "center" }, textAlign: { xs: "left", md: "initial" } }}
    >
      <Box>
        <Typography variant="h3" sx={{ fontWeight: 700, letterSpacing: "-0.02em" }}>
          {props.title}
        </Typography>
        <Show when={props.description}>
          {(description: () => string) => (
            <Typography variant="body2" sx={{ color: "text.secondary", mt: 0.5 }}>
              {description()}
            </Typography>
          )}
        </Show>
      </Box>
      <Show when={props.actionLabel && props.actionHref}>
        <Button
          variant="text"
          endIcon={<LaunchIcon />}
          color="secondary"
          href={props.actionHref}
          sx={{ fontWeight: 600 }}
        >
          {props.actionLabel}
        </Button>
      </Show>
    </Stack>
  )
}

export default SectionTitle
