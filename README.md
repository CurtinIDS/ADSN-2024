# ASDN 24 Static Webpage

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Table of contents
- [ASDN 24 Static Webpage](#asdn-24-static-webpage)
  - [Table of contents](#table-of-contents)
  - [Getting Started](#getting-started)
  - [Learn More](#learn-more)
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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on GitHub pages

The project needs to be compile as a static webpage. The results will be created inside `out` directory:

```bash
pnpm next build
```

This can be done automatically by running the GitHub action, which will also upload the results to the GitHub Page: [nextjs.yml](/.github/workflows/nextjs.yml)