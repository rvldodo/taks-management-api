# Task Management API

### Routes

1. GET /api/tasks -> Get all tasks
2. GET /api/tasks/:id -> Get task by id
3. POST /api/tasks -> Create task
4. PATCH /api/tasks/:id -> Update task by id
5. DELETE /api/tasks/:id -> Delete task by id

## Swagger-UI

Open swagger-ui with route /api-docs

## Postgresql

install postgres
`npm i pg pg-hstore`

## Sequelize

install sequelize and sequelize-cli
`npm i sequelize sequelize-cli`

initialize sequelize config
`npx sequelize-cli init`

create db
`npx sequelize-cli db:create`

migrate db
`npx sequelize-cli db:migrate`

seed db
`npx sequelize-cli db:seed:all`
