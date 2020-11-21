# Project Name

> Project description

## Related Projects

- https://github.com/teamTarly/aquabnb-booking
- https://github.com/teamTarly/Aquabnb-photos
- https://github.com/teamTarly/aquabnb-more-places-to-stay

## Table of Contents

1. [Requirements](#requirements)
1. [Development](#development)

## Requirements

This project relies on a MongoDB database and Node.js.

## Development

### Installing Dependencies

From within the root directory:
Creates files `dev.env` and `test.env` under `/config`. An example is provided.
Fill in the env variable `MONGODB_URL` in each, making sure to supply an appropriate MongoDB uri.

```sh
npm install

sudo service mongodb start

npm run dev:server
npm run dev:client
```
