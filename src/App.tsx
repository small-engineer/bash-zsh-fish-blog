import { For } from 'solid-js'
import type { Component } from 'solid-js'

import NavigationBar from '~/components/NavigationBar'
import Hero from '~/components/Hero'
import SectionTitle from '~/components/SectionTitle'
import ArticleCard from '~/components/ArticleCard'
import ShellDeepDiveCard from '~/components/ShellDeepDiveCard'
import ReleaseRadarList from '~/components/ReleaseRadarList'
import ToolInsightCard from '~/components/ToolInsightCard'
import EditorialTrackCard from '~/components/EditorialTrackCard'
import NewsletterCard from '~/components/NewsletterCard'
import ScrollToTopButton from '~/components/ScrollToTopButton'
import Footer from '~/components/Footer'
import {
  editorialTracks,
  featuredArticle,
  latestArticles,
  releaseRadar,
  shellDeepDives,
  toolchainInsights,
} from '~/data/articles'

const App: Component = () => {
  return (
    <main class="bg-background text-foreground">
      <div class="mx-auto flex min-h-screen max-w-6xl flex-col gap-14 px-5 py-8 md:px-10 md:py-12">
        <NavigationBar />

        <Hero article={featuredArticle} />

        <section class="space-y-6" id="latest">
          <SectionTitle
            title="最新フィールドレポート"
            description="各シェルの変更点を現場導入の観点で検証し、コマンド一つずつ丁寧に解説します。"
            actionLabel="過去の記録"
            actionHref="#editorial"
          />
          <div class="section-grid">
            <For each={latestArticles}>{(article) => <ArticleCard article={article} />}</For>
          </div>
        </section>

        <section class="space-y-6" id="deep-dives">
          <SectionTitle
            title="深堀りテクニック"
            description="UNIX的な小さな部品を組み合わせて、チームでも再現できるシンプルな仕組みを作ります。"
            actionLabel="テーマの希望を送る"
            actionHref="#newsletter"
          />
          <div class="grid gap-6 md:grid-cols-3">
            <For each={shellDeepDives}>{(dive) => <ShellDeepDiveCard dive={dive} />}</For>
          </div>
        </section>

        <section class="grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
          <div class="space-y-6">
            <SectionTitle
              title="リリース速報"
              description="主要ツールとシェル本体の更新情報を、互換性の観点と運用メモ付きで整理しました。"
            />
            <ReleaseRadarList releases={releaseRadar} />
          </div>
          <div class="space-y-6">
            <SectionTitle
              title="ツールチェーン洞察"
              description="端末からダッシュボードまでを結ぶための最新実験と計測結果です。"
            />
            <div class="flex flex-col gap-5">
              <For each={toolchainInsights}>{(insight) => <ToolInsightCard insight={insight} />}</For>
            </div>
          </div>
        </section>

        <section class="space-y-6" id="editorial">
          <SectionTitle
            title="連載トラック"
            description="継続シリーズで、ミニマルな土台に息の長い改善を積み重ねていくための実践集です。"
          />
          <div class="section-grid">
            <For each={editorialTracks}>{(track) => <EditorialTrackCard track={track} />}</For>
          </div>
        </section>

        <NewsletterCard />

        <Footer />
      </div>
      <ScrollToTopButton />
    </main>
  )
}

export default App
