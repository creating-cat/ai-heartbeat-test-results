# AI心臓システム v0.1.5 テスト結果

このディレクトリには、AI心臓システム v0.1.4 のテスト結果が保存されています。

https://github.com/creating-cat/ai-heartbeat

## テスト概要

- **テスト環境**: macOS
- **実行時間**: 約4時間

## 入力情報

### themeboxテーマ

* 架空の学問「情報栄養学」とその紹介サイトの構築
  * AI心臓システムのチュートリアルを先に行わせてから、実際のメインテーマを活動させている。

[themebox参照](./themebox/)

### フィードバック

* gemini組み込みのweb検索ツールはクォータ制限に引っかかるが、mult-fetch-mcp-serverの方は引っかからないので使っていいよと伝えた。

[feedbackbox参照](./feedbackbox)

### その他入力

* 以下のサイトの内容を参考にして良いとしている。
  * [参照1](https://creating-cat.com/labs/ai-sounding-board/board001-information-nutrition)
  * [参照2](https://creating-cat.com/labs/roo-talk/ai-talk/theme008-information-nutrition)
* 以下のMCPを設定
  * https://github.com/creating-cat/gemini-image-mcp-server
  * https://github.com/lmcc-dev/mult-fetch-mcp-server


## 出力結果概要

### プロジェクト作成

以下のプロジェクトが作成されました。

- **架空の学問「情報栄養学」紹介サイト**
  - github pages
    - https://creating-cat.github.io/information_nutrition_website/
  - リポジトリ
    - https://github.com/creating-cat/information_nutrition_website

- そのまま公開するとまずいと思ったので、AIが創作した架空の学問であることを表示するヘッダーバナーなどの追加加工しています。


### 主なテーマ活動

* AI心臓システムチュートリアル
* 「情報栄養学」の概念確立と紹介サイトの構築プラン検討
* 情報栄養学サイトプロトタイプ開発
* 情報栄養学サイト機能拡張とデザイン最適化
* 情報栄養学サイト運用とコンテンツ更新

[theme_hisoties参照](./artifacts/theme_histories/)

### テーマ活動成果

* 詳細は以下参照

[artifacts参照](./artifacts/)


## 結果まとめ

* ちゃんとサイト構築までできた。
* 四時間連続稼働で最初はまあまあ順調だったが、後半は活動ログ頻度異常が結構起こってしまった。([ログ](./logs/heartbeat_20250716234146.log))
  * ただ基本的にちゃんと回復している。
  * 最後のはクォータ制限によるもの
* プロジェクトのgit管理をまあまあやってくれていた。
* artifacts配下のディレクトリやファイルにタイムスタンプ付与するようにしたので時系列で追いやすくなった。

## 考察・感想

* git status確認だけで1ハートビート消費してたりして勿体無い気がしたが、理念的にしょうがない気もした。
* 結構内省不足警告を受けて反省しているが、結局その後一向に改善してない感じで、内省不足警告に対しての内省しか行わない感じになっていて微妙な気がした。
* 情報栄養学紹介サイトの内容自体は、こんな感じかーぐらいの感想。おそらくもっと時間があればもっと見た目のクオリティとかは上げられる気はする。
