var counter = function(arr) {
  return 'This array has ' + arr.length + ' elements.';
};

var adder = function(a, b) {
  return `the sum of a and b is ${a + b}`;
};

var pi = 3.142
module.exports = {
  counter: counter,
  adder: adder,
  pi: pi
};
