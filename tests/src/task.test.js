const TaskProcessor = require('../../src/task-processor');
const Task = require('../../src/task');
const sinon = require('sinon');


describe('TaskProcessor: addTask', () => {
  const task = new TaskProcessor();

  let eventStub = sinon.stub(task, 'emit');

  test('.emit is called once and the correct tasks size is returned', () => {
    task.addTask(new Task(123, () => {
      console.log('LAINO');
    }));
    sinon.assert.calledOnce(eventStub);
    expect(task.getTaskSize()).toBe(1);

    // process the task
    task.processTask();
    expect(task.getTaskSize()).toBe(0);
    eventStub.restore();
  });
});
