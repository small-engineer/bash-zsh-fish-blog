export type ArticleCategory = "Bash" | "Zsh" | "Fish" | "Toolchain"

export interface ArticleSummary {
  id: string
  title: string
  summary: string
  category: ArticleCategory
  date: string
  readTime: string
  topics: string[]
}

export interface DeepDiveSeries {
  id: string
  shell: ArticleCategory
  title: string
  subtitle: string
  description: string
  highlights: { label: string; detail: string }[]
  action: string
}

export interface ReleaseNote {
  id: string
  shell: ArticleCategory
  name: string
  version: string
  date: string
  headline: string
  detail: string
}

export interface PhilosophyPoint {
  id: string
  title: string
  description: string
}

export const latestArticles: ArticleSummary[] = [
  {
    id: "bash-ebpf-trace",
    title: "Bash観測線図 ─ eBPFで可視化する最小のパイプライン",
    summary:
      "Bash 5.3-rcに追加されたeBPFフックを使い、既存のシェルスクリプトを修正せずにイベントを収集。UNIXらしい最小構成でクラウド監視と連携させる手順を解説します。",
    category: "Bash",
    date: "2025年9月12日",
    readTime: "7分",
    topics: ["eBPF", "プロファイリング", "管制ログ"],
  },
  {
    id: "zsh-worker-grid",
    title: "Zsh非同期補完の実戦投入 ─ ワーカー分離で即応するプロンプト",
    summary:
      "Zsh 5.9のDetached Workerを使うと補完処理をサンドボックス化できるようになりました。tmux・weztermと連携した低遅延UIの組み方を具体例で紹介します。",
    category: "Zsh",
    date: "2025年9月8日",
    readTime: "6分",
    topics: ["補完DSL", "ワーカー分離", "遅延計測"],
  },
  {
    id: "fish-structured-state",
    title: "Fish 4.0プレビュー ─ 型付き変数と構造化ストリームで整う端末UI",
    summary:
      "Fish 4.0のプレビュー版では、パイプラインにJSONメタデータを添えて配信できます。fzf・glowとの連携でコマンド結果をリアルタイムに整形するユースケースを検証しました。",
    category: "Fish",
    date: "2025年9月3日",
    readTime: "8分",
    topics: ["構造化ストリーム", "プレビュー版", "UI整形"],
  },
  {
    id: "toolchain-solid-dashboard",
    title: "Solid UIで繋ぐ端末ダッシュボード ─ 最小のWebSocketで最大の把握力",
    summary:
      "SolidUIのカード・タブコンポーネントを活用し、zsh・bash・fishの状態を同一ダッシュボードに描画。UNIX的な部品の足し算で運用監視をどう洗練できるかを紹介します。",
    category: "Toolchain",
    date: "2025年8月29日",
    readTime: "9分",
    topics: ["SolidUI", "WebSocket", "観測可能性"],
  },
]

export const deepDiveSeries: DeepDiveSeries[] = [
  {
    id: "deep-bash",
    shell: "Bash",
    title: "Bash整流盤",
    subtitle: "古典的なPOSIXシェルを近代化するための観測と検証",
    description:
      "eBPFとBATSテストを軸に、壊さずに磨き上げるためのテンプレートを公開。sedやawkといった古典的ツールとの調和を崩さず、メトリクスだけを静かに差し込む設計思想です。",
    highlights: [
      { label: "遅延", detail: "CI上で1.4%未満のオーバーヘッド" },
      { label: "互換性", detail: "POSIXモードでも動作するアダプタ" },
      { label: "配布", detail: "Nix Flakeとapkで即時デプロイ" },
    ],
    action: "レシピを読む",
  },
  {
    id: "deep-zsh",
    shell: "Zsh",
    title: "ZLE Worker Atlas",
    subtitle: "補完とUIを分離して俊敏なプロンプトを育てる",
    description:
      "補完ワーカーを複数立ち上げ、Web APIやgit情報の取得を遅延なく提供する設計。Solid UIのトーストとタブを組み合わせたエラーハンドリングも合わせて解説します。",
    highlights: [
      { label: "RPS", detail: "REST補完を120req/sで維持" },
      { label: "応答時間", detail: "平均38msの応答" },
      { label: "失敗検出", detail: "ワーカーごとのCircuit Breaker" },
    ],
    action: "手順を見る",
  },
  {
    id: "deep-fish",
    shell: "Fish",
    title: "Fish Telemetry Studio",
    subtitle: "構造化イベントでセッション全体を楽譜のように可視化",
    description:
      "typed varsとsubscription APIを組み合わせ、プロンプト状態・履歴・外部サービスの通知をライブに重ねる方法を追体験。日本語端末でのフォント最適化も検証しました。",
    highlights: [
      { label: "ビュー", detail: "4分割ダッシュボードを10秒で構成" },
      { label: "互換性", detail: "Terminus・WezTerm双方で検証済み" },
      { label: "脚注", detail: "IMEイベントをログに重畳" },
    ],
    action: "セッションを再現",
  },
]

export const releaseDigest: ReleaseNote[] = [
  {
    id: "bash-5-3",
    shell: "Bash",
    name: "GNU Bash",
    version: "5.3-rc1",
    date: "2025年9月11日",
    headline: "eBPFプローブとヒアドキュメント高速化",
    detail:
      "プロセス置換やジョブ制御のイベントが`BASH_TRACE_PIPE`経由でJSON出力可能に。ヒアドキュメントはメモリコピー削減で18%高速化。",
  },
  {
    id: "zsh-5-9",
    shell: "Zsh",
    name: "Z shell",
    version: "5.9.1",
    date: "2025年9月2日",
    headline: "補完ワーカーの分離と署名付きプラグイン",
    detail:
      "`workerctl`サブコマンドで補完のワーカーを制御。署名付きプラグインマニフェストが公式採用され、企業環境でも安全に配布可能になりました。",
  },
  {
    id: "fish-4-0",
    shell: "Fish",
    name: "fish shell",
    version: "4.0-preview2",
    date: "2025年8月27日",
    headline: "構造化ストリームと色彩テーマAPI",
    detail:
      "`status --json`と`fish_color` APIが拡張され、外部クライアントからテーマを即時切り替え可能に。dotfiles共有の新しい定石が見えてきました。",
  },
]

export const philosophy: PhilosophyPoint[] = [
  {
    id: "philosophy-minimal",
    title: "最小の組み合わせで最大の結果",
    description:
      "1つの小さなスクリプトと1つの小さなUI部品。それらを疎結合に束ねることで、大規模な監視システムにも負けない把握力を手に入れる──それがShell Nipponicsの思想です。",
  },
  {
    id: "philosophy-unix",
    title: "UNIX美学を日本語で磨き直す",
    description:
      "日本語環境での表示崩れを避けつつ、等幅フォントや縦横比を大切にした紙面づくりを追求。和文と欧文が同じリズムで流れるようにカーニングも調整しています。",
  },
  {
    id: "philosophy-modern",
    title: "最新技術を余白のように扱う",
    description:
      "Solid UIのカード、タブ、バッジを必要な分だけ取り入れ、余白とグリッドで情報密度を制御。Modernとクラシカルが自然に共存できる配色を選びました。",
  },
]
