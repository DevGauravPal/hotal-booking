/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        API_URL: "http://localhost:3001",
        DB_LOCAL_URL: "mongodb://localhost:27017/hotal-booking",
        DB_URL: ""
    },
    images: {
        domains: ["res.cloudinary.com"],
    }
};

export default nextConfig;
