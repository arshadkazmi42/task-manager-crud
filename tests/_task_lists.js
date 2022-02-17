//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');

const TaskList = require('../models/task-list');
const server = require('../index');


chai.should();
chai.use(chaiHttp);


sinon.stub(TaskList.prototype, 'getAsync').callsFake(() => {
  return require('./data/task-lists.json');
});

sinon.stub(TaskList.prototype, 'updateAsync').callsFake(() => {
  return {};
});

sinon.stub(TaskList.prototype, 'createAsync').callsFake(() => {
  return {};
});

sinon.stub(TaskList.prototype, 'deleteAsync').callsFake(() => {
  return {};
});


describe('TaskLists', () => {
  it('should get all the task lists', (done) => {
    chai.request(server)
      .get('/api/task/list')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.data.should.be.an('array');
        res.body.data.length.should.be.eql(2);
        done();
      });
  });
  it('should update the task list', (done) => {
    chai.request(server)
      .put('/api/task/list')
      .send({id: 1, name: 'task'})
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.success.should.be.true;
        done();
      });
  });
  it('should create the task list', (done) => {
    chai.request(server)
      .post('/api/task/list')
      .send({name: 'task'})
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.success.should.be.true;
        done();
      });
  });
  it('should delete the task list', (done) => {
    chai.request(server)
      .delete('/api/task/list?id=1')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.success.should.be.true;
        done();
      });
  });
});