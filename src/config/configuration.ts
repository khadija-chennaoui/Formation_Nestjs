export default () => ({
  port: process.env.DB_PORT,
  type: process.env.DB_TYPE,
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  username: process.env.DB_USERNAME,
  database: process.env.DB_DATABASE,
  entities: process.env.DB_ENTITIES,
  synchronize:process.env.DB_SYNCHRONIZE,
  logging:process.env.DB_LOGGING,
});
