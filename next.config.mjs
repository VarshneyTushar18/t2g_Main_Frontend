/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "www.tech2globe.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/store-creation",
        destination: "/amazon-store-setup-service",
        permanent: true,
      },
      {
        source: "/amazon-product-catalog",
        destination: "/amazon-catalog-management-services",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
