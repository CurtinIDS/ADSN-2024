# ASDN 24 Static Webpage

[https://dario-limongi-cids.github.io/asdn24-web/](https://dario-limongi-cids.github.io/asdn24-web/)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Table of contents
- [ASDN 24 Static Webpage](#asdn-24-static-webpage)
  - [Table of contents](#table-of-contents)
  - [Getting Started](#getting-started)
  - [Deploy on GitHub pages](#deploy-on-github-pages)


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

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploy on GitHub pages

The project needs to be compiled as a static webpage for working on GitHub Pages. The results will be created inside `out` directory:

```bash
pnpm next build
```

This can be done automatically by running the GitHub action, which will also upload the results to the GitHub Page: [nextjs.yml](/.github/workflows/nextjs.yml)
