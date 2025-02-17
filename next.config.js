/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['three', '@react-three/fiber', '@react-three/drei'],
  
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

  // تعطيل التتبع والتحسينات
  productionBrowserSourceMaps: false,
  generateEtags: false,
};

module.exports = nextConfig;