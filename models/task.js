const Config = require('../config/core');


const Database = require('../lib/database');

const TABLE_NAME = 'tasks';


class Task {
  
  constructor(id, name, description) {
    this.id = id;
    this.name = name;
    this.description = description;

    this.database = new Database(Config);
  }


  setId(id) {

    this.id = id;
  }


  getId() {

    return this.id;
  }


  setName(name) {

    this.name = name;
  }


  getName() {

    return this.name;
  }


  setDescription(description) {

    this.description = description;
  }


  getDescription() {

    return this.description;
  }


  async getAsync() {

    let query = `SELECT * FROM ${TABLE_NAME}`;
    let values = [];
    
    if (this.id) {

      query = `SELECT * FROM ${TABLE_NAME} WHERE id = ?`;
      values = [this.id];
    }

    return await this.database.queryAsync(query, values);
  }


  async createAsync() {

    const query = `INSERT INTO ${TABLE_NAME} (name, description) VALUES (?, ?)`;
    const values = [this.name, this.description];

    return await this.database.queryAsync(query, values);
  }


  async updateAsync() {

    const query = `UPDATE ${TABLE_NAME} SET name = ?, description = ? WHERE id = ?`;
    const values = [this.name, this.description, this.id];

    return await this.database.queryAsync(query, values);
  }


  async deleteAsync() {
    
    const query = `DELETE FROM ${TABLE_NAME} WHERE id = ?`;
    const values = [this.id];

    return await this.database.queryAsync(query, values);
  }

}


module.exports = Task;
