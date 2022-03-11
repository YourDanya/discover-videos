module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'i.ytimg.com']
  },
  env: {
    YOUTUBE_API_KEY: process.env.YOUTUBE_API_KEY,
    MAGIC_PUBLISHABLE_API_KEY: process.env.MAGIC_PUBLISHABLE_API_KEY,
    DEVELOPMENT: process.env.DEVELOPMENT
  }
}
