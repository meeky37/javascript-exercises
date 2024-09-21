const add = function(...Args) {
  let sum = 0;
  Args.forEach(value => sum += value);
  return sum;
};

const subtract = function(...Args) {
  if (Args.length === 0) return 0; 
  let result = Args[0];     

  Args.slice(1).forEach(value => {
    result -= value;        
  });

  return result;
};

const sum = function(array) {
  const sum = array.reduce((partialSum, a) => partialSum + a, 0);
  return sum;
};

const multiply = function(array) {
  const sum = array.reduce((partialSum, a) => partialSum * a, 1);  // turns out from solution 1 is the default arg for initialisation.
  return sum;
};

const power = function(number, power) {
  return number ** power;
};

const factorial = function(factorialOf) {
  let result = 1
  
  for(let i = factorialOf; i > 0;i--){
      result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
