/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites () {
        return [
            {
                source: '/api/chat/stream',
                destination: 'http://34.204.48.222:3010/api/chat/stream',
            },
        ];
    },
    async redirects () {
        return [
            {
                source: '/:path*',
                has: [
                    {
                        type: 'host',
                        value: 'www.mentera.ai',
                    },
                ],
                destination: 'https://mentera.ai/:path*',
                permanent: true,
            },
        ];
    },
    env: {
        THESYS_API_KEY: process.env.THESYS_API_KEY,
    },
};

export default nextConfig;
