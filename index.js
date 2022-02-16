const express = require('express');
const bodyParser = require('body-parser');

const { TaskListsTasks, TaskLists, Tasks } = require('./controllers');
const Util = require('./lib/util');

const port = 8000;
const app = express();
const AppHandler = new Util();

app.use(bodyParser.json());


app.post('/api/task/list', async (req, res) => {

  return await AppHandler.callAsync(TaskLists.createAsync, req, res);
});


app.get('/api/task/list', async (req, res) => {
  
  return await AppHandler.callAsync(TaskLists.getAsync, req, res);
});


app.put('/api/task/list', async (req, res) => {

  return await AppHandler.callAsync(TaskLists.updateAsync, req, res);
});


app.delete('/api/task/list', async (req, res) => {

  return await AppHandler.callAsync(TaskLists.deleteAsync, req, res);
});


app.post('/api/task', async (req, res) => {

  return await AppHandler.callAsync(Tasks.createAsync, req, res);
});


app.get('/api/task', async (req, res) => {
  
  return await AppHandler.callAsync(Tasks.getAsync, req, res);
});


app.put('/api/task', async (req, res) => {

  return await AppHandler.callAsync(Tasks.updateAsync, req, res);
});


app.delete('/api/task', async (req, res) => {

  return await AppHandler.callAsync(Tasks.deleteAsync, req, res);
});


app.post('/api/task/list/task', async (req, res) => {

  return await AppHandler.callAsync(TaskListsTasks.createAsync, req, res);
});


app.get('/api/task/list/task', async (req, res) => {
  
  return await AppHandler.callAsync(TaskListsTasks.getAsync, req, res);
});


app.delete('/api/task/list/task', async (req, res) => {

  return await AppHandler.callAsync(TaskListsTasks.deleteAsync, req, res);
});


app.listen(port, function () {
  console.log('Server is running on ' + port + ' port');
});
