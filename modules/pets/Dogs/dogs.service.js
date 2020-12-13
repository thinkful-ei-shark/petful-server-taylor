const Queue = require('../../queue/Queue');
const store = require('../../../store');

const dogs = {
  dogs: new Queue(),
};

store.dogs.forEach(dog => dogs.dogs.enqueue(dog));

module.exports = {
  get() {
    let newDogs = {
      dog: dogs.dogs.show(),
    };
    return newDogs;
  },

  dequeue() {
    return dogs.dogs.dequeue();
  },
};
