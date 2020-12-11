const Queue = require('../queue/Queue');
const store = require('../../store');

// Set up initial data.
// --------------------

const pets = {
  cats: new Queue(),
  dogs: new Queue(),
};

store.cats.forEach(cat => pets.cats.enqueue(cat));
store.dogs.forEach(dog => pets.dogs.enqueue(dog));

// --------------------

module.exports = {
  get() {
    // Return the pets next in line to be adopted.
    let pets = {
      cat: pets.cat.show(),
      dog: pets.dogs.show(),
    };
    return pets;
  },

  dequeue(type) {
    // Remove a pet from the queue.
    if (type === 'cat') {
      return pets.cats.dequeue();
    }
    if (type === 'dog') {
      return pets.dogs.dequeue();
    }
  },
};
