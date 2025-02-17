/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['three', '@react-three/fiber', '@react-three/drei'],
  // تكوين أساسي
  reactStrictMode: true,
  swcMinify: true,
  
  // تكوين الصور
  images: {
    unoptimized: true,
    domains: ['localhost'],
  },

  // تعطيل التحسينات
  experimental: {
    optimizeCss: false,
    optimizePackageImports: [],
  },
  
  // تكوين webpack الأساسي
  webpack: (config) => {
    config.infrastructureLogging = {
      level: 'none',
    };
    // تعطيل التتبع
    if (config.optimization) {
      config.optimization.moduleIds = 'named';
    }
    return config;
  },

  // تعطيل التتبع التلقائي
  generateBuildId: () => 'build',
};

module.exports = nextConfig;