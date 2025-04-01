
/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
      unoptimized: true, // Disable Next.js Image Optimization for static export
    },
  };

export default nextConfig;
