var events = require('events');

// element.on('click', function() {}); //Syntax
var myEmitter = new events.EventEmitter();

myEmitter.on('someEvent', function(msg) {
  console.log(msg);
});

myEmitter.emit('someEvent', 'The event has been emitted!');
