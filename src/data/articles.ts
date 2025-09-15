export type Category = "Bash" | "Zsh" | "Fish" | "Tools" | "Workflows"

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
  id: "bash-ebpf-hooks",
  title: "Bash 5.3 eBPF Hooks Turn Scripts into Observable Pipelines",
  description:
    "The Bash maintainers quietly ship experimental eBPF probe points that stream structured events at every job-control boundary. We profile the design and wire the telemetry into Grafana without patching your scripts.",
  category: "Bash",
  date: "Sep 2025",
  readTime: "8 min read",
  gradient: "linear-gradient(135deg, rgba(10, 17, 43, 0.95) 0%, rgba(16, 185, 129, 0.9) 100%)",
  tags: ["eBPF observability", "Shell tracing", "Minimal instrumentation"],
  link: "#feature-bash-ebpf",
  signal: "Field Test Channel",
  release: "GNU Bash 5.3-rc1",
  insights: [
    {
      label: "Probe Count",
      detail: "17 native instrumentation points emit telemetry through `BASH_EBPF_SOCK`.",
    },
    {
      label: "Latency Impact",
      detail: "Observed < 1.6% overhead across 2k job pipeline runs in CI.",
    },
    {
      label: "Toolkit",
      detail: "SystemTap and bpftrace adapters ship as composable sample programs.",
    },
  ],
}

export const latestArticles: Article[] = [
  {
    id: "zsh-async-completions",
    title: "Zsh 5.9 Brings Detached Completion Workers With Sandboxing",
    description:
      "Async completion contexts now speak a structured DSL that isolates slow network queries from your prompt. We stress-test the worker API and keep completions under 40 ms.",
    category: "Zsh",
    date: "Sep 10, 2025",
    readTime: "6 min read",
    gradient: "linear-gradient(135deg, rgba(40, 16, 64, 0.9) 0%, rgba(129, 140, 248, 0.9) 100%)",
    tags: ["worker threads", "sandboxed completions", "prompt latency"],
    link: "#zsh-workers",
  },
  {
    id: "fish-structured-streams",
    title: "Fish 4.0 Preview Adds Structured Streams and Typed Variables",
    description:
      "Pipeline annotations land alongside typed variables, enabling auto-formatted status panes and JSON-first scripting. Here's how to refactor your dotfiles for the preview channel.",
    category: "Fish",
    date: "Sep 6, 2025",
    readTime: "7 min read",
    gradient: "linear-gradient(135deg, rgba(15, 23, 42, 0.92) 0%, rgba(14, 165, 233, 0.9) 100%)",
    tags: ["typed variables", "preview builds", "status panes"],
    link: "#fish-structured",
  },
  {
    id: "bash-flake-launchers",
    title: "Declarative Bash Launchers With Nix Flakes Keep Scripts Portable",
    description:
      "Compose a reproducible runtime that compiles your Bash utility stack into container-less bundles. We measure cold boot times against Docker and systemd-run.",
    category: "Workflows",
    date: "Sep 2, 2025",
    readTime: "5 min read",
    gradient: "linear-gradient(135deg, rgba(24, 24, 27, 0.95) 0%, rgba(236, 72, 153, 0.85) 100%)",
    tags: ["nix flakes", "portable scripts", "startup benchmarking"],
    link: "#bash-flakes",
  },
  {
    id: "solid-live-prompts",
    title: "Cross-shell Prompt Telemetry With Solid UI and Fzf 0.48",
    description:
      "Solid components render live shell status boards inside your terminal emulator via a WebSocket broadcast. Minimal code, maximal situational awareness.",
    category: "Tools",
    date: "Aug 28, 2025",
    readTime: "9 min read",
    gradient: "linear-gradient(135deg, rgba(12, 10, 32, 0.92) 0%, rgba(6, 182, 212, 0.86) 100%)",
    tags: ["solid ui overlays", "fzf streaming", "telemetry"],
    link: "#solid-live-prompts",
  },
]

export const shellDeepDives: DeepDive[] = [
  {
    id: "deep-bash",
    shell: "Bash",
    title: "Sober Bash: Lean Observability Without Losing POSIX",
    summary:
      "Instrumentation patches land without compromising sh compatibility. Includes BATS regression templates and hermetic benchmarking recipes.",
    gradient: "linear-gradient(135deg, rgba(13, 24, 50, 0.92) 0%, rgba(59, 130, 246, 0.88) 100%)",
    metrics: [
      { label: "Coverage", value: "84% BATS coverage" },
      { label: "Overhead", value: "1.6% median" },
    ],
    bullets: [
      "Expose eBPF hooks through the new `BASH_PROFILER` pseudo-device.",
      "Deterministic tracing harness built with `stdbuf`, `pv`, and timestamped FIFOs.",
      "ShellCheck + shfmt pipeline tuned for 3× faster CI feedback.",
    ],
    link: "#deep-bash",
  },
  {
    id: "deep-zsh",
    shell: "Zsh",
    title: "Prompt Federation With ZLE Worker Graphs",
    summary:
      "Model prompt rendering as a DAG so asynchronous fetchers never block the line editor. Includes plugin hardening checklists.",
    gradient: "linear-gradient(135deg, rgba(36, 12, 64, 0.92) 0%, rgba(168, 85, 247, 0.9) 100%)",
    metrics: [
      { label: "Latency", value: "32 ms P95" },
      { label: "Plugins", value: "14 audited" },
    ],
    bullets: [
      "Demystify the `zle -F worker` API with production prompt examples.",
      "Pipe `yq` + `jq` output into `delta` themed status segments.",
      "Hermetic plugin packaging via `zi` and `nix develop` profiles.",
    ],
    link: "#deep-zsh",
  },
  {
    id: "deep-fish",
    shell: "Fish",
    title: "Fish as a Data Notebook",
    summary:
      "Live query posture with structured variables and Solid UI overlays that update with every keystroke.",
    gradient: "linear-gradient(135deg, rgba(7, 18, 48, 0.94) 0%, rgba(34, 211, 238, 0.88) 100%)",
    metrics: [
      { label: "Reload", value: "Hot reload <150 ms" },
      { label: "Telemetry", value: "Prometheus-ready" },
    ],
    bullets: [
      "Type-safe functions using the experimental `fish @record` prototypes.",
      "Stream `fish --profile-shell` events directly into Loki.",
      "Render interactive dashboards with SolidStart and WebSocket bridges.",
    ],
    link: "#deep-fish",
  },
]

