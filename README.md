# Shell Frontier

SolidJSとSolid UI（SUID Material）で構築した、Bash/Zsh/Fishシェルの最新トピックを扱うモダンなブログUIです。GIGAZINEのような速報性とリッチなレイアウトを、UNIX的ミニマリズム――「最小の構成で最大の価値」を信条に設計しました。

## 特徴

- **SolidJS + SUID Material**: SolidのリアクティブさとSUID(Material UI for Solid)のコンポーネントで構築した、レスポンシブかつアクセシブルなUI。
- **UNIX的情報設計**: Bash/Zsh/Fishのトピックを「最新レポート」「Deep Dive」「Release Radar」「Toolchain Insights」といったモジュールに分割し、最小限の構成で最大の情報量を伝達。
- **データ駆動**: 記事や特集は`src/data/articles.ts`に集約し、Solidの`<For>`による宣言的レンダリングで更新も容易。
- **モダンな体験**: eBPFやSolid UIによるオーバーレイなど、新しいシェルエコシステムを紹介。スクロール位置に応じたトースト/FABなど細かなUIも搭載。
- **日本語/英語ミックスのコピー**: 現代的なShell文化を国内外に向けて発信するトーンを意識したテキスト。

## セットアップ

```bash
npm install
npm run dev
```

`npm run dev`で http://localhost:5173 に開発サーバーが立ち上がります。

## ビルド

```bash
npm run build
```

`dist/`以下に静的アセットを出力します。

## ディレクトリ構成

- `src/components/` … ナビゲーションやカードなどのUIコンポーネント群
- `src/data/articles.ts` … 記事・特集・リリースなどのデータ定義
- `src/theme.ts` … SUID Material向けのカスタムテーマ定義

## ライセンス

このリポジトリは学習・デモ用途として公開されています。
