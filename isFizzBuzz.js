function isFizzBuzz(number) {
  number = parseInt(number);
  
  let output = '';
  if (number % 3 === 0) {
    output += 'Fizz';
  }
  if (number % 5 === 0) {
    output += 'Buzz';
  }
  
  if (output.length === 0) {
    return 'Neither!';
  }
  
  return output;
}

function isInteger(number) {
  let result = /^[-+]?\d+$/gm.test(number);
  
  return result;
  
}

module.exports.isFizzBuzz = isFizzBuzz;
module.exports.isInteger = isInteger;