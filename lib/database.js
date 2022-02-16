const MySQL = require('mysql');

const DatabaseConfig = require('./database-config');


class Database {

  constructor(config) {

    this.dbConfig = new DatabaseConfig(config);
    this.db = this.connect();
  }


  connect() {

    const connection = MySQL.createConnection(this.dbConfig.formatConnectionConfig());
    connection.connect();

    return connection;
  }


  queryAsync(query, values = []) {

    return new Promise((resolve, reject) => {
      this.db.query(query, values, (err, results) => {

        if (err) {
          return reject(err);
        }

        return resolve(results);
      });
    });
  }

}


module.exports = Database;
