export type Category = 'Bash' | 'Zsh' | 'Fish' | 'Tools' | 'Workflows'

export interface Article {
  id: string
  title: string
  description: string
  category: Category
  date: string
  readTime: string
  gradient: string
  tags: string[]
  link: string
  signal?: string
  release?: string
  insights?: { label: string; detail: string }[]
}

export interface DeepDive {
  id: string
  shell: Category
  title: string
  summary: string
  gradient: string
  metrics: { label: string; value: string }[]
  bullets: string[]
  link: string
}

export interface ReleaseNote {
  id: string
  title: string
  version: string
  date: string
  summary: string
  link: string
  category: Category
  highlight?: string
}

export interface ToolInsight {
  id: string
  title: string
  description: string
  gradient: string
  link: string
  metrics: string[]
  category: Category
}

export interface EditorialTrack {
  id: string
  title: string
  description: string
  bullets: string[]
  accent: string
}

export const featuredArticle: Article = {
  id: 'bash-ebpf-hooks',
  title: 'Bash 5.3のeBPFフックでスクリプトをリアルタイム観測',
  description:
    'Bash 5.3 RC1で試験導入されたeBPFフックを使い、ジョブ制御の境界ごとにイベントを収集。既存のスクリプトを改変せずに、Grafanaへメトリクスを流し込むまでを手順付きでまとめました。',
  category: 'Bash',
  date: '2025年9月',
  readTime: '約8分',
  gradient:
    'radial-gradient(circle at 18% 22%, rgba(148, 197, 255, 0.24), transparent 60%), radial-gradient(circle at 82% 30%, rgba(122, 220, 196, 0.28), transparent 68%)',
  tags: ['eBPF計測', 'ジョブ制御', '可観測性'],
  link: '#feature-bash-ebpf',
  signal: '現地検証レポート',
  release: 'GNU Bash 5.3 RC1',
  insights: [
    {
      label: '計測ポイント',
      detail: '17個のフックが`BASH_EBPF_SOCK`経由でイベントを配信。',
    },
    {
      label: '遅延影響',
      detail: '2,000本のCIジョブを計測し平均1.6%のオーバーヘッドに収束。',
    },
    {
      label: 'ツール群',
      detail: 'SystemTapとbpftraceのサンプルをそのまま差し替え可能。',
    },
  ],
}

export const latestArticles: Article[] = [
  {
    id: 'zsh-async-completions',
    title: 'Zsh 5.9の非同期補完ワーカーを安全に切り替える',
    description:
      '補完ワーカーがサンドボックス化され、重たいネットワーク問い合わせもプロンプトを止めません。設定例とともに40ms以内で応答させるチューニング手順を公開します。',
    category: 'Zsh',
    date: '2025年9月10日',
    readTime: '約6分',
    gradient:
      'radial-gradient(circle at 16% 18%, rgba(194, 181, 255, 0.25), transparent 58%), radial-gradient(circle at 80% 32%, rgba(158, 206, 255, 0.2), transparent 70%)',
    tags: ['非同期補完', 'ワーカープロセス', 'プロンプト高速化'],
    link: '#zsh-workers',
  },
  {
    id: 'fish-structured-streams',
    title: 'Fish 4.0プレビュー: 型付き変数とストリーム整形',
    description:
      'Fish 4.0で追加された構造化ストリームと型付き変数を使って、ステータスパネルを自動生成。既存の関数を壊さずにプレビュー版へ移行するための移行ガイドです。',
    category: 'Fish',
    date: '2025年9月6日',
    readTime: '約7分',
    gradient:
      'radial-gradient(circle at 20% 24%, rgba(176, 232, 255, 0.25), transparent 60%), radial-gradient(circle at 78% 18%, rgba(154, 226, 255, 0.2), transparent 72%)',
    tags: ['型付き変数', 'ストリーム可視化', 'プレビュー版'],
    link: '#fish-structured',
  },
  {
    id: 'bash-flake-launchers',
    title: 'Nix FlakesでBashランチャーを再現性高く配布',
    description:
      '各種CLIのバージョンを固定したランチャースクリプトをFlakeで束ね、Docker不要で配布。FlakeパターンとCold Start計測の比較表を掲載しています。',
    category: 'Workflows',
    date: '2025年9月2日',
    readTime: '約5分',
    gradient:
      'radial-gradient(circle at 30% 22%, rgba(255, 205, 229, 0.26), transparent 60%), radial-gradient(circle at 76% 28%, rgba(255, 220, 245, 0.2), transparent 70%)',
    tags: ['Nix Flakes', '再現性', 'ランタイム配布'],
    link: '#bash-flakes',
  },
  {
    id: 'solid-live-prompts',
    title: 'Solid UIとfzfで共有するライブプロンプト監視',
    description:
      'Solid UIのコンポーネントをターミナルへ埋め込み、fzf 0.48のストリーミングAPIと連携。必要なコードは最小限のまま、チームで利用できる監視パネルを構築します。',
    category: 'Tools',
    date: '2025年8月28日',
    readTime: '約9分',
    gradient:
      'radial-gradient(circle at 24% 28%, rgba(163, 233, 255, 0.28), transparent 64%), radial-gradient(circle at 80% 20%, rgba(122, 230, 247, 0.22), transparent 72%)',
    tags: ['Solid UI', 'fzfストリーミング', 'ターミナル可視化'],
    link: '#solid-live-prompts',
  },
]

