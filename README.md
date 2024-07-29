# ASDN 24 Static Webpage

[https://dario-limongi-cids.github.io/asdn24-web/](https://dario-limongi-cids.github.io/asdn24-web/)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Table of contents
- [ASDN 24 Static Webpage](#asdn-24-static-webpage)
  - [Table of contents](#table-of-contents)
  - [Getting Started](#getting-started)
  - [Deploy to GitHub pages](#deploy-to-github-pages)
    - [Support images on GitHub pages with a static Next.js project](#support-images-on-github-pages-with-a-static-nextjs-project)


## Getting Started

Install `Node` locally, the version used in the project is `20` (or latest LTS). Using `nvm` to manage different versions of Node is recommended: [how to](https://github.com/nvm-sh/nvm?tab=readme-ov-file#usage))
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

First, install the project dependencies:

```bash
pnpm install
```

Run the development server:

```bash
pnpm run dev
```

Open [http://localhost:3000/asdn24-web](http://localhost:3000/asdn24-web) with your browser to see the result.

## Deploy to GitHub pages

The project needs to be compiled as a static webpage for working on GitHub Pages. The results will be created inside `out` directory:

```bash
pnpm next build
```

This can be done automatically by running the GitHub action, which will also upload the results to the GitHub Page: [nextjs.yml](/.github/workflows/nextjs.yml)

### Support images on GitHub pages with a static Next.js project

The following adaptations are needed in order to make images work on GitHub Pages:
- `basePath` needs to be added in [next.config.mjs](next.config.mjs)
- add `unoptimized` argument to all `Images` in [next.config.mjs](next.config.mjs)
- every `Image` in the code should have `basePath` prefixed in their `src` value. (Example: `<Image src="/asdn24-web/next.svg" />)

As a result of this, when developing locally the home page will need `basePath` prefixed: [http://localhost:3000/asdn24-web](http://localhost:3000/asdn24-web)