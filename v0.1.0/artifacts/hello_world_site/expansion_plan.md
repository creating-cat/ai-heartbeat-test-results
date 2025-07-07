# Hello Worldサイト 拡張計画

## 1. サイトの拡張性

### ディレクトリ構成
- `projects/hello_world_site/`
  - `index.html` (トップページ)
  - `about.html` (追加ページ例)
  - `assets/`
    - `css/`
      - `style.css` (共通スタイル)
      - `about.css` (aboutページ固有スタイル)
    - `js/`
      - `main.js` (共通スクリプト)
      - `about.js` (aboutページ固有スクリプト)
    - `images/` (画像ファイル)
  - `README.md` (プロジェクト説明)

### ファイル分割
- HTML: 各ページごとにHTMLファイルを作成。
- CSS: 共通スタイルとページ固有スタイルを分離。
- JavaScript: 共通スクリプトとページ固有スクリプトを分離。

## 2. 開発環境の整備

### ライブリロード
- `BrowserSync` や `Live Server` (VS Code拡張機能) の導入を検討。
  - `BrowserSync` はNode.jsベースで、HTML/CSS/JSの変更を自動検知しブラウザをリロード。
  - `Live Server` はVS Codeユーザー向けに手軽に利用可能。

### CSSプリプロセッサ
- `Sass` や `Less` の導入を検討。
  - 変数、ネスト、ミックスインなどの機能でCSS記述を効率化。
  - コンパイルが必要となるため、ビルドプロセスの検討も必要。

## 3. デプロイメントの検討

### 静的サイトホスティング
- `GitHub Pages` や `Netlify`、`Vercel` などの静的サイトホスティングサービスを利用。
  - Gitリポジトリと連携し、プッシュするだけで自動デプロイが可能。
  - シンプルなHTML/CSS/JSサイトには最適。

### 手動デプロイ
- FTP/SFTPクライアントを使用して、Webサーバーに直接ファイルをアップロード。
  - 小規模なサイトや、自動デプロイが不要な場合に検討。
