 /** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{hostname: "images.unsplash.com"},
    {hostname:"lh3.googleusercontent.com"},
{hostname:"static.nike.com"}]
    },
    experimental:{
        serverActions:true
    }
}

const withVideos = require('next-videos')

module.exports = withVideos(nextConfig)
