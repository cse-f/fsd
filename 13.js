// Import the events module
const EventEmitter = require('events');

// Create an instance of EventEmitter
const myEmitter = new EventEmitter();

// Register an event listener
myEmitter.on('greet', () => {
  console.log('Hello! Event has been triggered.');
});

// Trigger (emit) the event
myEmitter.emit('greet');