export const shellDeepDives: DeepDive[] = [
  {
    id: 'deep-bash',
    shell: 'Bash',
    title: 'Bashを壊さずに計測を埋め込むベストプラクティス',
    summary:
      'POSIX互換を保ちながら監視を仕込むための運用レシピ。BATSテンプレートと再現可能なベンチマーク環境付きで紹介します。',
    gradient:
      'radial-gradient(circle at 16% 20%, rgba(179, 209, 255, 0.2), transparent 62%), radial-gradient(circle at 80% 22%, rgba(148, 205, 253, 0.18), transparent 70%)',
    metrics: [
      { label: 'テスト網羅率', value: 'BATS 84%' },
      { label: 'オーバーヘッド', value: '中央値1.6%' },
    ],
    bullets: [
      '新しい`BASH_PROFILER`デバイスでeBPFイベントを安全に抽出。',
      'stdbufとtimestamp付きFIFOで再現可能なトレース環境を構築。',
      'ShellCheckとshfmtを並列化しCIフィードバックを3倍高速化。',
    ],
    link: '#deep-bash',
  },
  {
    id: 'deep-zsh',
    shell: 'Zsh',
    title: 'ZLEワーカーをグラフ化してプロンプトを止めない',
    summary:
      'プロンプト処理をDAGとして設計し、非同期フェッチャーがブロックしない仕組みを解説。堅牢なプラグイン設計チェックリストも付属します。',
    gradient:
      'radial-gradient(circle at 26% 18%, rgba(220, 204, 255, 0.24), transparent 60%), radial-gradient(circle at 78% 30%, rgba(204, 180, 255, 0.2), transparent 72%)',
    metrics: [
      { label: '応答時間', value: 'P95 32ms' },
      { label: '監査済みプラグイン', value: '14個' },
    ],
    bullets: [
      '`zle -F worker` APIを実例で読み解き、トラブル時の診断手順を提示。',
      'yqとjqの出力をdeltaで整形し、読みやすいステータスセグメントを作成。',
      'ziとnix developを併用したプラグインの密閉パッケージング。',
    ],
    link: '#deep-zsh',
  },
  {
    id: 'deep-fish',
    shell: 'Fish',
    title: 'Fishをダッシュボードにする構造化ノート術',
    summary:
      '構造化変数とリアルタイムオーバーレイを組み合わせ、入力と同時にメトリクスを更新する環境を構築。ターミナルだけで可観測化します。',
    gradient:
      'radial-gradient(circle at 20% 26%, rgba(167, 236, 255, 0.25), transparent 58%), radial-gradient(circle at 80% 20%, rgba(158, 241, 255, 0.2), transparent 70%)',
    metrics: [
      { label: 'ホットリロード', value: '150ms以内' },
      { label: 'メトリクス', value: 'Prometheus対応' },
    ],
    bullets: [
      '実験的な`fish @record`で型付き関数を実装し、補完も自動生成。',
      'fish --profile-shellの出力をLokiへストリームし、履歴を可視化。',
      'SolidStartとWebSocket橋渡しでダッシュボードを即席配信。',
    ],
    link: '#deep-fish',
  },
]

export const releaseRadar: ReleaseNote[] = [
  {
    id: 'release-bash-53rc1',
    title: 'GNU Bash',
    version: '5.3-rc1',
    date: '2025年9月14日',
    summary: '観測用フックとmusl/BusyBox向けのビルドが同時に更新。移行時の互換チェックリスト付き。',
    link: '#release-bash-53rc1',
    category: 'Bash',
    highlight: '可観測フック',
  },
  {
    id: 'release-starship-120',
    title: 'Starship',
    version: '1.20.0',
    date: '2025年9月8日',
    summary: 'Solid UIレンダラーを採用し、GPU描画でも安定したプロンプト表示を実現。',
    link: '#release-starship-120',
    category: 'Tools',
    highlight: 'Solid UI化',
  },
  {
    id: 'release-atuin-180',
    title: 'Atuin Sync',
    version: '18.0',
    date: '2025年9月4日',
    summary: 'ローカルファーストの差分管理とWebAuthnによる履歴共有を実装。チーム共有の基盤が強化。',
    link: '#release-atuin-180',
    category: 'Tools',
    highlight: 'ローカルファースト',
  },
  {
    id: 'release-zoxide-090',
    title: 'zoxide',
    version: '0.9.0',
    date: '2025年8月30日',
    summary: 'WASIビルドを提供し、コンテナ環境でもFUSEなしで動作可能。セキュアなジャンプが容易に。',
    link: '#release-zoxide-090',
    category: 'Tools',
    highlight: 'WASI対応',
  },
]

