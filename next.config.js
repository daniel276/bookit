/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  env: {
    DB_LOCAL_URI: 'mongodb+srv://user-daniel:bookitapp@cluster0.1fpdd.mongodb.net/?retryWrites=true&w=majority'
  }
}
