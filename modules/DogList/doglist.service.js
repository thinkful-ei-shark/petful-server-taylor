const Queue = require('../queue/Queue');
const store = require('../../store');

const dogList = new Queue();
store.dogList.forEach(person => dogList.enqueue(person));

module.exports = {
  get() {
    return dogList.all();
  },

  enqueue(name) {
    return dogList.enqueue(name);
  },

  dequeue(person) {
    return dogList.dequeue(person);
  },
};