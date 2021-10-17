const config = {
  env: "development",
  port: 5000,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  mongoUrl:
    "mongodb+srv://admin:TFBH1PJnhhmSVIY0@cluster0.wilyr.mongodb.net/users?retryWrites=true&w=majority",
};

export default config;
