const _ = require('lodash');

const { Task } = require('../models');

const Utility = require('../lib/util');


const Util = new Utility();

const PARAMS = {
  GET: [],
  CREATE: ['name'],
  UPDATE: ['id', 'name'],
  DELETE: ['id']
};

const externals = {};


externals.getAsync = async (req, res) => {

  const data = req.query;

  Util.validateParams(data, PARAMS.GET);
  
  const taskId = _.get(data, ['id']);

  const task = new Task(taskId);
  const tasks = await task.getAsync();

  return res.send({
    success: true,
    data: tasks
  });
};


externals.createAsync = async (req, res) => {

  const data = req.body;

  Util.validateParams(data, PARAMS.CREATE);

  const name = _.get(data, ['name']);
  const description = _.get(data, ['description']);

  const task = new Task();

  task.setName(name);
  task.setDescription(description);

  await task.createAsync();

  return res.send({
    success: true
  });
};


externals.updateAsync = async (req, res) => {

  const data = req.body;

  Util.validateParams(data, PARAMS.UPDATE);

  const id = _.get(data, ['id']);
  const name = _.get(data, ['name']);
  const description = _.get(data, ['description']);

  const task = new Task(id, name, description);

  await task.updateAsync();

  return res.send({
    success: true
  });
};


externals.deleteAsync = async (req, res) => {

  const data = req.query;

  Util.validateParams(data, PARAMS.DELETE);

  const id = _.get(data, ['id']);

  const task = new Task(id);

  await task.deletAsync();

  return res.send({
    success: true
  });
};



module.exports = externals;
