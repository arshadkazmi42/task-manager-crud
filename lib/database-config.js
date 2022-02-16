const _ = require('lodash');


class DatabaseConfig {
  
  constructor(config) {

    this.host = _.get(config, ['database', 'host']);
    this.username = _.get(config, ['database', 'username']);
    this.password = _.get(config, ['database', 'password']);
    this.databaseName = _.get(config, ['database', 'name']);
  }


  formatConnectionConfig() {

    return {
      host: this.host,
      user: this.username,
      password: this.password,
      database: this.databaseName
    };
  }
}


module.exports = DatabaseConfig;
