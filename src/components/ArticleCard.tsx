import Box from "@suid/material/Box"
import Card from "@suid/material/Card"
import CardActionArea from "@suid/material/CardActionArea"
import CardContent from "@suid/material/CardContent"
import Chip from "@suid/material/Chip"
import Divider from "@suid/material/Divider"
import Stack from "@suid/material/Stack"
import Typography from "@suid/material/Typography"
import LaunchIcon from "@suid/icons-material/Launch"
import AccessTimeIcon from "@suid/icons-material/AccessTime"
import TodayIcon from "@suid/icons-material/Today"
import { For } from "solid-js"
import type { Component } from "solid-js"
import type { Article } from "../data/articles"

interface ArticleCardProps {
  article: Article
}

const ArticleCard: Component<ArticleCardProps> = (props) => {
  return (
    <Card
      variant="outlined"
      sx={{
        height: "100%",
        backgroundColor: "rgba(2, 6, 23, 0.72)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardActionArea
        component="a"
        href={props.article.link}
        sx={{ display: "flex", flexDirection: "column", alignItems: "stretch", height: "100%" }}
      >
        <Box
          sx={{
            background: props.article.gradient,
            borderRadius: "22px",
            border: "1px solid rgba(148, 163, 184, 0.28)",
            height: 160,
            width: "100%",
            position: "relative",
            overflow: "hidden",
            mb: 2.5,
          }}
        >
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.12), transparent 60%), radial-gradient(circle at 80% 60%, rgba(14,165,233,0.22), transparent 60%)",
              opacity: 0.9,
            }}
          />
          <Box sx={{ position: "absolute", bottom: 16, left: 18, color: "rgba(248, 250, 252, 0.85)", fontWeight: 600 }}>
            {props.article.category}
          </Box>
        </Box>
        <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column", gap: 2 }}>
          <Typography variant="h5" component="h3" sx={{ fontWeight: 600, lineHeight: 1.24 }}>
            {props.article.title}
          </Typography>
          <Typography variant="body2" sx={{ color: "rgba(203, 213, 225, 0.9)", flexGrow: 1 }}>
            {props.article.description}
          </Typography>
          <Stack direction="row" spacing={1} flexWrap="wrap">
            <For each={props.article.tags}>
              {(tag) => (
                <Chip
                  label={tag}
                  size="small"
                  variant="outlined"
                  sx={{
                    borderColor: "rgba(148, 163, 184, 0.35)",
                    color: "rgba(226, 232, 240, 0.85)",
                    backgroundColor: "rgba(15, 23, 42, 0.35)",
                  }}
                />
              )}
            </For>
          </Stack>
        </CardContent>
        <Divider flexItem sx={{ borderColor: "rgba(148, 163, 184, 0.12)" }} />
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ width: "100%", px: 3, py: 2, color: "rgba(226, 232, 240, 0.8)" }}
        >
          <Stack direction="row" spacing={2} alignItems="center">
            <Stack direction="row" spacing={1} alignItems="center" sx={{ fontSize: "0.85rem" }}>
              <TodayIcon sx={{ fontSize: 18 }} />
              <span>{props.article.date}</span>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center" sx={{ fontSize: "0.85rem" }}>
              <AccessTimeIcon sx={{ fontSize: 18 }} />
              <span>{props.article.readTime}</span>
            </Stack>
          </Stack>
          <LaunchIcon sx={{ fontSize: 20 }} />
        </Stack>
      </CardActionArea>
    </Card>
  )
}

export default ArticleCard
