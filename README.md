# ADSN 24 Static Webpage

[https://curtinids.github.io/ADSN-2024/](https://curtinids.github.io/ADSN-2024/)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Useful "quick start" learning materials:

- [React Foundations](https://nextjs.org/learn/react-foundations)
- [Next.js](https://nextjs.org/learn/dashboard-app)

## Table of contents

- [ADSN 24 Static Webpage](#adsn-24-static-webpage)
  - [Table of contents](#table-of-contents)
  - [Getting Started](#getting-started)
  - [Setup Google Maps API keys](#setup-google-maps-api-keys)
    - [Development environment](#development-environment)
    - [Production environment](#production-environment)
  - [Deploy to GitHub pages](#deploy-to-github-pages)
    - [Support images on GitHub pages with a static Next.js project](#support-images-on-github-pages-with-a-static-nextjs-project)

## Getting Started

Install `Node` locally, the version used in the project is `20` (or latest LTS). Using [nvm](<(https://github.com/nvm-sh/nvm?tab=readme-ov-file#usage)>) to manage different versions of Node is recommended:

```bash
# Install NVM
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

# Install Node v20 (latest LTS)
nvm install --lts

# Use Node v20 (latest LTS)
nvm use --lts
```

Next.js devs [recommend](https://nextjs.org/learn/dashboard-app/getting-started#creating-a-new-project) to use `pnpm` as package manager:

```bash
npm install -g pnpm
```

[NextUI](https://nextui.org/docs/guide/introduction) is used for UI components. This [extra step](https://nextui.org/docs/guide/installation#hoisted-dependencies-setup-1) is required for `pnpm`:

```bash
# Example location of `.pnpmrc` if using `nvm`. For Linux:
sudo gedit ~/.nvm/.npmrc

# or for Mac:
nano ~/.nvm/.npmrc

# Add this line and save
public-hoist-pattern[]=*@nextui-org/*
```

Install the project dependencies:

```bash
pnpm install
```

Run the development server:

```bash
pnpm run dev
```

Open [http://localhost:3000/ADSN-2024](http://localhost:3000/ADSN-2024) with your browser to see the result.
Note: Google API keys needs to be set in order to make the embedded maps works. See [this](#setup-google-maps-api-keys) paragraph.

## Setup Google Maps API keys

This repo uses [Maps Embed API](https://developers.google.com/maps/documentation/embed/quickstart) for showing the locations maps. They are free and with unlimited usage but they require an API key created.

### Development environment

This step is needed for showing Google Maps in the local development environment.

Create a file a name `.env` at the top directory level of the repository. You can use `.env.example` as template or paste this:

```
GOOGLE_MAPS_API_KEY="<your-google-embed-maps-api-key>"
```

Get a Google Maps API key follow the instructions [here](https://developers.google.com/maps/documentation/embed/quickstart#api-key).

Optionally, you can restrict them to only `Maps Embed API`.

### Production environment

Dr. Paul Hancock created the API keys for the production environment and are stored as `GOOGLE_MAPS_API_KEYS` in the repository's [secrets](https://github.com/CurtinIDS/ADSN-2024/settings/secrets/actions).

These keys have these security features enabled:

- restricted for `Maps Embedded API`
- restricted for `https://curtinids.github.io/ADSN-2024/` domain

## Deploy to GitHub pages

The project needs to be compiled as a static webpage for working on GitHub Pages. It can be done locally, the results will be created inside `out` directory, which then needs to be uploaded to GitHub pages:

```bash
pnpm next build
```

These steps are actually done automatically with `GitHub Actions`: every time a commit or pull request is merged, the new code is deployed to the GitHub Page.
For details see the implementation of the deploy GitHub action: [nextjs.yml](/.github/workflows/nextjs.yml)

### Support images on GitHub pages with a static Next.js project

The following adaptations are needed in order to make images work on GitHub Pages:

- `basePath` needs to be added in [next.config.mjs](next.config.mjs)
- add `unoptimized` argument to all `Images` in [next.config.mjs](next.config.mjs)
- every `Image` in the code should have `basePath` prefixed in their `src` value. (Example: `<Image src="/ADSN-2024/image.svg" />`)

As a result of this, when developing locally the home page will need `basePath` prefixed: [http://localhost:3000/ADSN-2024](http://localhost:3000/ADSN-2024)
