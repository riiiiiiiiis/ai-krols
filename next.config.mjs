/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/webp'],
    deviceSizes: [640, 1200, 1920],
    imageSizes: [50, 150, 500],
    dangerouslyAllowSVG: false,
    unoptimized: false
  }
};

export default nextConfig;
