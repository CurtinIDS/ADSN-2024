/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // enable static page exports, required for publishing a Next.js project to GitHub Pages
  basePath: "/asdn24-web",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
