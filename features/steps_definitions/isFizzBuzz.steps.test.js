let { defineFeature, loadFeature } = require('jest-cucumber');
const {isFizzBuzz} = require('../../isFizzBuzz');

const feature = loadFeature('./features/isFizzBuzz.feature');

defineFeature(feature, test => {
  test('FizzBuzz of 3 to equal Fizz', ({ given, when, then }) => {
    let x;
    let z;
    
    given('3', () => {
      x = 3;
    });
    
    when('FizzBuzz', () => {
      z = isFizzBuzz(x);
    });
    
    then('The result is Fizz', () => {
      expect(z).toBe('Fizz');
    });
  });
  
  test('FizzBuzz of 5 to equal Buzz', ({ given, when, then }) => {
    let x;
    let z;
    
    given('5', () => {
      x = 5;
    });
    
    when('FizzBuzz', () => {
      z = isFizzBuzz(x);
    });
    
    then('The result is Buzz', () => {
      expect(z).toBe('Buzz');
    });
  });
  
  test('FizzBuzz of 15 to equal FizzBuzz', ({ given, when, then }) => {
    let x;
    let z;
    
    given('15', () => {
      x = 15;
    });
    
    when('FizzBuzz', () => {
      z = isFizzBuzz(x);
    });
    
    then('The result is FizzBuzz', () => {
      expect(z).toBe('FizzBuzz');
    });
  });
  
  test('FizzBuzz of 16 to equal Neither!', ({ given, when, then }) => {
    let x;
    let z;
    
    given('16', () => {
      x = 16
    });
    
    when('FizzBuzz', () => {
      z = isFizzBuzz(x);
    });
    
    then('The result is Neither!', () => {
      expect(z).toBe('Neither!');
    });
  });
});