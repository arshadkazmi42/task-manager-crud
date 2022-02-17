//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');

const Task = require('../models/task');
const server = require('../index');


chai.should();
chai.use(chaiHttp);


sinon.stub(Task.prototype, 'getAsync').callsFake(() => {
  return require('./data/tasks.json');
});

sinon.stub(Task.prototype, 'updateAsync').callsFake(() => {
  return {};
});

sinon.stub(Task.prototype, 'createAsync').callsFake(() => {
  return {};
});

sinon.stub(Task.prototype, 'deleteAsync').callsFake(() => {
  return {};
});


describe('Tasks', () => {
  it('should get all the tasks', (done) => {
    chai.request(server)
      .get('/api/task')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.data.should.be.an('array');
        res.body.data.length.should.be.eql(4);
        done();
      });
  });
  it('should update the task', (done) => {
    chai.request(server)
      .put('/api/task')
      .send({id: 1, name: 'task'})
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.success.should.be.true;
        done();
      });
  });
  it('should create the task', (done) => {
    chai.request(server)
      .post('/api/task')
      .send({name: 'task'})
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.success.should.be.true;
        done();
      });
  });
  it('should delete the task', (done) => {
    chai.request(server)
      .delete('/api/task?id=1')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.success.should.be.true;
        done();
      });
  });
});