export const releaseRadar: ReleaseNote[] = [
  {
    id: "release-bash-53rc1",
    title: "GNU Bash",
    version: "5.3-rc1",
    date: "Sep 14, 2025",
    summary:
      "Preview instrumentation plus hermetic builds for musl and BusyBox targets.",
    link: "#release-bash-53rc1",
    category: "Bash",
    highlight: "Observability hooks",
  },
  {
    id: "release-starship-120",
    title: "Starship",
    version: "1.20.0",
    date: "Sep 8, 2025",
    summary:
      "Adopts the Solid UI renderer for GPU-accelerated prompt widgets with unified configuration.",
    link: "#release-starship-120",
    category: "Tools",
    highlight: "Solid UI renderer",
  },
  {
    id: "release-atuin-180",
    title: "Atuin Sync",
    version: "18.0",
    date: "Sep 4, 2025",
    summary:
      "Brings local-first diffing and WebAuthn-backed federation for shell history.",
    link: "#release-atuin-180",
    category: "Tools",
    highlight: "Local-first sync",
  },
  {
    id: "release-zoxide-090",
    title: "zoxide",
    version: "0.9.0",
    date: "Aug 30, 2025",
    summary:
      "Ships WASI builds so the jump database can run inside container sandboxes without FUSE.",
    link: "#release-zoxide-090",
    category: "Tools",
    highlight: "WASI builds",
  },
]

export const toolchainInsights: ToolInsight[] = [
  {
    id: "insight-wezterm",
    title: "WezTerm Nightly Pipes Solid UI Widgets Into the GPU HUD",
    description:
      "Compose status panes with Solid components while keeping GPU frame budgets under 1.5 ms thanks to the new WebAssembly bridge.",
    gradient: "linear-gradient(135deg, rgba(15, 8, 40, 0.95) 0%, rgba(56, 189, 248, 0.85) 100%)",
    link: "#insight-wezterm",
    metrics: ["GPU frame budget 1.5 ms", "WASM scene graph", "Zero background daemon"],
    category: "Tools",
  },
  {
    id: "insight-fzf",
    title: "Fzf 0.48 Ships Query Snapshots and Structured Metrics",
    description:
      "Expose structured telemetry for each fuzzy search session and replay queries through Solid dashboards for team retrospectives.",
    gradient: "linear-gradient(135deg, rgba(18, 12, 46, 0.9) 0%, rgba(244, 114, 182, 0.85) 100%)",
    link: "#insight-fzf",
    metrics: ["Query snapshots", "Prometheus exporter", "Replay-ready logs"],
    category: "Tools",
  },
  {
    id: "insight-nushell",
    title: "Nushell 0.98 Interops With Bash Via Typed Bridges",
    description:
      "A new `bridge spawn` command passes structured tables between Nushell and Bash without JSON glue, perfect for incremental adoption.",
    gradient: "linear-gradient(135deg, rgba(9, 24, 64, 0.9) 0%, rgba(74, 222, 128, 0.84) 100%)",
    link: "#insight-nushell",
    metrics: ["Typed pipes", "Bridge cache", "90% faster handoff"],
    category: "Workflows",
  },
]

export const editorialTracks: EditorialTrack[] = [
  {
    id: "track-dotfiles",
    title: "Minimal Dotfiles, Maximal Signals",
    description:
      "Shrink your dotfiles footprint while exporting the right metrics to dashboards, just like the UNIX ethos intended.",
    bullets: [
      "Use `chezmoi` layering to keep site-specific tweaks in 12-line overlays.",
      "Generate documentation straight from shell comments via Solid MDX.",
      "Bundle reproducible environments with flakes + devbox minimal shells.",
    ],
    accent: "linear-gradient(135deg, rgba(37, 8, 74, 0.85) 0%, rgba(129, 140, 248, 0.85) 100%)",
  },
  {
    id: "track-team",
    title: "Team Workflows in Plain Shell",
    description:
      "Blueprints for repeatable onboarding scripts that feel artisanal yet scale to thousands of machines.",
    bullets: [
      "Distribute secure defaults with `age` + `git worktree` bundles.",
      "Harden remote execution using `ssh multiplexers` and `direnv` policies.",
      "Measure adoption using Solid UI dashboards that stream from Atuin metrics.",
    ],
    accent: "linear-gradient(135deg, rgba(13, 38, 67, 0.85) 0%, rgba(45, 212, 191, 0.82) 100%)",
  },
  {
    id: "track-research",
    title: "Research Notes: Shell Futures",
    description:
      "Speculative projects where POSIX meets reactive interfaces, curated for experimenters.",
    bullets: [
      "Blend `SolidStart` server components with CLI-only dispatch.",
      "Prototype CRDT-backed history sharing for remote pair shells.",
      "Adopt WebAssembly sidecars for deterministic CLI UX baselines.",
    ],
    accent: "linear-gradient(135deg, rgba(46, 16, 101, 0.85) 0%, rgba(236, 72, 153, 0.82) 100%)",
  },
]
