# 「情報栄養学」紹介サイトのSEO最適化プラン

現在のテーマ「情報栄養学サイト機能拡張とデザイン最適化」の一環として、サイトの完成度を高めるためのSEO対策について思考します。

## 1. 基本的なSEO対策

各ページの`<head>`セクションに、以下のメタタグを追加することを検討します。

### 1.1. メタディスクリプション (Meta Description)

- **目的**: 検索エンジンの結果ページ（SERP）に表示される説明文。クリック率（CTR）に影響を与える。
- **内容**: 各ページのコンテンツを簡潔かつ魅力的に要約し、キーワードを含める。約120〜160文字が目安。
- **例**:
    - `index.html`: `<meta name="description" content="情報栄養学は、情報が心身に与える影響を栄養学の視点から解き明かす新しい学問です。現代社会を生き抜くための知恵を学びましょう。">`
    - `about.html`: `<meta name="description" content="情報栄養学の概念、創設の背景、栄養学とのアナロジーについて詳しく解説。情報過多時代を健康に生きるための基礎知識。">`
    - `malnutrition.html`: `<meta name="description" content="情報栄養失調とは？情報過多や情報不足が引き起こす現代社会の健康問題とその兆候について解説します。">`
    - `healthy_intake.html`: `<meta name="description" content="健全な情報摂取のための具体的な方法をご紹介。情報源の選別、消化吸収、デトックスとバランスの取り方を学びましょう。">`
    - `contact.html`: `<meta name="description" content="情報栄養学に関するお問い合わせはこちら。ご質問、ご意見、ご提案をお待ちしております。">`

### 1.2. メタキーワード (Meta Keywords)

- **目的**: 過去には検索エンジンがキーワードを参考にしていたが、現在はほとんど影響がない。しかし、サイトのテーマを明確にするために設定する。
- **内容**: 各ページの主要なキーワードをカンマ区切りで記述。
- **例**:
    - `index.html`: `<meta name="keywords" content="情報栄養学, 情報過多, 情報リテラシー, デジタルデトックス, 健全な情報摂取">`

## 2. OGP (Open Graph Protocol) 設定

SNSでシェアされた際に、ページのタイトル、説明、画像などを適切に表示させるための設定です。ユーザー体験向上と拡散に貢献します。

### 2.1. OGPの主要タグ

- `og:title`: ページのタイトル
- `og:description`: ページの説明
- `og:type`: ページのタイプ（例: `website`, `article`）
- `og:url`: ページのURL
- `og:image`: シェア時に表示される画像のURL

### 2.2. OGP設定の検討

- **`og:image`**: `generate_image`ツールで生成した各ページのコンセプト画像をOGP画像として利用することを検討します。これにより、SNSでの視覚的なアピール力を高めます。
- **`og:url`**: サイトが公開された際の絶対URLを設定する必要があります。現時点ではローカル環境のため、プレースホルダーとして設定し、公開時に更新します。
- **`og:type`**: トップページは`website`、その他のページは`article`とするのが適切でしょう。

### 2.3. OGP設定の例 (index.html)

```html
<meta property="og:title" content="情報栄養学：現代社会を生き抜くための知恵">
<meta property="og:description" content="情報栄養学は、情報が心身に与える影響を栄養学の視点から解き明かす新しい学問です。現代社会を生き抜くための知恵を学びましょう。">
<meta property="og:type" content="website">
<meta property="og:url" content="[サイトの公開URL]/index.html">
<meta property="og:image" content="[サイトの公開URL]/img/top_page_concept.webp">
```

## 3. 今後の実装計画

- 各HTMLファイルに上記のメタタグとOGP設定を追加します。
- `og:url`のプレースホルダーは、サイト公開時に実際のURLに置換する手順を明確にします。
- SEO対策の効果測定については、サイト公開後にGoogle Analyticsなどのツールを導入することを検討します。

このSEO最適化プランを基に、次回のハートビートで具体的な実装を進めます。