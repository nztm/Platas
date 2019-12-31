[![CircleCI](https://circleci.com/gh/nztm/Platas.svg?style=svg&circle-token=17b53c2197be443196a94ac69026d23941c42a4f)](https://circleci.com/gh/nztm/Platas)
[![GitHub Release](https://img.shields.io/github/v/release/nztm/Platas?style=flat-square)](https://github.com/nztm/Platas/releases)

# Platas（プラタス）- 場に毎日の変化を
![Platas](https://i.imgur.com/oebO4Gi.png)

日常の場にちょっとした変化をもたらすアプリケーションです。

通っている高校で実施するプロジェクトのために開発しました。

## 使用したアプリケーション

- Adobe IllustratorCC

    アプリケーションに使われているオブジェクト画像をデザインしました。

    アイソメトリックデザインを用いて、モダンなデザインに仕上げました。

- Adobe XD

    WebデザインをAdobe XDで行いました。

- Firebase

    データ保存にFirestore、ユーザー認証にAuthenticationを使用しています。
    
    Firestoreを使用することで、リアルタイムのデータ通信を実現しました。

- Nuxt.js

    コンポーネント管理、SSR（サーバーサイド・レンダリング）を行うために本プロジェクトはNuxt.jsを使用して作成しました。

## ビルドの方法
``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn run dev

# build for production and launch server
$ yarn run build
$ yarn start
```

### 環境変数
``` bash
# Firebase
FIREBASE_API = ''
FIREBASE_AUTH = ''
FIREBASE_DB = ''
FIREBASE_PROJECT_ID = ''
FIREBASE_STORAGE = ''
FIREBASE_MESSAGE_SENDER = ''
FIREBASE_APP_ID = ''
FIREBASE_MEASUREMENT_ID = ''

# Google Analytics
GOOGLE_ANALYTICS_ID = ''

# Sentry
SENTRY_DSN = ''

```

