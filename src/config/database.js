module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'rocketshoes',
  define: {
    timestamp: true,
    underscored: true,
    underscoredAll: true,
  },
};
