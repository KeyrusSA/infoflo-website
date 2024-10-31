require('dotenv').config();

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    SWA_CLI_DEPLOYMENT_TOKEN: process.env.SWA_CLI_DEPLOYMENT_TOKEN,
  },
};

module.exports = nextConfig;