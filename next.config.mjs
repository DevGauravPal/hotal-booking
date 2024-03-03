/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        DB_LOCAL_URL: "mongodb://localhost:27017/hotal-booking",
        DB_URL: ""
    }
};

export default nextConfig;
