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
};

export default nextConfig;
