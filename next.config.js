/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['three', '@react-three/fiber', '@react-three/drei'],
  // تكوين أساسي
  reactStrictMode: true,
  swcMinify: true,
  
  // تكوين الصور
  images: {
    domains: ['localhost'],
    minimumCacheTTL: 60,
  },

  // تكوين الإخراج
  output: 'standalone',
  
  // تعطيل التتبع
  // tracing: {
  //   ignoreRootSpans: true
  // },
  
  // تكوين webpack
  webpack: (config) => {
    return {
      ...config,
      infrastructureLogging: {
        level: 'error',
      },
    };
  },
};

module.exports = nextConfig;