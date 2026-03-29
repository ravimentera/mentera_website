/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        // Stub out mermaid — pulled transitively by @thesysai/genui-sdk but never used.
        // Saves ~4.6 MB of unused JavaScript from the client bundle.
        config.resolve.alias = {
            ...config.resolve.alias,
            mermaid: false,
        };
        return config;
    },
    async rewrites () {
        return [
            {
                source: '/api/chat/stream',
                destination: 'http://34.204.48.222:3010/api/chat/stream',
            },
        ];
    },
    env: {
        THESYS_API_KEY: process.env.THESYS_API_KEY,
    },
    images: {
        formats: ['image/avif', 'image/webp'],
        minimumCacheTTL: 31536000,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.ctfassets.net',
            },
        ],
    },
};

export default nextConfig;
