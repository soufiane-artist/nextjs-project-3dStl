/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['three', '@react-three/fiber', '@react-three/drei'],
  webpack: (config) => {
    return config;
  },
  // تحسين الأداء
  poweredByHeader: false,
  reactStrictMode: true,
  compress: true,
  // تحسين البناء
  swcMinify: true,
  // تحسين التحميل
  optimizeFonts: true,
  // تحسين الصور
  images: {
    domains: ['localhost'],
    minimumCacheTTL: 60,
  },
  // تعطيل تتبع الأداء
  generateBuildId: () => 'build',
  experimental: {
    // نستخدم فقط الخيارات المدعومة
    disableOptimizedLoading: true,
    cpus: 1
  },
  // إضافة إعدادات التتبع
  distDir: 'build',
  output: 'standalone'
};

module.exports = nextConfig;