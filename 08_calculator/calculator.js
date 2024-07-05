const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(item) {
	return item.reduce((a, b) => a + b, 0);
};

const multiply = function(item) {
  return item.reduce((a, b) => a * b);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(n) {
	if (n === 0) return 1;
  let result = Array.from({ length: n }, (v, i) => i + 1);
  return result.reduce((a, b) => a * b);
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};