up:
	docker-compose up -d

down:
	docker-compose down

rm-all-img:
	docker images -q | xargs docker rmi

rm-all-vol:
	docker volume ls -qf dangling=true | xargs docker volume rm

migrate:
	npx prisma migrate dev --name init
	npx prisma generate
