const _ = require('lodash');

const { TaskList } = require('../models');

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

  const tastListId = _.get(data, ['id']);

  const taskList = new TaskList(tastListId);
  const taksLists = await taskList.getAsync();

  return res.send({
    success: true,
    data: taksLists
  });
};


externals.createAsync = async (req, res) => {

  const data = req.body;

  Util.validateParams(data, PARAMS.CREATE);

  const name = _.get(data, ['name']);

  const taskList = new TaskList();
  taskList.setName(name);

  await taskList.createAsync();

  return res.send({
    success: true
  });
};


externals.updateAsync = async (req, res) => {

  const data = req.body;

  Util.validateParams(data, PARAMS.UPDATE);

  const id = _.get(data, ['id']);
  const name = _.get(data, ['name']);

  const taskList = new TaskList(id, name);

  await taskList.updateAsync();

  return res.send({
    success: true
  });
};


externals.deleteAsync = async (req, res) => {

  const data = req.query;

  Util.validateParams(data, PARAMS.DELETE);

  const id = _.get(data, ['id']);

  const taskList = new TaskList(id);

  await taskList.deleteAsync();

  return res.send({
    success: true
  });
};



module.exports = externals;