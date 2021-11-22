export default () => ({
  environment: process.env.NODE_ENV || 'development',
  database: {
    host: process.env.MONGODB_URL,
    port: parseInt(process.env.API_PORT, 10) || 3333,
  },
});
