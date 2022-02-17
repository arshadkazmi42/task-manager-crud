//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');

const TaskListsTask = require('../models/task-list-task');
const server = require('../index');


chai.should();
chai.use(chaiHttp);


sinon.stub(TaskListsTask.prototype, 'getAsync').callsFake(() => {
  return require('./data/task-lists-tasks.json');
});

sinon.stub(TaskListsTask.prototype, 'createAsync').callsFake(() => {
  return {};
});

sinon.stub(TaskListsTask.prototype, 'deleteAsync').callsFake(() => {
  return {};
});


describe('TaskListsTasks', () => {
  it('should get all the tasks of the list', (done) => {
    chai.request(server)
      .get('/api/task/list/task?task_list_id=1')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.data.should.be.an('array');
        res.body.data.length.should.be.eql(1);
        done();
      });
  });
  it('should add the task to the list', (done) => {
    chai.request(server)
      .post('/api/task/list/task')
      .send({task_list_id: 1, task_id: 2})
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.success.should.be.true;
        done();
      });
  });
  it('should remove the task from the list', (done) => {
    chai.request(server)
      .delete('/api/task/list/task?task_list_id=1&task_id=1')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.success.should.be.true;
        done();
      });
  });
});