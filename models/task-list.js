const Config = require('../config/core');


const Database = require('../lib/database');

const TABLE_NAME = 'task_lists';


class TaskList {

  constructor(id, name, createdAt, updatedAt) {

    this.id = id;
    this.name = name;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;

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


  toJSON() {

    return {
      id: this.id,
      name: this.name,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    };
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

    const query = `INSERT INTO ${TABLE_NAME} (name) VALUES (?)`;
    const values = [this.name];

    return await this.database.queryAsync(query, values);
  }


  async updateAsync() {

    const query = `UPDATE ${TABLE_NAME} SET name = ? WHERE id = ?`;
    const values = [this.name, this.id];

    return await this.database.queryAsync(query, values);
  }


  async deleteAsync() {
    
    const query = `DELETE FROM ${TABLE_NAME} WHERE id = ?`; 
    const values = [this.id];

    return await this.database.queryAsync(query, values);
  }

}


module.exports = TaskList;
