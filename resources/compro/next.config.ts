
const {  PHASE_DEVELOPMENT_SERVER }  = require('next/dist/shared/lib/constants');

const nextConfig = (phase) => {
  const dev = PHASE_DEVELOPMENT_SERVER
  console.log('dev', dev);
    console.log('phase', phase);

  return ({
    output: 'export',
    reactStrictMode: false,
    distDir: 'dist',
    assetPrefix: dev === phase ?  ''  :'/compro',
    eslint: {
      ignoreDuringBuilds: true,
    },
     typescript: {
    ignoreBuildErrors: true,
  },
    images: {
      unoptimized: true,
    },
  })
}



module.exports = nextConfig;
