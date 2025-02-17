/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['three', '@react-three/fiber', '@react-three/drei'],
  
  // تكوين الإخراج لـ Vercel
  output: 'standalone',
  distDir: '.next',
  
  // تكوين webpack مع تعطيل التتبع
  webpack: (config, { isServer }) => {
    // إضافة canvas كـ external
    config.externals = [...(config.externals || []), { canvas: 'canvas' }];
    
    // تعطيل التتبع
    if (!isServer) {
      config.optimization = {
        ...config.optimization,
        splitChunks: false,
      };
    }
    
    // تعطيل source maps
    config.devtool = false;
    
    return config;
  },

  // تكوين إضافي لـ Vercel
  generateBuildId: () => 'build',
  poweredByHeader: false,
  generateEtags: false,
  
  // تكوين الصور
  images: {
    domains: ['localhost'],
    unoptimized: true,
  },
};

module.exports = nextConfig;