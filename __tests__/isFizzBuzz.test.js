const {isFizzBuzz, isInteger} = require('../isFizzBuzz');

describe('The isFizzBuzz microservice', () => {
  it('should determine the fizzbuzzbility of a number', () => {
    const fizz = isFizzBuzz(3);
    expect(fizz).toEqual('Fizz');
    
    const buzz = isFizzBuzz(5);
    expect(buzz).toEqual('Buzz');
    
    const fizzBuzz = isFizzBuzz(15);
    expect(fizzBuzz).toEqual('FizzBuzz');
    
    const neither = isFizzBuzz(16);
    expect(neither).toEqual('Neither!');
  });
  
  it('should determine if a given string only contains integers', () => {
    let result1 = isInteger('1');
    expect(result1).toEqual(true);
    
    let result = isInteger('result');
    expect(result).toEqual(false);
    
    let result_n1 = isInteger('-1');
    expect(result_n1).toEqual(true);
  });
});