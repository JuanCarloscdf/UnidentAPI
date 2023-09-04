export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  nodenv: process.env.NODE_ENV,

  jwt_secret: process.env.JWT_SECRET,
  jwt_expires: parseInt(process.env.JWT_EXPIRES),
});
