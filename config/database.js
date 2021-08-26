module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', '127.0.0.1'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'h1sys_strapi'),
        username: env('DATABASE_USERNAME', 'h1sys'),
        password: env('DATABASE_PASSWORD', 'tr-server'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
