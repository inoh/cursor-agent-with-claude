# NestJS + Fastify タスク管理API

NestJS フレームワークと Fastify HTTP アダプターを使用した、シンプルなタスク管理RESTful APIアプリケーションです。

## 機能

- タスクの作成 (POST /api/tasks)
- 全タスクの取得 (GET /api/tasks)
- 特定のタスクの取得 (GET /api/tasks/:id)
- タスクの更新 (PUT /api/tasks/:id)
- タスクの削除 (DELETE /api/tasks/:id)

## 使用技術

- フレームワーク: NestJS
- HTTPアダプター: Fastify (@nestjs/platform-fastify)
- 言語: TypeScript
- バリデーション: class-validator & class-transformer
- 設定管理: @nestjs/config
- APIドキュメント: @nestjs/swagger (OpenAPI)

## インストール

```bash
# 依存関係のインストール
$ npm install
```

## 実行方法

```bash
# 開発モード
$ npm run start:dev

# プロダクションビルド
$ npm run build
$ npm run start:prod
```

## APIドキュメント

アプリケーション起動後、ブラウザで以下のURLにアクセスすると、Swagger UIでAPIドキュメントを閲覧できます：

```
http://localhost:3000/docs
```

## 注意点

このアプリケーションはデモンストレーション目的で作成されています。実際の本番環境では以下の点を考慮してください：

- データベース接続: 実際のアプリケーションではPrismaやTypeORMなどのORMを使用してデータベースに接続する必要があります
- 認証・認可: 必要に応じてJWTなどを使用したユーザー認証を実装してください
- エラーハンドリング: より詳細なエラーハンドリングの実装
- ロギング: 適切なロギング機能の実装
- テスト: 単体テスト・統合テスト・E2Eテストの実装

## ライセンス

このプロジェクトは[MITライセンス](LICENSE)の下で公開されています。 