export const toolchainInsights: ToolInsight[] = [
  {
    id: 'insight-wezterm',
    title: 'WezTerm NightlyでSolid UIウィジェットをGPU表示',
    description:
      'WebAssemblyブリッジ経由でSolidコンポーネントをHUDに描画。1.5msのフレーム予算内に収まる設定を紹介します。',
    gradient:
      'linear-gradient(135deg, rgba(184, 226, 255, 0.35) 0%, rgba(212, 246, 255, 0.25) 100%)',
    link: '#insight-wezterm',
    metrics: ['GPUフレーム1.5ms', 'WASMシーングラフ', '常駐プロセス不要'],
    category: 'Tools',
  },
  {
    id: 'insight-fzf',
    title: 'fzf 0.48のクエリスナップショットで振り返りを高速化',
    description:
      '各検索セッションのログを構造化データとして保存し、Solid UIのダッシュボードで振り返り。Prometheus輸出も可能に。',
    gradient:
      'linear-gradient(135deg, rgba(255, 214, 233, 0.32) 0%, rgba(255, 230, 250, 0.22) 100%)',
    link: '#insight-fzf',
    metrics: ['クエリ履歴保存', 'Prometheus連携', '再生ログ'],
    category: 'Tools',
  },
  {
    id: 'insight-nushell',
    title: 'Nushell 0.98の型付きブリッジでBashと共存',
    description:
      'bridge spawnコマンドでテーブルを往復させ、JSONに頼らず段階的に導入。ハンドオフ時間を90%短縮した事例を掲載。',
    gradient:
      'linear-gradient(135deg, rgba(204, 244, 220, 0.32) 0%, rgba(222, 253, 236, 0.24) 100%)',
    link: '#insight-nushell',
    metrics: ['型付きパイプ', 'キャッシュ機構', 'ハンドオフ90%短縮'],
    category: 'Workflows',
  },
]

export const editorialTracks: EditorialTrack[] = [
  {
    id: 'track-dotfiles',
    title: '最小ドットファイルで最大のシグナルを得る',
    description:
      '拠点ごとの微調整を薄く重ね、ドキュメントと計測結果を自動生成。UNIX的な分離を保ったまま運用を共有します。',
    bullets: [
      '`chezmoi`のレイヤー構造で12行程度のローカル差分を管理。',
      'コメントからドキュメントを生成し、Solid UIで読みやすい形に整形。',
      'flakesとdevboxを組み合わせた再現性の高い開発シェルを配布。',
    ],
    accent:
      'radial-gradient(circle at 20% 18%, rgba(205, 204, 255, 0.25), transparent 62%), radial-gradient(circle at 80% 22%, rgba(188, 220, 255, 0.2), transparent 70%)',
  },
  {
    id: 'track-team',
    title: 'チーム導入をスムーズにするシェル運用',
    description:
      'セキュアな初期設定と遠隔支援を、簡潔なスクリプトで提供するための運用ノウハウを共有します。',
    bullets: [
      '`age`と`git worktree`で安全なデフォルト設定を配布。',
      'ssh多重化とdirenvポリシーで遠隔実行を固める。',
      'AtuinメトリクスをSolid UIへ流して採用状況を可視化。',
    ],
    accent:
      'radial-gradient(circle at 18% 24%, rgba(202, 243, 232, 0.28), transparent 60%), radial-gradient(circle at 76% 18%, rgba(180, 236, 242, 0.22), transparent 70%)',
  },
  {
    id: 'track-research',
    title: '研究ノート: シェルの未来を探る',
    description:
      'POSIXとリアクティブUIが交差する最前線を追いかけ、実験ログを共有。再現性を保つテンプレート付きです。',
    bullets: [
      'SolidStartのサーバーコンポーネントをCLIディスパッチと組み合わせる。',
      '遠隔ペア用のCRDT履歴共有を試作し、latencyを測定。',
      'WebAssemblyサイドカーで決定的なCLI体験を標準化。',
    ],
    accent:
      'radial-gradient(circle at 22% 20%, rgba(255, 220, 239, 0.28), transparent 62%), radial-gradient(circle at 78% 24%, rgba(255, 231, 246, 0.22), transparent 72%)',
  },
]
