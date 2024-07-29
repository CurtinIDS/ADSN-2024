/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // enable static page exports, required for publishing a Next.js project to GitHub Pages
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
