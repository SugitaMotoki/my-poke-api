# my-poke-api

GitHubからクローンすることもできます。  
https://github.com/SugitaMotoki/my-poke-api

## 動作確認に必要な環境

- Node.js
- npm
- docker

## 動作確認手順

### サーバ起動まで

```shell
$ docker compose up # DB起動
$ cd rest-graphql
$ npm install
$ npm run build
$ npm start
```

### サーバ起動後

- ブラウザで http://localhost:3000 にアクセス
- 「サンプルデータ追加」ボタンを押す
- 画面右上の「REST」・「GRAPHQL」ボタンを押す
- CRUD処理を行う
