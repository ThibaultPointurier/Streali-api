<h1 align="center">Streali</h1>
<h3 align="center">The best tool to make your stream prettier.</h3>

<p align="center">
  <a href="https://twitch.tv/willtraore" target="_blank"><img src="https://img.shields.io/twitch/status/willtraore?style=social" /></a>
  <a href="https://twitter.com/strealiapp" target="_blank"><img src="https://img.shields.io/twitter/follow/strealiapp?style=social" /></a>
  <a href=""><img src="https://img.shields.io/github/license/streali/app" /></a>
</p>

Streali provides you with tools to make your streaming experience easier. Whether to display alerts or highlight messages from your chat, personalize all your stream easily.

## Requirements

- [Node.js](https://nodejs.org/en/download/) >= 16.0.0
- [Docker compose](https://docs.docker.com/compose/install/)

## Stack

- [Adonis 5](https://adonisjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [Redis](https://redis.io/download) >= 5.0
- [Mercure](https://mercure.rocks/)

## Installation

[Create an App](https://dev.twitch.tv/console/apps)

OAuth redirect URL:

```bash
http://localhost:3333/oauth/twitch/callback
```

## Loading and configuration
```bash
> git clone https://github.com/Streali/API.git
> cd API
> npm install
> docker compose up -d # and create the database
> cp .env.example .env # and edit the value
> node ace migration:run
> node ace serve --watch
```

## Contributions

Streali is actually in the early stage so all contributions are welcome. You can directly contribute with a PR or take an issue. For better synchronization on the project, you can join [Discord](https://discord.gg/cpzzBrA) but it’s not mandatory.

