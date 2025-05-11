# Redmine Frontend

Webアプリケーション学習のために、RedmineのフロントエンドWebアプリを作成する。

## Features

* フロントエンドとしてVue.jsベースのSPAを開発する。
* バックエンドとしてRedmineサーバを使用する。
* バックエンドプロキシとしてViteのプロキシサーバを使用する。
* フロントエンドからRedmine Rest API経由でRedmineを操作できるアプリケーションを目指す。

## Servers

フロントエンドサーバとバックエンドサーバは別体とする。
よって、CORS関連のエラーが生じないように、バックエンドにはバックエンドプロキシを経由してアクセスする。

| Server | URL |
| --- | --- |
| Frontend | http://localhost:3000 |
| Backend | http://localhost:8080 |
| Backend Proxy | http://localhost:3000/api/ |


## Dependency

* vue（フロントエンドフレームワーク）
* vue-router（ルーティング）
* vuetify（UIコンポーネント・UIデザイン）
* pinia（状態管理ツール）
* vite（ビルドツール）
* eslint（リンター）
* etc.

## Usage

This section covers how to start the development server.

### Starting the Frontend Server

To start the frontend server with hot-reload, run the following command. 

```bash
yarn dev
```

## Starting the Backend Server

To start the backend server, run the
following command. 

```bash
sudo docker-compose up
```