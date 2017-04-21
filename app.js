var events = require('events');
var util   = require('util');

var Person = function(name) {
  this.name = name;
};

util.inherits(Person, events.EventEmitter);

var james = new Person('james');
var mary = new Person('mary');
var sam = new Person('sam');

var people = [james, mary, sam];

people.forEach(function(person){
  person.on('speak', function(msg) {
    console.log(person.name + ' said: ' + msg);
  });
});

james.emit('speak', 'What\'s up?!');
