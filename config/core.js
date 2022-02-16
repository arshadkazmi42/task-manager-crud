const core = {
  database: {
    host: process.env.DATABASE_HOST || 'localhost',
    username: process.env.DATABASE_USERNAME || 'root',
    password: process.env.DATABASE_PASSWORD || 'root',
    name: process.env.DATABASE_NAME || 'dataminr'
  }
};


module.exports = core;
