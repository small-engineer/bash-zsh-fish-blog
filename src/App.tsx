import type { Component } from "solid-js"

import ArticleSection from "~/components/ArticleSection"
import DeepDiveSection from "~/components/DeepDiveSection"
import Footer from "~/components/Footer"
import Header from "~/components/Header"
import HeroSection from "~/components/HeroSection"
import NewsletterSection from "~/components/NewsletterSection"
import PhilosophySection from "~/components/PhilosophySection"
import ReleaseTimeline from "~/components/ReleaseTimeline"
import { deepDiveSeries, latestArticles, philosophy, releaseDigest } from "~/data/site"

const App: Component = () => {
  return (
    <div class="relative min-h-screen">
      <div class="pointer-events-none absolute inset-x-0 top-0 z-[-1] h-[420px] bg-gradient-to-b from-primary/20 via-background/60 to-transparent" />
      <Header />
      <main class="flex flex-col">
        <HeroSection />
        <ArticleSection articles={latestArticles} />
        <DeepDiveSection series={deepDiveSeries} />
        <ReleaseTimeline notes={releaseDigest} />
        <PhilosophySection points={philosophy} />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
