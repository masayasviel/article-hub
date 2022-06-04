# 閉じた記事公開サイト？

## Usage

- docker-compose up

```sh
make up
```

- docker-compose down

```sh
make down
```

- remove all image

```sh
make rm-all-img
```

- remove all volume

```sh
make rm-all-vol
```

- migrate prisma

```sh
npx prisma migrate dev --name init
```

## Note

脆弱性マシマシなので注意！！！

- DBアクセスにサイキョーアカウント使ってたり
