module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "127.0.0.1"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "nuxtjs-strapi-jobapp"),
      user: env("DATABASE_USERNAME", "postgres"),
      password: env("DATABASE_PASSWORD", "example"),
      ssl: env.bool("DATABASE_SSL", false),
    },
    pool: {
      min: 0,
      max: 20,
    },
    options: {
      charset: "utf8mb4_unicode_ci",
    },
  },
});
