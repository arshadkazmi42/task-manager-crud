const _ = require('lodash');

const { TaskListTask } = require('../models');

const Utility = new require('../lib/util');


const Util = new Utility();

const PARAMS = {
  GET: ['task_list_id'],
  CREATE: ['task_list_id', 'task_id'],
  DELETE: ['task_list_id', 'task_id']
};


const externals = {};


externals.getAsync = async (req, res) => {


  const data = req.query;

  Util.validateParams(data, PARAMS.GET);

  const taskListId = _.get(data, ['task_list_id']);

  const taskListTask = new TaskListTask(taskListId);
  const taskListTasks = await taskListTask.getAsync();

  return res.send({
    success: true,
    data: taskListTasks
  });
};


externals.createAsync = async (req, res) => {

  const data = req.body;

  Util.validateParams(data, PARAMS.CREATE);

  const taskListId = _.get(data, ['task_list_id']);
  const taskId = _.get(data, ['task_id']);

  const taskListTask = new TaskListTask(taskListId, taskId);

  await taskListTask.createAsync();

  return res.send({
    success: true
  });
};


externals.deleteAsync = async (req, res) => {

  const data = req.query;

  Util.validateParams(data, PARAMS.DELETE);

  const taskListId = _.get(data, ['task_list_id']);
  const taskId = _.get(data, ['task_id']);

  const taskListTask = new TaskListTask(taskListId, taskId);

  await taskListTask.deleteAsync();

  return res.send({
    success: true
  });
};



module.exports = externals;
