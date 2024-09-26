/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    apiUrl: 'http://localhost:5200/api'
}
};

export default nextConfig;
