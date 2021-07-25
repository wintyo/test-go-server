# goサーバー

## 起動方法
```
$ docker compose up -d
```

goアプリについてはコンテナに直接入って操作する。

```
$ docker compose exec app /bin/bash

# goサーバーの起動
/go/src/work# go run main.go

# swaggerの自動生成
/go/src/work# swag init
```
