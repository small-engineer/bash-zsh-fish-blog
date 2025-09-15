# Shell Nipponics

SolidJSとSolidUI(https://www.solid-ui.com/)のコピーコンポーネントで構築した、Bash / Zsh / Fishの最新トピックを日本語で届けるブログUIです。UNIX的な「最小構成で最大の結果」という思想を軸に、モダンとクラシカルが共存する紙面を目指しました。

## 特徴

- **SolidJS + SolidUIコンポーネント**: shadcn系のSolidUIライブラリからボタン・バッジ・カード・タブを取り込み、Tailwind CSSで細部を日本語向けに調律。
- **UNIX的情報設計**: 最新記事、深掘り連載、リリースタイムライン、設計思想を最小単位のカードやタブで構成し、端末利用者に必要な情報だけを圧縮提示。
- **日本語タイポグラフィ**: Inter / Noto Sans JP / Noto Serif JP / Fira Codeを組み合わせ、和文と等幅フォントが混在する紙面でも整うリズムを実現。
- **Tailwindカスタムテーマ**: SolidUIのトークンを基にダーク寄りの配色を設定し、UNIX端末を思わせるグリッド背景とフォーカスリングを用意。

## セットアップ

```bash
npm install
npm run dev
```

`npm run dev` で http://localhost:5173 に開発サーバーが立ち上がります。

## ビルド

```bash
npm run build
```

`dist/` 以下に静的アセットが出力されます。

## ディレクトリ構成

- `src/components/` … ヒーロー、記事一覧、連載タブ、タイムライン、ニュースレターなどのセクションとSolidUI由来のUIパーツ
- `src/components/ui/` … SolidUIレジストリから複製した基礎コンポーネント(button/badge/card/tabs)
- `src/data/site.ts` … 記事・連載・リリース・思想のデータ定義
- `src/lib/utils.ts` … Tailwindクラス結合ユーティリティ
- `tailwind.config.ts` / `postcss.config.cjs` … Tailwind CSSの設定

## ライセンス

このリポジトリは学習・デモ用途として公開されています。
