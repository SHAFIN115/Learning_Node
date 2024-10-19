const EventEmitter = require('events');

// Create an EventEmitter instance
const eventEmitter = new EventEmitter();

// Define a listener for the 'greet' event
eventEmitter.on('greet', () => {
  console.log('Hello, World!');
});

// Emit the 'greet' event
eventEmitter.emit('greet');
