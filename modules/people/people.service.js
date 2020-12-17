const Queue = require('../queue/Queue');
const store = require('../../store');

// Set up initial data.
// --------------------

const people = new Queue();
store.people.forEach(person => people.enqueue(person));

// --------------------

module.exports = {
  get() {
    // Return all people in the queue.
    return people.all();
  },

  enqueue(name) {
    // Add a person to the queue.
    return people.enqueue(name);
  },

  dequeue(person) {
    // Remove a person from the queue.
    return people.dequeue(person);
  },
};
