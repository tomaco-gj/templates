## Installation

```bash
$ npm install
```

## Running the server with Nest

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Running the server like an AWS lambda

```bash
$ npx serverless offline
```

## Test the API

Hit http://localhost:3000 with a GET operation if you're running the server with Nest.

If you're running the server like an AWS lambda, hit http://localhost:3000/dev// with also a GET operation (double slash is required by this time).
