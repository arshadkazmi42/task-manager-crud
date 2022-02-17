const Config = require('../config/core');


const Database = require('../lib/database');

const TABLE_NAME = 'task_lists_tasks';

const JOIN_TABLES = {
  TASK_LISTS: 'task_lists',
  TASKS: 'tasks'
};


class TaskListTask {
  
  constructor(taskListId, taskId) {
    this.taskListId = taskListId;
    this.taskId = taskId;

    this.database = new Database(Config);
  }


  setTaskListId(taskListId) {

    this.taskListId = taskListId;
  }


  getTaskListId() {

    return this.taskListId;
  }


  setTaskId(taskId) {

    this.taskId = taskId;
  }


  getTaskId() {

    return this.taskId;
  }


  async getAsync() {

    let query = `
      SELECT TL.id as task_list_id, TL.name as task_list_name, T.id as task_id, T.name as task_name, T.description as task_description
      FROM ${TABLE_NAME} AS TT
      LEFT JOIN ${JOIN_TABLES.TASK_LISTS} AS TL ON TL.id = TT.task_lists_id
      LEFT JOIN ${JOIN_TABLES.TASKS} AS T ON T.id = TT.tasks_id
      WHERE TL.id = ? 
      `;
    let values = [this.taskListId];

    return await this.database.queryAsync(query, values);
  }


  async createAsync() {

    const query = `INSERT INTO ${TABLE_NAME} (task_lists_id, tasks_id) VALUES (?, ?)`;
    const values = [this.taskListId, this.taskId];

    return await this.database.queryAsync(query, values);
  }


  async deleteAsync() {
    
    const query =`DELETE FROM ${TABLE_NAME} WHERE task_lists_id = ? AND tasks_id = ?`;
    const values = [this.taskListId, this.taskId];

    return await this.database.queryAsync(query, values);
  }

}


module.exports = TaskListTask;
