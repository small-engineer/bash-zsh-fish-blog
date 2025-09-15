import Box from "@suid/material/Box"
import Container from "@suid/material/Container"
import CssBaseline from "@suid/material/CssBaseline"
import Grid from "@suid/material/Grid"
import Stack from "@suid/material/Stack"
import { ThemeProvider } from "@suid/material/styles"
import NavigationBar from "./components/NavigationBar"
import Hero from "./components/Hero"
import SectionTitle from "./components/SectionTitle"
import ArticleCard from "./components/ArticleCard"
import ShellDeepDiveCard from "./components/ShellDeepDiveCard"
import ReleaseRadarList from "./components/ReleaseRadarList"
import ToolInsightCard from "./components/ToolInsightCard"
import EditorialTrackCard from "./components/EditorialTrackCard"
import NewsletterCard from "./components/NewsletterCard"
import ScrollToTopButton from "./components/ScrollToTopButton"
import Footer from "./components/Footer"
import theme from "./theme"
import {
  editorialTracks,
  featuredArticle,
  latestArticles,
  releaseRadar,
  shellDeepDives,
  toolchainInsights,
} from "./data/articles"
import { For } from "solid-js"
import type { Component } from "solid-js"

const App: Component = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: "100vh",
          backgroundColor: "#020617",
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.08) 0%, transparent 55%), radial-gradient(circle at 80% 0%, rgba(16, 185, 129, 0.08) 0%, transparent 55%)",
          pb: 10,
        }}
      >
        <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
          <NavigationBar />
          <Box sx={{ mt: { xs: 4, md: 6 } }}>
            <Hero article={featuredArticle} />
          </Box>

          <Box sx={{ mt: { xs: 6, md: 8 } }}>
            <SectionTitle
              id="latest"
              title="Latest field reports"
              description="Focused coverage on the freshest Bash、Zsh、Fish updates with an emphasis on measurable outcomes."
              actionLabel="View archive"
              actionHref="#editorial"
            />
            <Grid container spacing={3.5}>
              <For each={latestArticles}>
                {(article) => (
                  <Grid item xs={12} md={6}>
                    <ArticleCard article={article} />
                  </Grid>
                )}
              </For>
            </Grid>
          </Box>

          <Box sx={{ mt: { xs: 6, md: 8 } }}>
            <SectionTitle
              title="Shell deep dives"
              description="Reverse-engineered playbooks for building modern shell experiences while staying true to UNIX minimalism."
              actionLabel="Request a topic"
              actionHref="#newsletter"
            />
            <Grid container spacing={3}>
              <For each={shellDeepDives}>
                {(dive) => (
                  <Grid item xs={12} md={4}>
                    <ShellDeepDiveCard dive={dive} />
                  </Grid>
                )}
              </For>
            </Grid>
          </Box>

          <Grid container spacing={4} sx={{ mt: { xs: 6, md: 8 } }}>
            <Grid item xs={12} md={7}>
              <SectionTitle
                id="release-radar"
                title="Release radar"
                description="Watch the steady drumbeat of shell-adjacent tooling, from GNU releases to indie prompt engines."
                actionLabel="Submit a release"
                actionHref="#newsletter"
              />
              <ReleaseRadarList releases={releaseRadar} />
            </Grid>
            <Grid item xs={12} md={5}>
              <SectionTitle
                title="Toolchain insights"
                description="Experiments that wire Solid UI overlays into terminal-native workflows."
                actionLabel="Propose a lab"
                actionHref="#newsletter"
              />
              <Stack spacing={3}>
                <For each={toolchainInsights}>
                  {(insight) => <ToolInsightCard insight={insight} />}
                </For>
              </Stack>
            </Grid>
          </Grid>

          <Box sx={{ mt: { xs: 6, md: 8 } }} id="editorial">
            <SectionTitle
              title="Editorial tracks"
              description="Recurring series engineered with the UNIX mantra: simple pieces combined for powerful systems."
            />
            <Grid container spacing={3}>
              <For each={editorialTracks}>
                {(track) => (
                  <Grid item xs={12} md={4}>
                    <EditorialTrackCard track={track} />
                  </Grid>
                )}
              </For>
            </Grid>
          </Box>

          <Box sx={{ mt: { xs: 6, md: 8 } }}>
            <NewsletterCard />
          </Box>

          <Footer />
        </Container>
        <ScrollToTopButton />
      </Box>
    </ThemeProvider>
  )
}

export default App
