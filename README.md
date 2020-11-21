# Project Name

> Project description

## Related Projects

- https://github.com/teamTarly/aquabnb-booking
- https://github.com/teamTarly/Aquabnb-photos
- https://github.com/teamTarly/aquabnb-more-places-to-stay

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

This project relies on a MongoDB database and Node.js.

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:
Creates files `dev.env` and `test.env` under `/config`.
Fill in the env variable `MONGODB_URL` in each, making sure to supply an appropriate MongoDB uri.

```sh
npm install

sudo service mongodb start

npm run dev:server
npm run dev:client
```
