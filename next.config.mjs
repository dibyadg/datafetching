/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
      domains: ['images.dog.ceo'], 
      // Configure remote patterns
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.dog.ceo',
          port: '', 
          pathname: '/breeds/rottweiler/**', 
        },
      ],
    },
  };
 

export default nextConfig;
