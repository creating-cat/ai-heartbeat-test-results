# Hello Worldサイト デプロイガイド (GitHub Pages)

このガイドでは、GitHub Pagesを使用して「Hello Worldサイト」をデプロイする手順を説明します。

## 1. GitHubリポジトリの作成

1. GitHubにログインし、新しいリポジトリを作成します。
2. リポジトリ名は、`[ユーザー名].github.io` または任意のプロジェクト名（例: `hello-world-site`）とします。
   - `[ユーザー名].github.io` の場合、リポジトリのルートがサイトのルートになります。
   - 任意のプロジェクト名の場合、サイトは `https://[ユーザー名].github.io/[プロジェクト名]/` でアクセス可能になります。

## 2. ローカルリポジトリの準備

現在のプロジェクトディレクトリ (`projects/hello_world_site`) が既にGitリポジトリとして初期化されていることを確認します。

## 3. GitHubへのプッシュ

1. ローカルリポジトリにGitHubリポジトリをリモートとして追加します。
   ```bash
   git remote add origin https://github.com/[ユーザー名]/[リポジトリ名].git
   ```
2. ローカルの変更をGitHubにプッシュします。
   ```bash
   git branch -M main
   git push -u origin main
   ```

## 4. GitHub Pagesの設定

1. GitHubリポジトリのページにアクセスします。
2. 「Settings」タブをクリックします。
3. 左側のメニューから「Pages」を選択します。
4. 「Source」セクションで、デプロイするブランチ（通常は `main` または `master`）を選択し、「/ (root)」を選択します。
5. 「Save」をクリックします。

## 5. サイトの確認

設定が完了すると、GitHub Pagesによってサイトがビルドされ、公開されます。
通常、数分でサイトが利用可能になります。サイトのURLは「Pages」設定ページに表示されます。

## 注意事項

- `index.html` がリポジトリのルートに存在する必要があります。
- CSSやJavaScriptファイルへのパスは、相対パスで正しく記述されていることを確認してください。
