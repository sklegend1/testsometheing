import createNextIntlPlugin from 'next-intl/plugin';

/** @type {import('next').NextConfig} */
const withNextIntl = createNextIntlPlugin();
const nextConfig = {
    experimental: {
      //   serverActions: {
            
			// allowedOrigins: ["https://qmwmfwdl-3000.uks1.devtunnels.ms/"]
      //   },
      },
};

export default withNextIntl(nextConfig);
