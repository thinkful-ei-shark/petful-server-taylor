const Queue = require('../queue/Queue');
const store = require('../../store');

const dogList = new Queue();
store.dogList.forEach(person => dogList.enqueue(person));

module.exports = {
  get() {
    console.log(dogList.all());
    return dogList.all();
  },

  getLengthOfQueue() {
    return dogList.all().length;
  },

  enqueue(name) {
    return dogList.enqueue(name);
  },

  dequeue(person) {
    return dogList.dequeue(person);
  },
};
