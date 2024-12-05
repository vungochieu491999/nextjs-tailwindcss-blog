/** @type {import('next').NextConfig} */

const {withContentlayer} = require("next-contentlayer")

const nextConfig = {
    compiler:{
        removeConsole: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
};

module.exports = withContentlayer({ ...nextConfig });
