# Wedding Synrgy
Boilerplate by alvin

## Requirements

- Node >= 12.0.0
- Yarn
- PostgreSQL

## Installation
1. Configure your .env or simply rename .env.example to .env
2. Install the dependencies and devDependencies

```sh
yarn install
```
3. Setup database

```sh
npx sequelize db:create
npx sequelize db:migrate
npx sequelize db:seed:all
```
4. Run the server

```sh
yarn run dev
```
## Default Account

| Email | Password |
| ------ | ------ |
| client@gmail.com | 123456 |

## License

MIT
