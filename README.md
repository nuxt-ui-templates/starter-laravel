# Laravel Starter Template

[![Nuxt UI Pro](https://img.shields.io/badge/Made%20with-Nuxt%20UI%20Pro-00DC82?logo=nuxt&labelColor=020420)](https://ui.nuxt.com/pro)

This Laravel starter is based on [laravel/vue-starter-kit](https://github.com/laravel/vue-starter-kit) and demonstrate
how to use [Nuxt UI Pro](https://ui.nuxt.com/pro) in a [Laravel](https://laravel.com/) application
using [Inertia.js](https://inertiajs.com/).

- [Documentation](https://ui.nuxt.com/getting-started/installation/pro/vue)

## Setup

Copy the example environment file to create your .env file:

```bash
cp .env.example .env
```

Install all composer deps:

```bash
docker run --rm \
    -u "$(id -u):$(id -g)" \
    -v "$(pwd):/var/www/html" \
    -w /var/www/html \
    laravelsail/php84-composer:latest \
    composer install --ignore-platform-reqs
```

> [!NOTE]
> After you installed the dependencies, you can use composer commands via `./vendor/bin/sail composer install` or
`sail composer install` if you have it aliased in your shell.

Start all containers

```bash
./vendor/bin/sail up -d
```

Install all npm deps:

```bash
./vendor/bin/sail pnpm install
```

Generate a new application key for your Laravel application:

```bash
./vendor/bin/sail artisan key:generate
```

Migrate the database:

```bash
./vendor/bin/sail artisan migrate # --seed if you want to seed the database
```

## Development

To start the development server, run:

```bash
./vendor/bin/sail up -d
```

```bash
./vendor/bin/sail pnpm dev
```

Open http://localhost in your browser.

To test your SSR build you need to run the following commands:

```bash
./vendor/bin/sail pnpm build:ssr
```

```bash
./vendor/bin/sail artisan inertia:start-ssr
```

Open http://localhost in your browser, you should see the SSR version of the app. (No HMR in this mode)

To enable client-side hydration, please refer to the [Inertia Docs](https://inertiajs.com/server-side-rendering#client-side-hydration)
